import React from 'react';

/**
 * StageStepper — Máquina de Estados de 6 Etapas con Diseño Editorial y Rail Táctil Móvil
 * Soporta desplazamiento táctil horizontal en viewports estrechos (390px) para máxima legibilidad.
 */
export default function StageStepper({
  stages,
  activeStageId,
  onSelectStage,
  onOpenGate0,
  onOpenPhase0
}) {
  const getBadge = (stage) => {
    switch (stage.status) {
      case 'aprobado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE]">
            <svg className="w-2.5 h-2.5 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Aprobado</span>
          </span>
        );
      case 'en_revision':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D97706]"></span>
            </span>
            <span>En Revisión</span>
          </span>
        );
      case 'observado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5]">
            <svg className="w-2.5 h-2.5 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
            </svg>
            <span>Observado</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#F1EFEA] text-[#64748B] border border-[#D8D4CC]">
            <svg className="w-2.5 h-2.5 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Bloqueado</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#D8CEBF] shadow-editorial-sm p-5 sm:p-6 space-y-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#E8E1D5]">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-[#1C1917] flex items-center gap-2">
            <span>Ciclo Académico de 6 Etapas</span>
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#F5F1EA] text-[#6E432F] border border-[#D8CEBF]">
              Máquina de Estados
            </span>
          </h2>
          <p className="text-xs text-[#57534E] mt-0.5">
            Selecciona una etapa para inspeccionar evidencias, requerimientos y bitácora.
          </p>
        </div>

        <div className="text-xs text-[#57534E]">
          Etapa activa:{' '}
          <strong className="text-[#6E432F]">
            #{activeStageId} {stages.find(s => s.id === activeStageId)?.name?.split('(')[0]}
          </strong>
        </div>
      </div>

      {/* Responsive Stages Rail: horizontal scroll on narrow mobile (<640px), grid on sm+ */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 overflow-x-auto pb-2 sm:pb-0 scroll-smooth">
        {stages.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <div
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`cursor-pointer rounded-xl p-3 border transition-all flex flex-col justify-between text-left shrink-0 w-44 sm:w-auto relative ${
                isActive
                  ? 'border-[#6E432F] bg-[#FBF9F5] shadow-editorial-sm ring-2 ring-[#6E432F]/15'
                  : 'border-[#D8CEBF] bg-white hover:border-[#6E432F]/40 hover:bg-[#FBF9F5]/40'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
                      isActive ? 'bg-[#6E432F] text-white' : 'bg-[#F5F1EA] text-[#6E432F]'
                    }`}
                  >
                    Etapa {stage.id}
                  </span>
                  {stage.status === 'aprobado' && (
                    <span className="text-[#059669] text-xs font-bold">✔</span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-[#1C1917] line-clamp-2 leading-snug">
                  {stage.name}
                </h3>
              </div>

              <div className="pt-2.5 mt-2 border-t border-[#E8E1D5] space-y-1.5">
                {getBadge(stage)}

                {stage.date && (
                  <div className="text-[10px] text-[#8F8881] font-mono">
                    {stage.date}
                  </div>
                )}

                {/* Shortcuts for Stage 1 */}
                {stage.id === 1 && (
                  <div className="space-y-1 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenGate0();
                      }}
                      className="w-full text-center px-1.5 py-1 text-[10px] font-semibold bg-[#EDF7F2] text-[#059669] hover:bg-[#d8ece3] rounded border border-[#9CD5BE] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Gate 0 (14)</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPhase0();
                      }}
                      className="w-full text-center px-1.5 py-1 text-[10px] font-semibold bg-[#F5F1EA] text-[#6E432F] hover:bg-[#EFE9DF] rounded border border-[#D8CEBF] transition-colors"
                    >
                      Fase 0 (17)
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
