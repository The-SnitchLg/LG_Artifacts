import React from 'react';
import StatusBadge from '../../components/StatusBadge.jsx';

/**
 * StageDetail — Detalle Operativo de la Etapa Activa
 * Muestra el contexto metodológico, requisitos de auditoría y botones de acción según rol.
 */
export default function StageDetail({
  stage,
  role,
  onOpenGate0,
  onOpenPhase0,
  onOpenReviewModal,
  onStudentUploadEvidence,
  isGate0Compliant,
  gate0CompletedCount
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#D8CEBF] p-5 sm:p-6 shadow-editorial-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-[#E8E1D5]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E432F] bg-[#F5F1EA] px-2.5 py-0.5 rounded-full border border-[#D8CEBF]">
            Etapa {stage.id} de 6
          </span>
          <h2 className="text-lg font-bold text-[#1C1917] mt-1 tracking-tight">
            {stage.name}
          </h2>
          <p className="text-xs text-[#57534E] mt-0.5 leading-relaxed">
            {stage.description}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#57534E]">Estado:</span>
          <StatusBadge type="stage" value={stage.status} />
        </div>
      </div>

      {/* Stage 1 Protocol & Gate 0 Card */}
      {stage.id === 1 && (
        <div className="bg-[#FBF9F5] p-4 rounded-xl border border-[#D8CEBF] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#1C1917] flex items-center gap-2">
              <span>Auditoría de Calidad Gate 0 & Guía Fase 0</span>
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border font-mono ${
                isGate0Compliant
                  ? 'bg-[#EDF7F2] text-[#059669] border-[#9CD5BE]'
                  : 'bg-[#FFFBEB] text-[#D97706] border-[#FCD34D]'
              }`}>
                {gate0CompletedCount}/14 Conformes
              </span>
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              {isGate0Compliant
                ? 'Los 14 criterios de Gate 0 están conformes. La etapa está habilitada para la decisión formal de aprobación del tutor.'
                : 'Se requiere certificar los 14 criterios de Gate 0 antes de que el tutor pueda emitir el dictamen formal de aprobación.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenGate0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#EDF7F2] text-[#059669] hover:bg-[#d8ece3] border border-[#9CD5BE] transition-colors shadow-xs"
            >
              Auditar Gate 0 ({gate0CompletedCount}/14)
            </button>
            <button
              type="button"
              onClick={onOpenPhase0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#F5F1EA] text-[#6E432F] hover:bg-[#EFE9DF] border border-[#D8CEBF] transition-colors shadow-xs"
            >
              Consultar 17 Pasos Fase 0
            </button>
          </div>
        </div>
      )}

      {/* Role Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E8E1D5]">
        <div className="text-xs text-[#57534E]">
          {role === 'estudiante' && (
            <span>Modo Estudiante: Carga evidencias y consulta observaciones del tutor.</span>
          )}
          {role === 'tutor' && (
            <span>Modo Tutor: Evalúa evidencias, emite observaciones o dictamina aprobación.</span>
          )}
          {role === 'admin' && (
            <span>Modo Administrador: Supervisión y trazabilidad del proyecto sin alteración de dictámenes.</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Student Upload Button */}
          {role === 'estudiante' && stage.status !== 'aprobado' && (
            <button
              type="button"
              onClick={onStudentUploadEvidence}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#6E432F] text-white hover:bg-[#553323] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
              </svg>
              <span>{stage.status === 'observado' ? 'Entregar Evidencia Corregida' : 'Cargar Nueva Evidencia'}</span>
            </button>
          )}

          {/* Tutor Decision Buttons */}
          {role === 'tutor' && stage.status !== 'aprobado' && (
            <button
              type="button"
              onClick={onOpenReviewModal}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#6E432F] text-white hover:bg-[#553323] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="m9 15 2 2 4-4" />
              </svg>
              <span>Dictaminar / Revisar Evidencia</span>
            </button>
          )}

          {stage.status === 'aprobado' && (
            <span className="text-xs font-semibold text-[#059669] bg-[#EDF7F2] px-3 py-1.5 rounded-xl border border-[#9CD5BE]">
              ✔ Etapa formalmente aprobada por el tutor
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
