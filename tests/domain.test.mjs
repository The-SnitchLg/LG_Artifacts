import assert from 'node:assert/strict';
import { calculateProgress, calculateRiskLevel } from '../src/domain/progressCalculator.js';
import { canTransition, STAGE_STATUS } from '../src/domain/stageMachine.js';
import { validateGate0 } from '../src/domain/gate0Validator.js';
import { sanitizeCSVValue, exportProjectToCSV } from '../src/domain/csvExporter.js';
import { PILOT_PROJECTS } from '../src/data/pilotData.js';

console.log('🧪 Iniciando pruebas unitarias de lógica de dominio (Academic Tracking)...');

// --- 1. Cálculo de Progreso (Denominador estricto: 6) ---
console.log('  1. Verificando cálculo de avance sobre 6 etapas...');
const testStages0 = [
  { id: 1, status: 'en_revision' }, { id: 2, status: 'pendiente' },
  { id: 3, status: 'pendiente' }, { id: 4, status: 'pendiente' },
  { id: 5, status: 'pendiente' }, { id: 6, status: 'pendiente' }
];
assert.equal(calculateProgress(testStages0).percentage, 0, '0 etapas aprobadas = 0%');

const testStages1 = [
  { id: 1, status: 'aprobado' }, { id: 2, status: 'en_revision' },
  { id: 3, status: 'pendiente' }, { id: 4, status: 'pendiente' },
  { id: 5, status: 'pendiente' }, { id: 6, status: 'pendiente' }
];
assert.equal(calculateProgress(testStages1).percentage, 17, '1 de 6 etapas aprobadas = 17% (redondeado)');

const testStages3 = [
  { id: 1, status: 'aprobado' }, { id: 2, status: 'aprobado' },
  { id: 3, status: 'aprobado' }, { id: 4, status: 'en_revision' },
  { id: 5, status: 'pendiente' }, { id: 6, status: 'pendiente' }
];
assert.equal(calculateProgress(testStages3).percentage, 50, '3 de 6 etapas aprobadas = 50%');

const testStages6 = [
  { id: 1, status: 'aprobado' }, { id: 2, status: 'aprobado' },
  { id: 3, status: 'aprobado' }, { id: 4, status: 'aprobado' },
  { id: 5, status: 'aprobado' }, { id: 6, status: 'aprobado' }
];
assert.equal(calculateProgress(testStages6).percentage, 100, '6 de 6 etapas aprobadas = 100%');
console.log('     ✓ Progreso exacto validado para 0%, 17%, 50% y 100%.');

// Test calculateRiskLevel
assert.equal(calculateRiskLevel({ stages: [{ status: 'observado' }] }), 'Medio', 'Riesgo Medio si hay etapa observada');
assert.equal(calculateRiskLevel({ stages: [{ status: 'aprobado' }], commitments: [] }), 'Completado', 'Riesgo Completado si todo aprobado');
console.log('     ✓ Cálculo de nivel de riesgo validado.');

// --- 2. Reglas de Máquina de Estados ---
console.log('  2. Verificando máquina de estados y transiciones...');

// Estudiante no puede aprobar
const studentApprove = canTransition({
  currentStatus: STAGE_STATUS.EN_REVISION,
  targetStatus: STAGE_STATUS.APROBADO,
  actorRole: 'estudiante',
  stageNumber: 1,
  isGate0Compliant: true
});
assert.equal(studentApprove.allowed, false, 'Estudiante no puede aprobar etapas');

// Tutor no puede aprobar etapa 1 si Gate 0 < 14
const tutorApproveIncompleteGate0 = canTransition({
  currentStatus: STAGE_STATUS.EN_REVISION,
  targetStatus: STAGE_STATUS.APROBADO,
  actorRole: 'tutor',
  stageNumber: 1,
  isGate0Compliant: false
});
assert.equal(tutorApproveIncompleteGate0.allowed, false, 'No se aprueba Etapa 1 con Gate 0 incompleto');

