import React, { useState } from 'react';

/**
 * ContextDrawer — Zona 3 de Acompañamiento Contextual (Inspiración Gumloop)
 * Alberga Bitácora Viva, Compromisos, Gate 0 (14) y Fase 0 (17) sin interrumpir
 * el lienzo de trabajo central.
 */
export default function ContextDrawer({
  isOpen,
  onClose,
  isInline = false,
  project,
  role,
  onToggleGateItem,
  onTogglePhase0Step,
  onAddCommitment,
  defaultTab = 'bitacora'
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [newDesc, setNewDesc] = useState('');
  const [newResp, setNewResp] = useState('Estudiante');
  const [newDue, setNewDue] = useState(() => {
    return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const gate0Completed = (project.gate0Items || []).filter(i => i.checked).length;
  const phase0Completed = (project.phase0Steps || []).filter(s => s.completed).length;
  const pendingCommitments = (project.commitments || []).filter(c => c.status === 'pendiente').length;

  const handleCommitmentSubmit = (e) => {
    e.preventDefault();
    if (!newDesc.trim()) return;
    onAddCommitment({
      description: newDesc.trim(),
      responsible: newResp,
      dueDate: newDue,
      status: 'pendiente'
    });
    setNewDesc('');
    setShowAddForm(false);
  };

  const content = (
    <div className="flex flex-col h-full bg-white text-[#1C1917] select-none">
      {/* Header & Tabs */}
      <div className="p-4 bg-[#FBF9F5] border-b border-[#D8CEBF] shrink-0">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8E4928]"></span>
            <h3 className="font-bold text-sm text-[#1C1917] tracking-tight">
              Panel de Acompañamiento
            </h3>
          </div>
          {!isInline && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-[#57534E] hover:text-[#1C1917] hover:bg-[#F5F1EA] transition-colors"
              title="Cerrar panel"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-[#F5F1EA] rounded-lg border border-[#D8CEBF] text-[11px] font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('bitacora')}
            className={`py-1.5 px-1 rounded-md transition-all text-center truncate ${
              activeTab === 'bitacora'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Bitácora
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('compromisos')}
            className={`py-1.5 px-1 rounded-md transition-all text-center truncate relative ${
              activeTab === 'compromisos'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Pactos
            {pendingCommitments > 0 && (
              <span className="ml-1 px-1 py-0.2 rounded-full text-[9px] bg-[#D97706] text-white">
                {pendingCommitments}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gate0')}
            className={`py-1.5 px-1 rounded-md transition-all text-center truncate ${
              activeTab === 'gate0'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Gate 0 ({gate0Completed})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('phase0')}
            className={`py-1.5 px-1 rounded-md transition-all text-center truncate ${
              activeTab === 'phase0'
                ? 'bg-white text-[#1C1917] shadow-xs'
                : 'text-[#57534E] hover:text-[#1C1917]'
            }`}
          >
            Fase 0 ({phase0Completed})
          </button>
        </div>
      </div>

      {/* Panel Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {/* TAB 1: BITÁCORA */}
        {activeTab === 'bitacora' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-[#57534E]">
              <span>Historial Inmutable de Decisiones</span>
              <span className="font-mono font-bold text-[#6E432F]">{project.decisionLog?.length || 0} registros</span>
            </div>

            <div className="space-y-2.5">
              {(project.decisionLog || []).map((log) => (
                <div
                  key={log.id}
                  className="p-3 rounded-xl border border-[#E8E1D5] bg-[#FBF9F5] hover:bg-white transition-all space-y-1.5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-[#1C1917] text-[11px]">
                      {log.action}
                    </span>
                    <span className="text-[10px] text-[#8F8881] font-mono shrink-0">
                      {log.timestamp?.split(',')[0]}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#57534E] leading-relaxed bg-white p-2 rounded-lg border border-[#E8E1D5]">
                    {log.notes}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-[#8F8881] pt-0.5">
                    <span className="text-[#6E432F] font-semibold">{log.author}</span>
                    {log.deadline && <span>Límite: {log.deadline}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: COMPROMISOS */}
        {activeTab === 'compromisos' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#57534E]">
                Compromisos Pactados ({pendingCommitments} pendientes)
              </span>
              {role === 'tutor' && (
                <button
                  type="button"
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="text-[11px] font-bold text-[#6E432F] hover:underline"
                >
                  {showAddForm ? 'Cancelar' : '+ Nuevo'}
                </button>
              )}
            </div>

            {showAddForm && (
              <form onSubmit={handleCommitmentSubmit} className="p-3 bg-[#FBF9F5] rounded-xl border border-[#D8CEBF] space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Descripción del compromiso..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full p-2 text-xs rounded-lg border border-[#D8CEBF] bg-white text-[#1C1917] focus:outline-hidden"
                />
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={newResp}
                    onChange={(e) => setNewResp(e.target.value)}
                    className="p-1.5 text-[11px] rounded-lg border border-[#D8CEBF] bg-white text-[#1C1917]"
                  >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Tutor">Tutor</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                  <input
                    type="date"
                    required
                    value={newDue}
                    onChange={(e) => setNewDue(e.target.value)}
                    className="p-1.5 text-[11px] rounded-lg border border-[#D8CEBF] bg-white text-[#1C1917]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 bg-[#6E432F] text-white text-xs font-semibold rounded-lg hover:bg-[#553323] transition-colors"
                >
                  Guardar Compromiso
                </button>
              </form>
            )}

            <div className="space-y-2">
              {(project.commitments || []).map((c) => (
                <div
                  key={c.id}
                  className="p-3 rounded-xl border border-[#E8E1D5] bg-[#FBF9F5] space-y-1.5 text-xs shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#1C1917] text-[11px] leading-snug">
                      {c.description}
                    </p>
                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 ${
                      c.status === 'cumplido'
                        ? 'bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE]'
                        : 'bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D]'
                    }`}>
                      {c.status === 'cumplido' ? 'Cumplido' : 'Pendiente'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#8F8881]">
                    <span>Responsable: <strong className="text-[#57534E]">{c.responsible}</strong></span>
                    <span>Límite: <strong className="text-[#6E432F]">{c.dueDate}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GATE 0 (14 Criterios) */}
        {activeTab === 'gate0' && (
          <div className="space-y-3">
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#1C1917]">Auditoría Gate 0</span>
                <span className={`font-bold font-mono px-2 py-0.5 rounded-full text-[10px] ${
                  gate0Completed === 14 ? 'bg-[#EDF7F2] text-[#059669]' : 'bg-[#FFFBEB] text-[#D97706]'
                }`}>
                  {gate0Completed}/14 Conformes
                </span>
              </div>
              <div className="w-full bg-[#E8E1D5] rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#059669] h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(gate0Completed / 14) * 100}%` }}
                ></div>
              </div>
              <p className="text-[10px] text-[#57534E] leading-tight">
                {role === 'tutor'
                  ? 'Como tutor asignado, marque cada criterio conforme haya sido verificado.'
                  : 'Solo el tutor asignado puede certificar los criterios. Vista de consulta.'}
              </p>
            </div>

            <div className="space-y-1.5">
              {(project.gate0Items || []).map((item) => (
                <label
                  key={item.id}
                  className={`p-2.5 rounded-xl border transition-all flex items-start gap-2.5 text-xs ${
                    role === 'tutor' ? 'cursor-pointer hover:bg-white' : 'cursor-default'
                  } ${
                    item.checked
                      ? 'bg-[#EDF7F2]/40 border-[#9CD5BE]'
                      : 'bg-[#FBF9F5] border-[#E8E1D5]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    disabled={role !== 'tutor'}
                    onChange={() => onToggleGateItem(item.id)}
                    className="mt-0.5 rounded text-[#059669] focus:ring-0 shrink-0"
                  />
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#1C1917] block leading-snug text-[11px]">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-[#8F8881] block leading-tight">
                      {item.description}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FASE 0 (17 Pasos) */}
        {activeTab === 'phase0' && (
          <div className="space-y-3">
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#1C1917]">Guía Fase 0</span>
                <span className="font-bold font-mono px-2 py-0.5 rounded-full text-[10px] bg-[#F5F1EA] text-[#6E432F]">
                  {phase0Completed}/17 Pasos
                </span>
              </div>
              <div className="w-full bg-[#E8E1D5] rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#6E432F] h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(phase0Completed / 17) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-1.5">
              {(project.phase0Steps || []).map((step) => (
                <label
                  key={step.number}
                  className={`p-2.5 rounded-xl border transition-all flex items-start gap-2.5 text-xs cursor-pointer ${
                    step.completed
                      ? 'bg-[#EDF7F2]/40 border-[#9CD5BE]'
                      : 'bg-[#FBF9F5] border-[#E8E1D5] hover:bg-white'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={step.completed}
                    onChange={() => onTogglePhase0Step(step.number)}
                    className="mt-0.5 rounded text-[#6E432F] focus:ring-0 shrink-0"
                  />
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#1C1917] block leading-snug text-[11px]">
                      Paso {step.number}: {step.title}
                    </span>
                    <span className="text-[10px] text-[#8F8881] block leading-tight">
                      {step.description}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // In desktop inline mode:
  if (isInline) {
    return (
      <aside className="w-80 shrink-0 bg-white rounded-2xl border border-[#D8CEBF] shadow-xs overflow-hidden flex flex-col h-[calc(100vh-140px)] sticky top-24">
        {content}
      </aside>
    );
  }

  // In modal / slide-over drawer mode (for mobile or triggered view):
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-[#D8CEBF] animate-fade-in-slide">
          {content}
        </div>
      </div>
    </div>
  );
}
