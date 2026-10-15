/**
 * Maquina de Estados y Reglas de Transicion para las 6 Etapas Academicas
 * Evolve, do not rebuild. Logica de dominio pura sin dependencias de React.
 */

export const STAGE_DEFINITIONS = [
  {
    id: 1,
    name: 'Propuesta / Protocolo (Gate 0)',
    description: 'Definicion rigurosa del problema, 14 criterios del protocolo y viabilidad metodologica.',
    hasGate0Audit: true
  },
  {
    id: 2,
    name: 'Marco Teórico',
    description: 'Revision sistematica de literatura y fundamentacion del estado del arte.',
    hasGate0Audit: false
  },
  {
    id: 3,
    name: 'Metodología',
    description: 'Diseno muestral, instrumentos validados y protocolo de recoleccion.',
    hasGate0Audit: false
  },
  {
    id: 4,
    name: 'Recolección',
    description: 'Levantamiento empirico de datos primarios o corpus documental.',
    hasGate0Audit: false
  },
  {
    id: 5,
    name: 'Análisis',
    description: 'Procesamiento estadistico, cualitativo y triangulacion de hallazgos.',
    hasGate0Audit: false
  },
  {
    id: 6,
    name: 'Documento Final',
    description: 'Redaccion academica integral, conclusiones y verificacion de originalidad.',
    hasGate0Audit: false
  }
];

export const STAGE_STATUS = {
  PENDIENTE: 'pendiente',
  EN_REVISION: 'en_revision',
  OBSERVADO: 'observado',
  APROBADO: 'aprobado'
};

/**
 * Valida si un actor tiene autorizacion y precondiciones para una transicion dada.
 */
export function canTransition({
  currentStatus,
  targetStatus,
  actorRole,
  stageNumber,
  isGate0Compliant = false,
  hasObservation = false,
  previousStageApproved = false
}) {
  // Transicion 1: Estudiante entrega evidencia de etapa activa
  if (
    currentStatus === STAGE_STATUS.PENDIENTE &&
    targetStatus === STAGE_STATUS.EN_REVISION
  ) {
    if (actorRole !== 'estudiante' && actorRole !== 'tutor') {
      return { allowed: false, reason: 'Solo el estudiante o tutor pueden cargar evidencias.' };
    }
    if (stageNumber > 1 && !previousStageApproved) {
      return { allowed: false, reason: 'No se puede habilitar una etapa si la anterior no esta aprobada.' };
    }
    return { allowed: true };
  }

  // Transicion 2: Estudiante entrega correccion tras observacion
  if (
    currentStatus === STAGE_STATUS.OBSERVADO &&
    targetStatus === STAGE_STATUS.EN_REVISION
  ) {
    if (actorRole !== 'estudiante' && actorRole !== 'tutor') {
      return { allowed: false, reason: 'Solo el estudiante o tutor pueden entregar correcciones.' };
    }
    return { allowed: true };
  }

  // Transicion 3: Tutor pide cambios (observado)
  if (
    currentStatus === STAGE_STATUS.EN_REVISION &&
    targetStatus === STAGE_STATUS.OBSERVADO
  ) {
    if (actorRole !== 'tutor') {
      return { allowed: false, reason: 'Solo el tutor asignado puede emitir observaciones.' };
    }
    if (!hasObservation) {
      return { allowed: false, reason: 'Es obligatorio registrar una observacion y motivo no vacio.' };
    }
    return { allowed: true };
  }

  // Transicion 4: Tutor aprueba etapa
  if (
    (currentStatus === STAGE_STATUS.EN_REVISION || currentStatus === STAGE_STATUS.OBSERVADO) &&
    targetStatus === STAGE_STATUS.APROBADO
  ) {
    if (actorRole !== 'tutor') {
      return { allowed: false, reason: 'Solo el tutor asignado puede aprobar formalmente una etapa.' };
    }
    if (stageNumber === 1 && !isGate0Compliant) {
      return {
        allowed: false,
        reason: 'Para aprobar la Etapa 1 se deben verificar positivamente los 14 criterios de Gate 0.'
      };
    }
    if (stageNumber > 1 && !previousStageApproved) {
      return {
        allowed: false,
        reason: `La etapa ${stageNumber - 1} debe estar aprobada antes de aprobar la etapa ${stageNumber}.`
      };
    }
    return { allowed: true };
  }

  return { allowed: false, reason: 'Transicion de estado no permitida por las reglas de flujo academico.' };
}
