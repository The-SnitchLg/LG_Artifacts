/**
 * Calculador de Progreso Academico y Nivel de Riesgo
 * Regla de negocio mandatoria: Progreso = (approvedStages / 6) * 100
 */

export function calculateProgress(stages = []) {
  const approvedCount = stages.filter(s => s.status === 'aprobado').length;
  const totalStages = 6;
  const percentage = Math.round((approvedCount / totalStages) * 100);

  return {
    approvedCount,
    totalStages,
    percentage,
    formatted: `${percentage}% (${approvedCount}/6 etapas)`
  };
}

export function calculateRiskLevel(project = {}) {
  const stages = project.stages || [];
  const activeStage = stages.find(s => s.status === 'en_revision' || s.status === 'observado');

  if (!activeStage) {
    const isCompleted = stages.every(s => s.status === 'aprobado');
    return isCompleted ? 'Completado' : 'Bajo';
  }

  if (activeStage.status === 'observado') {
    return 'Medio';
  }

  // Si tiene compromisos vencidos
  const commitments = project.commitments || [];
  const today = new Date().toISOString().split('T')[0];
  const hasOverdue = commitments.some(c => c.status === 'pendiente' && c.dueDate < today);

  if (hasOverdue) {
    return 'Alto';
  }

  return 'Bajo';
}