// Tutor SÍ puede aprobar etapa 1 si Gate 0 == 14
const tutorApproveCompleteGate0 = canTransition({
  currentStatus: STAGE_STATUS.EN_REVISION,
  targetStatus: STAGE_STATUS.APROBADO,
  actorRole: 'tutor',
  stageNumber: 1,
  isGate0Compliant: true
});
assert.equal(tutorApproveCompleteGate0.allowed, true, 'Tutor puede aprobar Etapa 1 con Gate 0 conforme');

// No se puede aprobar Etapa 2 si Etapa 1 no está aprobada
const approveStage2Without1 = canTransition({
  currentStatus: STAGE_STATUS.EN_REVISION,
  targetStatus: STAGE_STATUS.APROBADO,
  actorRole: 'tutor',
  stageNumber: 2,
  previousStageApproved: false
});
assert.equal(approveStage2Without1.allowed, false, 'No se puede aprobar etapa sin previa aprobada');

// Solicitar cambios exige observación no vacía
const observeWithoutNote = canTransition({
  currentStatus: STAGE_STATUS.EN_REVISION,
  targetStatus: STAGE_STATUS.OBSERVADO,
  actorRole: 'tutor',
  hasObservation: false
});
assert.equal(observeWithoutNote.allowed, false, 'Observación no puede estar vacía');
console.log('     ✓ Restricciones de autorización y precondiciones validadas.');

// --- 3. Auditoría Gate 0 (14 Criterios y No Auto-aprobación) ---
console.log('  3. Verificando validador de Gate 0...');
const gate0Partial = Array.from({ length: 14 }, (_, i) => ({ id: `G0-${i+1}`, checked: i < 13 }));
const validationPartial = validateGate0(gate0Partial);
assert.equal(validationPartial.isFullyCompliant, false, '13/14 no es conforme');
assert.equal(validationPartial.missingCount, 1, 'Falta 1 criterio');

const gate0Full = Array.from({ length: 14 }, (_, i) => ({ id: `G0-${i+1}`, checked: true }));
const validationFull = validateGate0(gate0Full);
assert.equal(validationFull.isFullyCompliant, true, '14/14 es conforme');
console.log('     ✓ Validador de Gate 0 verificado.');

// --- 4. Exportación CSV y Sanitización de Fórmulas ---
console.log('  4. Verificando sanitización de CSV (QA-19 / CA-09)...');
assert.equal(sanitizeCSVValue('=SUM(A1:A10)'), '"\'=SUM(A1:A10)"', 'Neutraliza fórmula =');
assert.equal(sanitizeCSVValue('+cmd|/c'), '"\'+cmd|/c"', 'Neutraliza fórmula +');
assert.equal(sanitizeCSVValue('-1+1'), '"\'-1+1"', 'Neutraliza fórmula -');
assert.equal(sanitizeCSVValue('@echo'), '"\'@echo"', 'Neutraliza fórmula @');
assert.equal(sanitizeCSVValue('Economía Circular'), '"Economía Circular"', 'Respeta texto legítimo');

const sampleCSV = exportProjectToCSV(PILOT_PROJECTS[0]);
assert.ok(sampleCSV.startsWith('\uFEFF'), 'El CSV debe iniciar con UTF-8 BOM');
assert.ok(sampleCSV.includes('Impacto de la Economía Circular'), 'Incluye título con tildes');
assert.ok(sampleCSV.includes('G0-01'), 'Incluye códigos Gate 0');
assert.ok(sampleCSV.includes('6 etapas'), 'Menciona las 6 etapas académicas');
console.log('     ✓ Exportación CSV validada con UTF-8 BOM y mitigación de inyección.');

console.log('✅ TODAS LAS PRUEBAS UNITARIAS DE DOMINIO PASARON SATISFACTORIAMENTE (100% OK).\n');
