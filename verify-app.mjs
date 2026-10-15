import { chromium } from 'playwright';
import fs from 'fs';

async function runVisualVerification() {
  console.log('🚀 Iniciando suite de verificación E2E y calidad con Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
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

  console.log('1. Navegando a http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // 1. Verificar Título y Elementos en Español
  const title = await page.title();
  console.log(`   ✓ Título de la página: "${title}"`);
  if (!title.includes('Seguimiento Académico')) {
    throw new Error(`Título no esperado en español: ${title}`);
  }

  // 2. Captura Inicial (Ficha del Proyecto en Escritorio 1440px)
  await page.screenshot({ path: 'screenshot_ficha_desktop.png', fullPage: true });
  console.log('   ✓ Captura de pantalla de Ficha en escritorio guardada (screenshot_ficha_desktop.png).');

  // 3. Verificar que existen exactamente 6 etapas (Etapa 1 a Etapa 6)
  console.log('2. Verificando las 6 etapas del ciclo académico...');
  for (let i = 1; i <= 6; i++) {
    const stageEl = page.locator(`text=Etapa ${i}`).first();
    const count = await stageEl.count();
    if (count === 0) {
      throw new Error(`No se encontró la Etapa ${i}`);
    }
  }
  const stage7El = page.locator('text=Etapa 7');
  if (await stage7El.count() > 0) {
    throw new Error('CRÍTICO: Se detectó una Etapa 7. Debe existir un máximo estricto de 6 etapas.');
  }
  console.log('   ✓ Exactamente 6 etapas académicas verificadas (Etapa 7 no existe).');

  // 4. Probar Portafolio con los 15 proyectos del piloto
  console.log('3. Verificando vista de Portafolio con los 15 proyectos del piloto...');
  const portfolioBtn = page.getByRole('button', { name: 'Portafolio (15)' });
  await portfolioBtn.click();
  await page.waitForTimeout(400);

  const projectCards = page.locator('button:has-text("Abrir Ficha de Seguimiento")');
  const projectCount = await projectCards.count();
  console.log(`   ✓ Proyectos visualizados en portafolio: ${projectCount}`);
  if (projectCount < 15) {
    throw new Error(`Se esperaban 15 proyectos en el piloto, se encontraron ${projectCount}`);
  }
  await page.screenshot({ path: 'screenshot_portfolio.png', fullPage: true });
  console.log('   ✓ Captura de pantalla de Portafolio guardada (screenshot_portfolio.png).');

  // Seleccionar otro proyecto (ej. Proyecto 2 de IA)
  await projectCards.nth(1).click();
  await page.waitForTimeout(400);
  console.log('   ✓ Proyecto alternativo seleccionado y ficha cargada.');

  // Volver al Proyecto 1
  await portfolioBtn.click();
  await page.waitForTimeout(300);
  await projectCards.first().click();
  await page.waitForTimeout(300);

  // 5. Probar Modal de Gate 0 (14 Criterios)
  console.log('4. Verificando Modal de Auditoría Gate 0 (14 Criterios)...');
  const gate0Btn = page.locator('button:has-text("Gate 0 (14)")').first();
  await gate0Btn.click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'screenshot_gate0_modal.png', fullPage: true });

  const gate0Checkboxes = page.locator('input[type="checkbox"]');
  const gate0ItemsCount = await gate0Checkboxes.count();
  console.log(`   ✓ Criterios de Gate 0 visibles: ${gate0ItemsCount}`);
  if (gate0ItemsCount !== 14) {
    throw new Error(`Se esperaban 14 criterios de Gate 0, se encontraron ${gate0ItemsCount}`);
  }

  // Cerrar Modal Gate 0
  const closeGate0Btn = page.getByRole('button', { name: 'Cerrar Auditoría' });
  await closeGate0Btn.click();
  await page.waitForTimeout(300);

  // 6. Probar Modal de Fase 0 (17 Actividades)
  console.log('5. Verificando Modal de Guía Metodológica Fase 0 (17 Pasos)...');
  const phase0Btn = page.locator('button:has-text("Fase 0 (17)")').first();
  await phase0Btn.click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'screenshot_phase0_modal.png', fullPage: true });

  const phase0Checkboxes = page.locator('input[type="checkbox"]');
  const phase0Count = await phase0Checkboxes.count();
  console.log(`   ✓ Actividades de Fase 0 visibles: ${phase0Count}`);
  if (phase0Count !== 17) {
    throw new Error(`Se esperaban 17 actividades de Fase 0, se encontraron ${phase0Count}`);
  }

  // Cerrar Modal Fase 0
  const closePhase0Btn = page.getByRole('button', { name: 'Cerrar Guía' });
  await closePhase0Btn.click();
  await page.waitForTimeout(300);

  // 7. Probar Cambio de Roles (Estudiante, Tutor, Administrador)
  console.log('6. Verificando conmutador de roles simulados...');
  const studentBtn = page.getByRole('button', { name: 'Estudiante', exact: true });
  await studentBtn.click();
  await page.waitForTimeout(300);
  console.log('   ✓ Modo cambiado a Estudiante.');

  const adminBtn = page.getByRole('button', { name: 'Administrador', exact: true });
  await adminBtn.click();
  await page.waitForTimeout(300);
  console.log('   ✓ Modo cambiado a Administrador.');

  const tutorBtn = page.getByRole('button', { name: 'Tutor', exact: true });
  await tutorBtn.click();
  await page.waitForTimeout(300);
  console.log('   ✓ Modo cambiado a Tutor.');

  // 8. Probar Exportación a CSV
  console.log('7. Verificando descarga y contenido de exportación CSV...');
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: /Exportar CSV/i }).click()
  ]);

  const downloadPath = await download.path();
  const csvContent = fs.readFileSync(downloadPath, 'utf8');
  console.log(`   ✓ CSV descargado en: ${downloadPath}`);
  console.log(`   ✓ Muestra de CSV (primeros 250 caracteres):\n${csvContent.substring(0, 250)}`);

  if (!csvContent.startsWith('\uFEFF')) {
    throw new Error('El CSV no contiene la codificación UTF-8 BOM requerida para Excel.');
  }
  if (!csvContent.includes('FICHA INSTITUCIONAL DE SEGUIMIENTO')) {
    throw new Error('Cabecera en español no encontrada en el CSV.');
  }

  // 9. Probar Responsive en Vista Móvil (390x844)
  console.log('8. Verificando diseño adaptativo en resolución móvil (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'screenshot_mobile_390.png', fullPage: true });
  console.log('   ✓ Captura de pantalla en móvil guardada (screenshot_mobile_390.png).');

  // 10. Inspección de Errores de Consola
  console.log(`9. Inspeccionando errores en la consola del navegador: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('⚠️ Se detectaron errores en consola:', consoleErrors);
    throw new Error(`Errores detectados en consola: ${consoleErrors.join(', ')}`);
  } else {
    console.log('   ✓ Cero (0) errores detectados en la consola del navegador.');
  }

  await browser.close();
  console.log('🎉 VERIFICACIÓN VISUAL Y E2E COMPLETADA CON ÉXITO.');
}

runVisualVerification().catch(err => {
  console.error('❌ Falló la verificación E2E:', err);
  process.exit(1);
});
