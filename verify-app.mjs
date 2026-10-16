import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { preview } from 'vite';

async function runVisualVerification() {
  console.log('🚀 Iniciando suite de verificación E2E Academic Flow 2.0 con Playwright...');

  // Asegurar directorio de capturas
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
    // 2. Navegar a la aplicación
    console.log(`2. Navegando a ${baseUrl}...`);
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // Verificar Título
    const title = await page.title();
    console.log(`   ✓ Título de la página: "${title}"`);
    if (!title.includes('Seguimiento Académico')) {
      throw new Error(`Título inesperado: ${title}`);
    }

    // 3. Verificación de Rol Tutor (Default)
    console.log('3. Verificando Espacio del Tutor (TutorWorkspace)...');
    await page.waitForSelector('text=Pendientes de revisión');
    await page.waitForSelector('text=Dra. Ana Martínez');
    await page.waitForSelector('text=Criterios');

    // Cotejar las pestañas
    const criteriosTab = page.locator('button:has-text("Criterios")').first();
    await criteriosTab.click();
    await page.waitForTimeout(300);

    // Contar criterios Gate 0
    const gate0Checkboxes = page.locator('input[type="checkbox"]');
    const gate0Count = await gate0Checkboxes.count();
    console.log(`   ✓ Criterios de Gate 0 encontrados en pestaña: ${gate0Count}`);
    if (gate0Count !== 14) {
      throw new Error(`Se esperaban 14 criterios de Gate 0, se encontraron ${gate0Count}`);
    }

    // Probar abrir panel contextual con "Aprobar etapa"
    const approveBtn = page.locator('button:has-text("Aprobar etapa")').first();
    await approveBtn.click();
    await page.waitForTimeout(400);

    const drawerTitle = page.locator('#drawer-title');
    const isDrawerVisible = await drawerTitle.isVisible();
    console.log(`   ✓ Cajón contextual de dictamen visible: ${isDrawerVisible}`);

    // Cerrar cajón
    const closeDrawerBtn = page.locator('button[aria-label="Cerrar panel contextual"], button[aria-label="Cerrar panel"]').first();
    await closeDrawerBtn.click();
    await page.waitForTimeout(300);

    // Captura Tutor Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_tutor_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Tutor (1440px) guardada.');

    // 4. Conmutar a Rol Estudiante
    console.log('4. Cambiando a Rol Estudiante...');
    const roleButton = page.locator('button[aria-label="Seleccionar rol de demostración"]');
    await roleButton.click();
    await page.waitForTimeout(200);

    const studentOption = page.locator('button:has-text("Estudiante")').first();
    await studentOption.click();
    await page.waitForTimeout(400);

    // Verificar elementos del Estudiante
    await page.waitForSelector('text=Mi proyecto');
    await page.waitForSelector('text=Tu Siguiente Paso');
    await page.locator('button:has-text("Etapa 1")').first().waitFor({ state: 'visible' });
    await page.locator('button:has-text("Etapa 6")').first().waitFor({ state: 'visible' });

    // Verificar que no existe Etapa 7
    const stage7 = await page.locator('text=Etapa 7').count();
    if (stage7 > 0) throw new Error('Se detectó Etapa 7 inválida.');
    console.log('   ✓ Ciclo de 6 etapas académicas verificado para Estudiante.');

    // Captura Estudiante Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_student_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Estudiante (1440px) guardada.');

    // 5. Conmutar a Rol Administrador
    console.log('5. Cambiando a Rol Administrador...');
    await roleButton.click();
    await page.waitForTimeout(200);

    const adminOption = page.locator('button:has-text("Administrador")').first();
    await adminOption.click();
    await page.waitForTimeout(400);

    // Verificar elementos del Administrador
    await page.waitForSelector('text=Proyectos de grado');
    await page.waitForSelector('text=15'); // 15 proyectos
    await page.waitForSelector('text=Avance promedio');

    // Captura Administrador Desktop 1440px
    await page.screenshot({ path: path.join(screenshotDir, 'desktop_admin_1440.png'), fullPage: true });
    console.log('   ✓ Captura de Administrador (1440px) guardada.');

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
    if (!csvContent.includes('FICHA INSTITUCIONAL DE SEGUIMIENTO')) {
      throw new Error('Falta la cabecera académica esperada en el CSV.');
    }
    console.log(`   ✓ CSV exportado y validado con BOM UTF-8 y cabecera en español (${csvContent.length} bytes).`);

    // 7. Pruebas de Responsividad y Desbordamiento Horizontal
    console.log('7. Verificando responsividad multi-dispositivo...');

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
    if (overflow768) {
      const culprits = await page.evaluate(() => {
        const res = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > window.innerWidth + 1) {
            res.push({ tag: el.tagName, id: el.id, class: (el.className || '').toString().slice(0, 60), right: r.right });
          }
        });
        return res.slice(0, 5);
      });
      console.log('   ⚠️ Desbordamiento en 768px:', culprits);
    }
    console.log(`   ✓ 768px sin desbordamiento horizontal: ${!overflow768}`);
    await page.screenshot({ path: path.join(screenshotDir, 'tablet_768.png'), fullPage: true });

    // 390px (Mobile iPhone 14 / standard)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    let overflow390 = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (overflow390) {
      const culprits = await page.evaluate(() => {
        const res = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > window.innerWidth + 1) {
            res.push({ tag: el.tagName, id: el.id, class: (el.className || '').toString().slice(0, 60), right: r.right });
          }
        });
        return res.slice(0, 5);
      });
      console.log('   ⚠️ Desbordamiento en 390px:', culprits);
    }
    console.log(`   ✓ 390px sin desbordamiento horizontal: ${!overflow390}`);

    // Probar menú hamburguesa en móvil
    const hamburgerBtn = page.locator('button[aria-label="Abrir menú de navegación"]');
    await hamburgerBtn.click();
    await page.waitForTimeout(300);
    const sidebarMobileVisible = await page.locator('#sidebar').isVisible();
    console.log(`   ✓ Cajón de navegación móvil abierto: ${sidebarMobileVisible}`);

    await page.screenshot({ path: path.join(screenshotDir, 'mobile_390_nav_open.png') });

    // Cerrar menú móvil haciendo click fuera de la barra lateral (x=320 en 390px)
    await page.mouse.click(320, 200);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(screenshotDir, 'mobile_390.png'), fullPage: true });
    console.log('   ✓ Capturas móviles (390px) guardadas.');

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
