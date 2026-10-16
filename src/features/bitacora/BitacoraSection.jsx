import React, { useState } from 'react';

/**
 * BitacoraSection — Bitácora Cronológica de Decisiones y Acuerdos Académicos
 * Garantiza la trazabilidad formal de observaciones, compromisos y aprobaciones.
 */
export default function BitacoraSection({
  decisionLog,
  commitments,
  role,
  onAddCommitment
}) {
  const [showAddCommitment, setShowAddCommitment] = useState(false);
  const [desc, setDesc] = useState('');
  const [responsible, setResponsible] = useState('Estudiante');
  const [dueDate, setDueDate] = useState(() => {
    return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  });

  const handleSubmitCommitment = (e) => {
    e.preventDefault();
    if (!desc.trim()) return;
    onAddCommitment({
      description: desc.trim(),
      responsible,
      dueDate,
      status: 'pendiente'
    });
    setDesc('');
    setShowAddCommitment(false);
  };

  const pendingCount = commitments.filter(c => c.status === 'pendiente').length;

  return (
    <div className="space-y-6">
      {/* 1. Commitments Section */}
      <div className="bg-white rounded-2xl border border-[#D8CEBF] p-5 sm:p-6 shadow-editorial-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#E8E1D5]">
          <div>
            <h3 className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
              <span>Compromisos y Acuerdos de Asesoría</span>
              <span className="text-[10px] font-semibold bg-[#FFFBEB] text-[#D97706] px-2 py-0.5 rounded-full border border-[#FCD34D]">
                {pendingCount} Pendientes
              </span>
            </h3>
            <p className="text-xs text-[#57534E] mt-0.5">
              Entregas pactadas entre estudiante y tutor con fechas límite establecidas.
            </p>
          </div>

          {role === 'tutor' && (
            <button
              type="button"
              onClick={() => setShowAddCommitment(!showAddCommitment)}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#F5F1EA] text-[#6E432F] hover:bg-[#EFE9DF] border border-[#D8CEBF] transition-colors shadow-xs"
            >
              {showAddCommitment ? 'Cancelar' : '+ Agregar Nuevo Compromiso'}
            </button>
          )}
        </div>

        {showAddCommitment && (
          <form onSubmit={handleSubmitCommitment} className="p-4 bg-[#FBF9F5] rounded-xl border border-[#D8CEBF] space-y-3 text-xs">
            <h4 className="font-bold text-[#1C1917]">Registrar Nuevo Acuerdo Académico</h4>
            <div>
              <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Descripción del Compromiso:</label>
              <input
                type="text"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Ej. Entregar borrador de marco teórico con 30 referencias..."
                className="w-full p-2.5 rounded-xl border border-[#D8CEBF] bg-white text-[#1C1917] focus:outline-hidden focus:ring-1 focus:ring-[#6E432F]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Responsable:</label>
                <select
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D8CEBF] bg-white text-[#1C1917]"
                >
                  <option value="Estudiante">Estudiante</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Fecha Límite:</label>
                <input
                  type="date"
                  required
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full p-2 rounded-xl border border-[#D8CEBF] bg-white text-[#1C1917]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#6E432F] text-white font-semibold rounded-xl hover:bg-[#553323] transition-colors shadow-xs"
            >
              Guardar Compromiso
            </button>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E8E1D5] text-[#57534E] font-semibold bg-[#FBF9F5]">
                <th className="py-2.5 px-3">Compromiso Académico</th>
                <th className="py-2.5 px-3">Responsable</th>
                <th className="py-2.5 px-3">Fecha Límite</th>
                <th className="py-2.5 px-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E1D5]">
              {commitments.map((c) => (
                <tr key={c.id} className="hover:bg-[#FBF9F5]/40 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#1C1917]">{c.description}</td>
                  <td className="py-2.5 px-3 text-[#57534E]">{c.responsible}</td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-[#1C1917]">{c.dueDate}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.status === 'cumplido'
                          ? 'bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE]'
                          : 'bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D]'
                      }`}
                    >
                      {c.status === 'cumplido' ? 'Cumplido' : 'Pendiente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Chronological Bitácora Log */}
      <div className="bg-white rounded-2xl border border-[#D8CEBF] p-5 sm:p-6 shadow-editorial-sm space-y-4">
        <div className="pb-3 border-b border-[#E8E1D5]">
          <h3 className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
            <span>Bitácora Cronológica de Decisiones y Trazabilidad</span>
            <span className="text-[10px] font-semibold bg-[#F5F1EA] text-[#6E432F] px-2 py-0.5 rounded-full border border-[#D8CEBF]">
              {decisionLog.length} Registros Inmutables
            </span>
          </h3>
          <p className="text-xs text-[#57534E] mt-0.5">
            Historial ordenado de entregas, observaciones del tutor y aprobaciones formales con marcas de tiempo.
          </p>
        </div>

        <div className="space-y-3">
          {decisionLog.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-[#E8E1D5] bg-[#FBF9F5]/40 hover:bg-[#FBF9F5] transition-colors space-y-2 text-xs"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#1C1917] text-xs">
                    {log.action}
                  </span>
                  <span className="text-[10px] text-[#8F8881] font-mono">
                    ID #{log.id}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#8F8881] flex items-center gap-2">
                  <span>{log.timestamp}</span>
                  <span>&bull;</span>
                  <strong className="text-[#6E432F] font-sans">{log.author}</strong>
                </div>
              </div>

              <p className="text-xs text-[#1C1917] leading-relaxed bg-white p-3 rounded-xl border border-[#E8E1D5]">
                {log.notes}
              </p>

              {(log.milestone || log.deadline) && (
                <div className="flex flex-wrap items-center justify-between text-[11px] text-[#8F8881] pt-1">
                  {log.milestone && (
                    <span>Hito: <strong className="text-[#57534E] font-sans">{log.milestone}</strong></span>
                  )}
                  {log.deadline && (
                    <span>Límite: <strong className="text-[#6E432F] font-mono">{log.deadline}</strong></span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
