import React from 'react';

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
    <div className="bg-white rounded-2xl border border-[#D9CEC1] p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-[#EBE4DA]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#704733] bg-[#F3ECE3] px-2.5 py-0.5 rounded border border-[#D9CEC1]">
            Etapa {stage.id} de 6
          </span>
          <h2 className="text-lg font-bold text-[#253240] mt-1">
            {stage.name}
          </h2>
          <p className="text-xs text-[#475569] mt-0.5">
            {stage.description}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#475569]">Estado:</span>
          <span
            className={`font-semibold text-xs px-3 py-1 rounded-full ${
              stage.status === 'aprobado'
                ? 'bg-[#EAF3EF] text-[#21684F] border border-[#A3D2BE]'
                : stage.status === 'en_revision'
                ? 'bg-[#FEF6E8] text-[#865A16] border border-[#F3D298]'
                : stage.status === 'observado'
                ? 'bg-[#FDF0F2] text-[#9D3549] border border-[#F5B5BF]'
                : 'bg-[#F1EFEA] text-[#64748B] border border-[#D8D4CC]'
            }`}
          >
            {stage.status === 'aprobado'
              ? 'Aprobado'
              : stage.status === 'en_revision'
              ? 'En Revisión'
              : stage.status === 'observado'
              ? 'Cambios Solicitados'
              : 'Bloqueado'}
          </span>
        </div>
      </div>

      {/* Stage Context and Specific Alerts */}
      {stage.id === 1 && (
        <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#D9CEC1] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#253240] flex items-center gap-1.5">
              <span>Auditoría de Calidad Gate 0 & Guía Fase 0</span>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#EAF3EF] text-[#21684F] border border-[#A3D2BE]">
                {gate0CompletedCount}/14 Conformes
              </span>
            </h4>
            <p className="text-xs text-[#475569]">
              {isGate0Compliant
                ? 'Los 14 criterios de Gate 0 están conformes. La etapa está lista para la decisión explícita de aprobación del tutor.'
                : 'Se requiere validar los 14 criterios de Gate 0 antes de que el tutor pueda dictaminar la aprobación formal de la Etapa 1.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenGate0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#EAF3EF] text-[#21684F] hover:bg-[#d8ece3] border border-[#A3D2BE] transition-colors shadow-xs"
            >
              Verificar Gate 0 ({gate0CompletedCount}/14)
            </button>
            <button
              type="button"
              onClick={onOpenPhase0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF7F2] text-[#704733] hover:bg-[#F3ECE3] border border-[#D9CEC1] transition-colors shadow-xs"
            >
              Consultar 17 Pasos Fase 0
            </button>
          </div>
        </div>
      )}

      {/* Actions Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EBE4DA]">
        <div className="text-xs text-[#475569]">
          {role === 'estudiante' && (
            <span>Modo Estudiante: Puede cargar nuevas versiones de evidencia y consultar la bitácora.</span>
          )}
          {role === 'tutor' && (
            <span>Modo Tutor: Puede revisar evidencias, emitir observaciones con motivo o dictaminar aprobación.</span>
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
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#704733] text-white hover:bg-[#573524] transition-colors flex items-center gap-1.5 shadow-xs"
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
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#704733] text-white hover:bg-[#573524] transition-colors flex items-center gap-1.5 shadow-xs"
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
            <span className="text-xs font-semibold text-[#21684F] bg-[#EAF3EF] px-3 py-1.5 rounded-lg border border-[#A3D2BE]">
              ✔ Etapa formalmente aprobada por el tutor
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
