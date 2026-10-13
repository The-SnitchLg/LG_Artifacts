import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function runVisualVerification() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
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

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  // 1. Initial Screenshot
  await page.screenshot({ path: 'screenshot_initial.png', fullPage: true });
  console.log('✓ Initial page loaded and screenshot taken.');

  // 2. Interact with Role Switcher (Switch to Student)
  console.log('Testing Role Switcher (Student)...');
  const studentBtn = page.getByRole('button', { name: /View: Student/i });
  await studentBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_student_mode.png', fullPage: true });
  console.log('✓ Role switched to Student view.');

  // Switch back to Tutor
  console.log('Testing Role Switcher (Tutor)...');
  const tutorBtn = page.getByRole('button', { name: /View: Tutor/i });
  await tutorBtn.click();
  await page.waitForTimeout(500);

  // 3. Open Gate 0 Verification Drawer via "Revisar Evidencia"
  console.log('Opening Gate 0 modal via "Revisar Evidencia"...');
  const revisarBtn = page.getByRole('button', { name: /Revisar Evidencia/i }).first();
  await revisarBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot_gate0_modal.png', fullPage: true });
  console.log('✓ Gate 0 verification modal opened.');

  // Toggle one of the unchecked items (e.g. G0-13)
  console.log('Toggling Gate 0 checklist items...');
  const uncheckedBox = page.locator('input[type="checkbox"]:not(:checked)').first();
  if (await uncheckedBox.count() > 0) {
    await uncheckedBox.click();
    await page.waitForTimeout(300);
  }

  // Close modal
  const closeBtn = page.getByRole('button', { name: 'Cerrar' });
  await closeBtn.click();
  await page.waitForTimeout(500);

  // 4. Test Export to Excel (.csv) trigger
  console.log('Testing CSV Export download trigger...');
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: /Export to Excel/i }).click()
  ]);

  const downloadPath = await download.path();
  console.log(`✓ CSV Export triggered and downloaded file to: ${downloadPath}`);
  const csvContent = fs.readFileSync(downloadPath, 'utf8');
  console.log(`✓ CSV Content sample (first 250 chars):\n${csvContent.substring(0, 250)}`);

  console.log(`Console error count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Errors found in console:', consoleErrors);
  } else {
    console.log('✓ Zero console errors detected.');
  }

  await browser.close();
}

runVisualVerification().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});
