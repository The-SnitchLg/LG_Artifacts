import React from 'react';

/**
 * NextStepBanner — Guía pedagógica activa inspirada en Kira Learning
 * Comunica inmediatamente al usuario su próximo paso según su rol.
 */
export default function NextStepBanner({
  role,
  activeStage,
  isGate0Compliant,
  gate0CompletedCount,
  onStudentUploadEvidence,
  onOpenReviewModal,
  onOpenGate0
}) {
  // 1. Rol: Estudiante
  if (role === 'estudiante') {
    if (activeStage.status === 'aprobado') {
      return (
        <div className="bg-[#EDF7F2] border border-[#9CD5BE] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold text-sm shrink-0">
              ✓
            </div>
            <div>
              <span className="font-bold text-[#059669] uppercase tracking-wider text-[10px] block">
                Etapa Culminada
              </span>
              <p className="font-bold text-[#1C1917] text-sm">
                Has completado formalmente la Etapa #{activeStage.id} ({activeStage.name.split('(')[0]}).
              </p>
              <p className="text-[#57534E] text-[11px] mt-0.5">
                Continúa con la siguiente etapa en el ciclo académico de 6 pasos.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (activeStage.status === 'observado') {
      return (
        <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
              !
            </div>
            <div>
              <span className="font-bold text-[#DC2626] uppercase tracking-wider text-[10px] block">
                Tu Siguiente Paso Inmediato
              </span>
              <p className="font-bold text-[#1C1917] text-sm">
                El tutor solicitó cambios en la Etapa #{activeStage.id}.
              </p>
              <p className="text-[#57534E] text-[11px] mt-0.5">
                Revisa las observaciones en la bitácora inferior y entrega la versión corregida del documento.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStudentUploadEvidence}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#DC2626] text-white hover:bg-[#b91c1c] transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
            <span>Subir Versión Corregida</span>
          </button>
        </div>
      );
    }

    if (activeStage.status === 'en_revision') {
      return (
        <div className="bg-[#FFFBEB] border border-[#FCD34D] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D97706] text-white flex items-center justify-center font-bold text-sm shrink-0">
              ⏳
            </div>
            <div>
              <span className="font-bold text-[#D97706] uppercase tracking-wider text-[10px] block">
                En Proceso de Evaluación
              </span>
              <p className="font-bold text-[#1C1917] text-sm">
                Evidencia de Etapa #{activeStage.id} entregada y en revisión por tu tutor.
              </p>
              <p className="text-[#57534E] text-[11px] mt-0.5">
                Recibirás la retroalimentación formal o dictamen de aprobación en este panel.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStudentUploadEvidence}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white text-[#D97706] border border-[#FCD34D] hover:bg-[#FFFBEB] transition-colors shrink-0"
          >
            Actualizar Archivo
          </button>
        </div>
      );
    }

    return (
      <div className="bg-[#F7F4EE] border border-[#D8CEBF] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6E432F] text-white flex items-center justify-center font-bold text-sm shrink-0">
            📌
          </div>
          <div>
            <span className="font-bold text-[#6E432F] uppercase tracking-wider text-[10px] block">
              Tu Siguiente Paso Inmediato
            </span>
            <p className="font-bold text-[#1C1917] text-sm">
              Preparar y entregar la evidencia de la Etapa #{activeStage.id} ({activeStage.name.split('(')[0]}).
            </p>
            <p className="text-[#57534E] text-[11px] mt-0.5">
              Carga tu avance documental en PDF para iniciar la revisión formal con tu tutor.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onStudentUploadEvidence}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#6E432F] text-white hover:bg-[#553323] transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          </svg>
          <span>Cargar Evidencia</span>
        </button>
      </div>
    );
  }

  // 2. Rol: Tutor
  if (role === 'tutor') {
    if (activeStage.status === 'aprobado') {
      return (
        <div className="bg-[#EDF7F2] border border-[#9CD5BE] rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold text-sm shrink-0">
              ✓
            </div>
            <div>
              <span className="font-bold text-[#059669] uppercase tracking-wider text-[10px] block">
                Dictamen Asentado
              </span>
              <p className="font-bold text-[#1C1917] text-sm">
                Has aprobado formalmente la Etapa #{activeStage.id}.
              </p>
              <p className="text-[#57534E] text-[11px] mt-0.5">
                La fecha de aprobación y notas de mérito quedaron registradas en la bitácora inmutable.
              </p>
            </div>
          </div>
        </div>
      );
    }

    const isGate0Blocking = activeStage.id === 1 && !isGate0Compliant;

    return (
      <div className="bg-[#F7F4EE] border border-[#D8CEBF] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6E432F] text-white flex items-center justify-center font-bold text-sm shrink-0">
            ⚖
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#6E432F] uppercase tracking-wider text-[10px] block">
                Acción Requerida del Tutor
              </span>
              {activeStage.id === 1 && (
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-bold ${
                  isGate0Compliant ? 'bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE]' : 'bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D]'
                }`}>
                  Gate 0: {gate0CompletedCount}/14
                </span>
              )}
            </div>
            <p className="font-bold text-[#1C1917] text-sm mt-0.5">
              Evaluar y dictaminar la Etapa #{activeStage.id} ({activeStage.name.split('(')[0]}).
            </p>
            <p className="text-[#57534E] text-[11px] mt-0.5">
              {isGate0Blocking
                ? 'Atención: Debe certificar los 14 criterios de Gate 0 antes de poder emitir la aprobación formal.'
                : 'Puede asentar observaciones con motivo o proceder a la aprobación explícita de la etapa.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          {activeStage.id === 1 && !isGate0Compliant && (
            <button
              type="button"
              onClick={onOpenGate0}
              className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#FFFBEB] text-[#D97706] hover:bg-[#FEF3C7] border border-[#FCD34D] transition-colors"
            >
              Auditar Gate 0 ({gate0CompletedCount}/14)
            </button>
          )}

          <button
            type="button"
            onClick={onOpenReviewModal}
            className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg bg-[#6E432F] text-white hover:bg-[#553323] transition-colors shadow-xs flex items-center justify-center gap-1.5"
          >
            <span>Dictaminar Etapa</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // 3. Rol: Administrador
  return (
    <div className="bg-[#F5F1EA] border border-[#D8CEBF] rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3 text-xs shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#1E293B] text-white flex items-center justify-center font-bold text-sm shrink-0">
          🏛
        </div>
        <div>
          <span className="font-bold text-[#1E293B] uppercase tracking-wider text-[10px] block">
            Supervisión Institucional (Modo Administrador)
          </span>
          <p className="font-bold text-[#1C1917] text-sm">
            Auditoría de cumplimiento, trazabilidad académica y seguimiento de cohorte.
          </p>
          <p className="text-[#57534E] text-[11px] mt-0.5">
            Solo el tutor asignado puede emitir dictámenes formales. Como administrador puede auditar el progreso y exportar reportes.
          </p>
        </div>
      </div>
    </div>
  );
}
