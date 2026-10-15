import React from 'react';

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
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#EAF3EF] text-[#21684F] border border-[#A3D2BE]">
            <svg className="w-3 h-3 text-[#21684F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Aprobado</span>
          </span>
        );
      case 'en_revision':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF6E8] text-[#865A16] border border-[#F3D298]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#865A16] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#865A16]"></span>
            </span>
            <span>En Revisión</span>
          </span>
        );
      case 'observado':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FDF0F2] text-[#9D3549] border border-[#F5B5BF]">
            <svg className="w-3 h-3 text-[#9D3549]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>Cambios Solicitados</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#F1EFEA] text-[#64748B] border border-[#D8D4CC]">
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
    <div className="bg-white rounded-2xl border border-[#D9CEC1] shadow-sm p-6 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#EBE4DA]">
        <div>
          <h2 className="text-base font-bold text-[#253240] flex items-center gap-2">
            <span>Ciclo Académico de 6 Etapas</span>
            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#F3ECE3] text-[#704733] border border-[#D9CEC1]">
              Máquina de Estados
            </span>
          </h2>
          <p className="text-xs text-[#475569]">
            Haga clic en una etapa para gestionar sus evidencias, requerimientos y bitácora.
          </p>
        </div>

        <div className="text-xs text-[#475569]">
          Etapa activa seleccionada:{' '}
          <strong className="text-[#704733]">#{activeStageId} {stages.find(s => s.id === activeStageId)?.name}</strong>
        </div>
      </div>

      {/* Responsive Grid for 6 Stages (6 columns on lg, 3 on md, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
        {stages.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <div
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`cursor-pointer rounded-xl p-3.5 border transition-all flex flex-col justify-between text-left relative ${
                isActive
                  ? 'border-[#704733] bg-[#FAF7F2] shadow-xs ring-2 ring-[#704733]/20'
                  : 'border-[#D9CEC1] bg-white hover:border-[#704733]/40 hover:bg-[#FAF7F2]/50'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#704733] text-white' : 'bg-[#F3ECE3] text-[#704733]'
                    }`}
                  >
                    Etapa {stage.id}
                  </span>
                  {stage.status === 'aprobado' && (
                    <span className="text-[#21684F] text-xs font-bold">✔</span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-[#253240] line-clamp-2 leading-snug">
                  {stage.name}
                </h3>
              </div>

              <div className="pt-3 mt-2 border-t border-[#EBE4DA] space-y-2">
                {getBadge(stage)}

                {stage.date && (
                  <div className="text-[10px] text-[#475569]">
                    Fecha: {stage.date}
                  </div>
                )}

                {/* Shortcuts for Stage 1 */}
                {stage.id === 1 && (
                  <div className="space-y-1.5 pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenGate0();
                      }}
                      className="w-full text-center px-2 py-1 text-[11px] font-semibold bg-[#EAF3EF] text-[#21684F] hover:bg-[#d8ece3] rounded-md border border-[#A3D2BE] transition-colors flex items-center justify-center gap-1"
                    >
                      <svg className="w-3 h-3 text-[#21684F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span>Gate 0 (14)</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPhase0();
                      }}
                      className="w-full text-center px-2 py-1 text-[11px] font-semibold bg-[#FAF7F2] text-[#704733] hover:bg-[#F3ECE3] rounded-md border border-[#D9CEC1] transition-colors"
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
