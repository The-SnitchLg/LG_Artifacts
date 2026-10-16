import React, { useState } from 'react';

/**
 * TutorReviewModal — Modal de Dictamen Formal y Evaluación del Tutor
 * Provee interfaces explícitas y diferenciadas para observar o aprobar una etapa.
 */
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
      setErrorMessage(`No se puede aprobar la Etapa 1: Debe certificar los 14 criterios de Gate 0 (actualmente ${gate0CompletedCount}/14).`);
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-[#D8CEBF] overflow-hidden">
        {/* Header */}
        <div className="bg-[#FBF9F5] p-5 sm:p-6 border-b border-[#D8CEBF] flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E432F] bg-[#F5F1EA] px-2.5 py-0.5 rounded-full border border-[#D8CEBF]">
              Dictamen del Tutor
            </span>
            <h3 className="text-lg font-bold text-[#1C1917] mt-1 tracking-tight">
              Revisión y Decisión: {activeStage.name}
            </h3>
            <p className="text-xs text-[#57534E] mt-0.5">
              Dictaminador: <strong>{tutorName}</strong> &bull; Etapa #{activeStage.id}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F1EA] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mode Selector */}
        <div className="p-4 bg-[#F5F1EA] border-b border-[#D8CEBF] flex gap-2">
          <button
            type="button"
            onClick={() => {
              setReviewMode('observe');
              setErrorMessage('');
            }}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all ${
              reviewMode === 'observe'
                ? 'bg-white text-[#DC2626] border border-[#FCA5A5] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Solicitar Cambios / Observar
          </button>
          <button
            type="button"
            onClick={() => {
              setReviewMode('approve');
              setErrorMessage('');
            }}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all ${
              reviewMode === 'approve'
                ? 'bg-white text-[#059669] border border-[#9CD5BE] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Aprobar Etapa Formalmente
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs">
          {errorMessage && (
            <div className="p-3 bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl text-[#DC2626] font-medium flex items-center gap-2">
              <span>⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {reviewMode === 'observe' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  Observaciones Metodológicas y de Contenido (Obligatorio):
                </label>
                <textarea
                  rows={4}
                  value={observationText}
                  onChange={(e) => setObservationText(e.target.value)}
                  placeholder="Detalla las correcciones requeridas en el documento antes de proceder con la aprobación..."
                  className="w-full p-3 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#DC2626] leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  Fecha Límite Pactada para Subsanación:
                </label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917]"
                />
              </div>

              <div className="p-3 bg-[#FFFBEB] rounded-xl border border-[#FCD34D] text-[11px] text-[#D97706]">
                Al solicitar cambios, el estado de la etapa pasará a <strong>'Observado'</strong> y el nivel de riesgo del proyecto se ajustará automáticamente a <strong>'Medio'</strong> en la matriz de seguimiento.
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {activeStage.id === 1 && !isGate0Compliant && (
                <div className="p-3.5 bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl text-xs space-y-1">
                  <div className="font-bold text-[#DC2626] flex items-center gap-1.5">
                    <span>⛔ Bloqueo de Regla de Negocio: Gate 0 Incompleto</span>
                  </div>
                  <p className="text-[#57534E]">
                    Actualmente hay <strong>{gate0CompletedCount} de 14</strong> criterios conformes. No es posible dictaminar la aprobación formal de la Etapa 1 hasta verificar el 100% de Gate 0.
                  </p>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                  Notas de Dictamen y Mérito Académico:
                </label>
                <textarea
                  rows={3}
                  value={approvalNotes}
                  onChange={(e) => setApprovalNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#059669] leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Próximo Hito Académico:
                  </label>
                  <input
                    type="text"
                    value={nextMilestone}
                    onChange={(e) => setNextMilestone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#57534E] mb-1">
                    Fecha Objetivo Siguiente Hito:
                  </label>
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#EDF7F2] rounded-xl border border-[#9CD5BE] text-[11px] text-[#059669]">
                La aprobación formal asentará la fecha de hoy, liberará la siguiente etapa del ciclo académico y registrará la decisión en la bitácora inmutable.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FBF9F5] border-t border-[#D8CEBF] flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl text-[#57534E] hover:bg-[#F5F1EA] transition-colors"
          >
            Cancelar
          </button>

          {reviewMode === 'observe' ? (
            <button
              type="button"
              onClick={handleObserveSubmit}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#DC2626] text-white hover:bg-[#b91c1c] transition-colors shadow-xs"
            >
              Emitir Observaciones
            </button>
          ) : (
            <button
              type="button"
              onClick={handleApproveSubmit}
              disabled={activeStage.id === 1 && !isGate0Compliant}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all shadow-xs ${
                activeStage.id === 1 && !isGate0Compliant
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#059669] text-white hover:bg-[#047857]'
              }`}
            >
              Confirmar Aprobación Formal
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
