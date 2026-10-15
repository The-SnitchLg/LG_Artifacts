import React from 'react';

export default function Gate0Modal({
  isOpen,
  onClose,
  gate0Items,
  onToggleItem,
  role,
  onShowToast
}) {
  if (!isOpen) return null;

  const completedCount = gate0Items.filter(i => i.checked).length;
  const isAllCompleted = completedCount === 14;

  const handleCheckboxClick = (id) => {
    if (role !== 'tutor') {
      onShowToast('Solo el tutor asignado tiene potestad para certificar los criterios de Gate 0.');
      return;
    }
    onToggleItem(id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#D9CEC1] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-b border-[#D9CEC1] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#704733] bg-[#F3ECE3] px-2 py-0.5 rounded border border-[#D9CEC1]">
                Protocolo de Calidad
              </span>
              <span className="text-[11px] font-semibold text-[#21684F] bg-[#EAF3EF] px-2.5 py-0.5 rounded-full border border-[#A3D2BE]">
                {completedCount}/14 Conformes
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#253240] mt-1">
              Auditoría de Salida Gate 0 — Etapa 1
            </h3>
            <p className="text-xs text-[#475569] mt-0.5">
              Verificación metodológica y formal obligatoria antes de habilitar la aprobación del Protocolo de Tesis.
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

        {/* Business Rule Notice Banner */}
        <div className="bg-[#FAF7F2] px-6 py-3 border-b border-[#EBE4DA] text-xs text-[#704733] flex items-center gap-2.5">
          <span className="font-bold text-sm">⚖</span>
          <div>
            <span className="font-bold">Regla Académica Institucional:</span> Alcanzar 14/14 criterios conformes habilita el botón de dictamen del tutor, pero <strong>nunca aprueba la etapa automáticamente</strong>. El tutor debe dictaminar de forma manual y explícita.
          </div>
        </div>

        {/* Criteria Checklist */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {gate0Items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCheckboxClick(item.id)}
              className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                item.checked
                  ? 'bg-[#EAF3EF]/40 border-[#A3D2BE]'
                  : 'bg-white border-[#D9CEC1] hover:border-[#704733]/50'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}} // Controlled via parent onClick
                className="mt-0.5 w-4 h-4 rounded text-[#21684F] focus:ring-[#21684F] border-[#D9CEC1]"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#704733] text-[11px] bg-[#F3ECE3] px-1.5 py-0.2 rounded">
                      {item.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#64748B]">
                      {item.category}
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-[10px] px-2 py-0.5 rounded ${
                      item.checked
                        ? 'bg-[#EAF3EF] text-[#21684F]'
                        : 'bg-[#FDF0F2] text-[#9D3549]'
                    }`}
                  >
                    {item.checked ? 'Conforme' : 'Pendiente'}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#253240] leading-snug">
                  {item.label}
                </p>

                <div className="text-[11px] text-[#64748B] flex flex-wrap gap-x-4">
                  <span>Hoja: <strong className="text-[#475569]">{item.evidenceSheet || 'Fase 0'}</strong></span>
                  {item.suggestedCheck && (
                    <span>Verificación: <span className="italic">{item.suggestedCheck}</span></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] p-4 sm:p-5 border-t border-[#D9CEC1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#475569]">
            {isAllCompleted ? (
              <span className="text-[#21684F] font-bold">
                ✔ 14/14 criterios completados. El tutor puede proceder con la aprobación formal.
              </span>
            ) : (
              <span>
                Faltan <strong>{14 - completedCount} criterios</strong> para completar el protocolo.
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#253240] text-white hover:bg-[#1a232d] transition-colors"
            >
              Cerrar Auditoría
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
