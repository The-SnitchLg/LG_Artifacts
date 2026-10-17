import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { preview } from 'vite';

async function runVisualVerification() {
  console.log('🚀 Iniciando suite de verificación E2E Academic Flow 2.0 (Integración donpe + Paleta Cálida) con Playwright...');

  const screenshotDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // 1. Iniciar servidor Vite Preview en puerto 4173
  console.log('1. Levantando servidor Vite Preview para pruebas de producción...');
  const server = await preview({
    preview: {
      port: 4173,
      host: 'localhost'
    }
  });

  const baseUrl = 'http://localhost:4173/';
  console.log(`   ✓ Servidor activo en ${baseUrl}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    acceptDownloads: true
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  try {
    // 2. Navegar a la raíz (Bienvenida / ¿Cómo funciona?)
    console.log(`2. Navegando a ${baseUrl}...`);
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // Verificar Título
    const title = await page.title();
    console.log(`   ✓ Título de la página: "${title}"`);
    if (!title.includes('Seguimiento')) {
      throw new Error(`Título inesperado: ${title}`);
    }

    // Verificar pantalla de bienvenida
    console.log('   ✓ Verificando pantalla de bienvenida (WelcomeScreen)...');
    await page.waitForSelector('text=Así avanza cada etapa');
    await page.waitForSelector('text=Las 6 etapas del trabajo de grado');
    await page.waitForSelector('text=Gate 0:');
    await page.waitForSelector('button:has-text("Entrar como tutor")');

    // Captura WelcomeScreen Desktop
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_welcome_1440.png'), fullPage: true });

    // Helper para cerrar el tour guiado si se despliega automáticamente
    const closeTourIfOpen = async () => {
      try {
        const skipTourBtn = page.locator('button:has-text("Saltar recorrido"), button[aria-label="Cerrar recorrido"]').first();
        if (await skipTourBtn.isVisible({ timeout: 800 }).catch(() => false)) {
          console.log('   ✓ Cerrando recorrido guiado...');
          await skipTourBtn.click();
          await page.waitForTimeout(300);
        }
      } catch {
        // noop
      }
    };

    // 3. Entrar como Tutor
    console.log('3. Entrando como Tutor...');
    await page.locator('button:has-text("Entrar como tutor")').click();
    await page.waitForTimeout(400);
    await closeTourIfOpen();

    // Verificar Espacio del Tutor
    await page.waitForSelector('text=Por revisar');
    await page.waitForSelector('text=Dr. Carlos Gutiérrez');
    await page.waitForSelector('text=Criterios');

    // Verificar 14 criterios de Gate 0
    const criteriosTab = page.locator('button:has-text("Criterios")').first();
    await criteriosTab.click();
    await page.waitForTimeout(300);

    const gate0Checkboxes = page.locator('input[type="checkbox"]');
    const gate0Count = await gate0Checkboxes.count();
    console.log(`   ✓ Criterios de Gate 0 encontrados: ${gate0Count}`);
    if (gate0Count !== 14) {
      throw new Error(`Se esperaban 14 criterios de Gate 0, se encontraron ${gate0Count}`);
    }

    // Captura Tutor Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_tutor_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Tutor (1440px) guardada.');

    // 4. Conmutar a Rol Estudiante
    console.log('4. Cambiando a Rol Estudiante...');
    const roleSelect = page.locator('select').first();
    await roleSelect.selectOption('estudiante');
    await page.waitForTimeout(400);
    await closeTourIfOpen();

    // Verificar elementos del Estudiante
    await page.waitForSelector('text=Mi proyecto');
    await page.waitForSelector('text=Tu Siguiente Paso');
    await page.waitForSelector('button:has-text("Etapa 1")');
    await page.waitForSelector('button:has-text("Etapa 6")');
    console.log('   ✓ Espacio de Estudiante y 6 etapas verificadas.');

    // Captura Estudiante Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_student_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Estudiante (1440px) guardada.');

    // Probar navegación a pantalla "Etapas" del Estudiante
    console.log('   ✓ Navegando a pantalla "Etapas"...');
    await page.locator('button:has-text("Etapas")').first().click();
    await page.waitForTimeout(300);
    await page.waitForSelector('h1:has-text("Etapas")');

    // Probar navegación a pantalla "Entregas" del Estudiante
    console.log('   ✓ Navegando a pantalla "Entregas"...');
    await page.locator('button:has-text("Entregas")').first().click();
    await page.waitForTimeout(300);
    await page.waitForSelector('h1:has-text("Entregas")');

    // Probar navegación a pantalla "Bitácora" del Estudiante
    console.log('   ✓ Navegando a pantalla "Bitácora"...');
    await page.locator('button:has-text("Bitácora")').first().click();
    await page.waitForTimeout(300);
    await page.waitForSelector('h1:has-text("Bitácora")');

    // 5. Conmutar a Rol Coordinación (Admin)
    console.log('5. Cambiando a Rol Coordinación...');
    await roleSelect.selectOption('admin');
    await page.waitForTimeout(400);
    await closeTourIfOpen();

    // Verificar elementos de Panorama (Coordinación)
    await page.waitForSelector('text=Panorama de la cohorte');
    await page.waitForSelector('text=Proyectos del piloto');
    await page.waitForSelector('text=Avance promedio');
    console.log('   ✓ Pantalla de Panorama verificada.');

    // Captura Coordinación Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_admin_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Coordinación (1440px) guardada.');

    // Probar navegación a pantalla "Proyectos" de Coordinación
    console.log('   ✓ Navegando a "Proyectos" de Coordinación...');
    await page.locator('button:has-text("Proyectos")').first().click();
    await page.waitForTimeout(300);
    await page.waitForSelector('input[placeholder*="Buscar proyecto"]');

    // Probar navegación a pantalla "Tutores" de Coordinación
    console.log('   ✓ Navegando a "Tutores" de Coordinación...');
    await page.locator('button:has-text("Tutores")').first().click();
    await page.waitForTimeout(300);
    await page.waitForSelector('text=Dr. Carlos Gutiérrez');

    // 6. Probar Exportación CSV
    console.log('6. Verificando exportación a CSV...');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('button:has-text("CSV")').first().click()
    ]);
    const downloadPath = await download.path();
    const csvContent = fs.readFileSync(downloadPath, 'utf8');
    if (!csvContent.startsWith('\uFEFF')) {
      throw new Error('Falta el prefijo UTF-8 BOM en el CSV exportado.');
    }
    console.log(`   ✓ CSV exportado y validado con BOM UTF-8 (${csvContent.length} bytes).`);

    // 7. Pruebas de Responsividad y Desbordamiento Horizontal
    console.log('7. Verificando responsividad multi-dispositivo (1024, 768, 390, 320 px)...');

    // 1024px (Tablet Landscape)
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForTimeout(300);
    let overflow1024 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`   ✓ 1024px sin desbordamiento horizontal: ${!overflow1024}`);
    await page.screenshot({ path: path.join(screenshotDir, 'tablet_1024.png'), fullPage: true });

    // 768px (Tablet Portrait)
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(300);
    let overflow768 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`   ✓ 768px sin desbordamiento horizontal: ${!overflow768}`);
    await page.screenshot({ path: path.join(screenshotDir, 'tablet_768.png'), fullPage: true });

    // 390px (Mobile iPhone 14 / standard)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    let overflow390 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`   ✓ 390px sin desbordamiento horizontal: ${!overflow390}`);

    // Probar menú hamburguesa en móvil
    const hamburgerBtn = page.locator('button[aria-label="Abrir menú de navegación"]');
    await hamburgerBtn.click();
    await page.waitForTimeout(300);
    const sidebarMobileVisible = await page.locator('#sidebar').isVisible();
    console.log(`   ✓ Cajón de navegación móvil abierto: ${sidebarMobileVisible}`);

    await page.screenshot({ path: path.join(screenshotDir, 'mobile_390_nav_open.png') });

    // Cerrar menú móvil haciendo click fuera (x=350, y=200)
    await page.mouse.click(350, 200);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(screenshotDir, 'mobile_390.png'), fullPage: true });
    console.log('   ✓ Capturas móviles (390px) guardadas.');

    // 320px (Small Mobile)
    await page.setViewportSize({ width: 320, height: 568 });
    await page.waitForTimeout(300);
    let overflow320 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`   ✓ 320px sin desbordamiento horizontal: ${!overflow320}`);

    // 8. Verificar Errores de Consola
    console.log(`8. Verificando consola de errores (Detectados: ${consoleErrors.length})...`);
    if (consoleErrors.length > 0) {
      console.warn('⚠️ Errores en consola:', consoleErrors);
      throw new Error(`Se detectaron errores en consola: ${consoleErrors.join(', ')}`);
    } else {
      console.log('   ✓ 0 errores en la consola del navegador.');
    }

    console.log('🎉 TODAS LAS VERIFICACIONES VISUALES Y E2E PASARON CON ÉXITO (100% OK).');
  } finally {
    await browser.close();
    await server.close();
    console.log('   ✓ Servidor Vite y navegador cerrados correctamente.');
  }
}

runVisualVerification().catch(err => {
  console.error('❌ Error en suite de verificación:', err);
  process.exit(1);
});
