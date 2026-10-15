import React, { useState } from 'react';

export default function TutorReviewModal({
  isOpen,
  onClose,
  activeStage,
  isGate0Compliant,
  gate0CompletedCount,
  onApproveStage,
  onRequestChanges,
  tutorName
}) {
  const [reviewMode, setReviewMode] = useState('observe'); // 'observe' | 'approve'
  const [observationText, setObservationText] = useState('');
  const [approvalNotes, setApprovalNotes] = useState(
    `Se dictamina la aprobación formal de la etapa ${activeStage?.name}. Evidencias y compromisos validados con estándar de calidad institucional.`
  );
  const [nextMilestone, setNextMilestone] = useState(
    activeStage?.id < 6 ? `Inicio de Etapa ${activeStage?.id + 1}` : 'Culminación de Trabajo de Grado'
  );
  const [deadline, setDeadline] = useState(() => {
    return new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  });
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleObserveSubmit = () => {
    if (!observationText.trim()) {
      setErrorMessage('La observación académica no puede estar vacía. Indique con precisión los cambios solicitados.');
      return;
    }
    onRequestChanges({
      notes: observationText.trim(),
      milestone: `Subsanación de observaciones en ${activeStage.name}`,
      deadline
    });
    setObservationText('');
    setErrorMessage('');
    onClose();
  };

  const handleApproveSubmit = () => {
    if (activeStage.id === 1 && !isGate0Compliant) {
      setErrorMessage(`No se puede aprobar la Etapa 1: Debe verificar los 14 criterios de Gate 0 (actualmente ${gate0CompletedCount}/14).`);
      return;
    }

    onApproveStage({
      notes: approvalNotes.trim(),
      milestone: nextMilestone,
      deadline
    });
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-[#D9CEC1] overflow-hidden">
        {/* Header */}
        <div className="bg-[#FAF7F2] p-5 sm:p-6 border-b border-[#D9CEC1] flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#704733] bg-[#F3ECE3] px-2 py-0.5 rounded border border-[#D9CEC1]">
              Dictamen del Tutor
            </span>
            <h3 className="text-lg font-bold text-[#253240] mt-1">
              Revisión y Decisión: {activeStage.name}
            </h3>
            <p className="text-xs text-[#475569] mt-0.5">
              Dictaminador: <strong>{tutorName}</strong> &bull; Etapa #{activeStage.id}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#253240] hover:bg-[#F3ECE3] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mode Selector */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF7F2] rounded-xl border border-[#D9CEC1]">
            <button
              type="button"
              onClick={() => { setReviewMode('observe'); setErrorMessage(''); }}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                reviewMode === 'observe'
                  ? 'bg-[#9D3549] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#253240]'
              }`}
            >
              Pedir Cambios / Observar
            </button>
            <button
              type="button"
              onClick={() => { setReviewMode('approve'); setErrorMessage(''); }}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                reviewMode === 'approve'
                  ? 'bg-[#21684F] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#253240]'
              }`}
            >
              Aprobar Etapa Formalmente
            </button>
          </div>

          {errorMessage && (
            <div className="p-3 bg-[#FDF0F2] text-[#9D3549] text-xs rounded-lg border border-[#F5B5BF] flex items-center gap-2">
              <span>⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form for Observation Mode */}
          {reviewMode === 'observe' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#253240] mb-1">
                  Observaciones Técnicas y Cambios Requeridos (Obligatorio):
                </label>
                <textarea
                  rows="4"
                  value={observationText}
                  onChange={(e) => setObservationText(e.target.value)}
                  placeholder="Detalle los puntos metodológicos que el estudiante debe subsanar..."
                  className="w-full p-3 text-xs rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#9D3549]"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-1">
                  Fecha Límite para Subsanación:
                </label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full p-2 text-xs rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleObserveSubmit}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#9D3549] text-white text-xs font-bold hover:bg-[#832c3d] transition-colors shadow-xs"
                >
                  Registrar Observación y Cambiar Estado a "Observado"
                </button>
              </div>
            </div>
          )}

          {/* Form for Approval Mode */}
          {reviewMode === 'approve' && (
            <div className="space-y-3">
              {activeStage.id === 1 && !isGate0Compliant && (
                <div className="p-3 bg-[#FEF6E8] text-[#865A16] text-xs rounded-lg border border-[#F3D298] space-y-1">
                  <p className="font-bold">⚠️ Requisito de Gate 0 Pendiente</p>
                  <p>La Etapa 1 cuenta actualmente con {gate0CompletedCount}/14 criterios conformes. Para dictaminar la aprobación debe verificar todos los 14 criterios en la auditoría.</p>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#253240] mb-1">
                  Dictamen Oficial de Aprobación:
                </label>
                <textarea
                  rows="3"
                  value={approvalNotes}
                  onChange={(e) => setApprovalNotes(e.target.value)}
                  className="w-full p-3 text-xs rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#21684F]"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">
                    Próximo Hito Académico:
                  </label>
                  <input
                    type="text"
                    value={nextMilestone}
                    onChange={(e) => setNextMilestone(e.target.value)}
                    className="w-full p-2 text-xs rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">
                    Fecha Límite Próxima:
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-2 text-xs rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleApproveSubmit}
                  disabled={activeStage.id === 1 && !isGate0Compliant}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-colors shadow-xs ${
                    activeStage.id === 1 && !isGate0Compliant
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      : 'bg-[#21684F] text-white hover:bg-[#184f3c]'
                  }`}
                >
                  Dictaminar Aprobación Formal y Habilitar Siguiente Etapa
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
