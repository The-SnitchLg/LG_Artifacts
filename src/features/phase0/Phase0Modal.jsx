import React from 'react';

export default function Phase0Modal({
  isOpen,
  onClose,
  phase0Steps,
  onToggleStep
}) {
  if (!isOpen) return null;

  const completedCount = phase0Steps.filter(s => s.completed).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#D9CEC1] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-b border-[#D9CEC1] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#704733] bg-[#F3ECE3] px-2 py-0.5 rounded border border-[#D9CEC1]">
                Guía Metodológica
              </span>
              <span className="text-[11px] font-semibold text-[#704733] bg-[#F3ECE3] px-2.5 py-0.5 rounded-full border border-[#D9CEC1]">
                {completedCount}/17 Actividades
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#253240] mt-1">
              Fase 0: Preparación de la Investigación (17 Pasos)
            </h3>
            <p className="text-xs text-[#475569] mt-0.5">
              Ruta metodológica estructurada para la formulación rigurosa del protocolo de grado.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#253240] hover:bg-[#F3ECE3] transition-colors"
            title="Cerrar ventana"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Steps List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {phase0Steps.map((step) => (
            <div
              key={step.number}
              onClick={() => onToggleStep(step.number)}
              className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                step.completed
                  ? 'bg-[#EAF3EF]/30 border-[#A3D2BE]'
                  : 'bg-white border-[#D9CEC1] hover:border-[#704733]/50'
              }`}
            >
              <input
                type="checkbox"
                checked={step.completed}
                onChange={() => {}} // Handled by parent container click
                className="mt-0.5 w-4 h-4 rounded text-[#704733] focus:ring-[#704733] border-[#D9CEC1]"
              />

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#704733] text-[11px] bg-[#F3ECE3] px-1.5 py-0.2 rounded">
                      Paso {step.number}
                    </span>
                    <span className="text-[10px] text-[#64748B] font-mono">
                      [{step.sheet}]
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-[10px] px-2 py-0.5 rounded ${
                      step.completed
                        ? 'bg-[#EAF3EF] text-[#21684F]'
                        : 'bg-[#FAF7F2] text-[#64748B]'
                    }`}
                  >
                    {step.completed ? 'Completado' : 'Pendiente'}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-[#253240]">
                  {step.name}
                </h4>

                <div className="text-[11px] text-[#475569] space-y-0.5">
                  <p><strong>Resultado esperado:</strong> {step.expectedResult}</p>
                  <p className="text-[#64748B]">Dependencia metodológica: {step.dependency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 border-t border-[#D9CEC1] flex items-center justify-between">
          <span className="text-xs text-[#475569]">
            {completedCount} de 17 actividades metodológicas completadas.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#253240] text-white hover:bg-[#1a232d] transition-colors"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
}
