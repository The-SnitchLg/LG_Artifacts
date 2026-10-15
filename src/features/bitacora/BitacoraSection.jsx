import React, { useState } from 'react';

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

  return (
    <div className="space-y-6">
      {/* 1. Commitments Section */}
      <div className="bg-white rounded-2xl border border-[#D9CEC1] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#EBE4DA]">
          <div>
            <h3 className="text-sm font-bold text-[#253240] flex items-center gap-2">
              <span>Compromisos y Acuerdos de Asesoría</span>
              <span className="text-[10px] font-semibold bg-[#EAF3EF] text-[#21684F] px-2 py-0.5 rounded border border-[#A3D2BE]">
                {commitments.filter(c => c.status === 'pendiente').length} Pendientes
              </span>
            </h3>
            <p className="text-xs text-[#475569]">
              Entregas pactadas entre estudiante y tutor con fechas límite establecidas.
            </p>
          </div>

          {role === 'tutor' && (
            <button
              type="button"
              onClick={() => setShowAddCommitment(!showAddCommitment)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF7F2] text-[#704733] hover:bg-[#F3ECE3] border border-[#D9CEC1] transition-colors"
            >
              {showAddCommitment ? 'Cancelar' : '+ Agregar Nuevo Compromiso'}
            </button>
          )}
        </div>

        {showAddCommitment && (
          <form onSubmit={handleSubmitCommitment} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D9CEC1] space-y-3 text-xs">
            <h4 className="font-bold text-[#253240]">Registrar Nuevo Acuerdo Académico</h4>
            <div>
              <label className="block text-[11px] font-semibold text-[#475569] mb-1">Descripción del Compromiso:</label>
              <input
                type="text"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Ej. Entregar borrador de marco teórico con 30 referencias..."
                className="w-full p-2.5 rounded-lg border border-[#D9CEC1] bg-white text-[#253240] focus:outline-hidden focus:ring-1 focus:ring-[#704733]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Responsable:</label>
                <select
                  value={responsible}
                  onChange={(e) => setResponsible(e.target.value)}
                  className="w-full p-2 rounded-lg border border-[#D9CEC1] bg-white text-[#253240]"
                >
                  <option value="Estudiante">Estudiante</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Ambos">Ambos</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Fecha Límite:</label>
                <input
                  type="date"
                  required
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full p-2 rounded-lg border border-[#D9CEC1] bg-white text-[#253240]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#704733] text-white font-semibold rounded-lg hover:bg-[#573524] transition-colors"
            >
              Guardar Compromiso
            </button>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#EBE4DA] text-[#475569] font-semibold bg-[#FAF7F2]/50">
                <th className="py-2.5 px-3">Compromiso Académico</th>
                <th className="py-2.5 px-3">Responsable</th>
                <th className="py-2.5 px-3">Fecha Límite</th>
                <th className="py-2.5 px-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE4DA]">
              {commitments.map((c) => (
                <tr key={c.id} className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#253240]">{c.description}</td>
                  <td className="py-2.5 px-3 text-[#475569]">{c.responsible}</td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-[#253240]">{c.dueDate}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.status === 'cumplido'
                          ? 'bg-[#EAF3EF] text-[#21684F] border border-[#A3D2BE]'
                          : 'bg-[#FEF6E8] text-[#865A16] border border-[#F3D298]'
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
      <div className="bg-white rounded-2xl border border-[#D9CEC1] p-6 shadow-sm space-y-4">
        <div className="pb-3 border-b border-[#EBE4DA]">
          <h3 className="text-sm font-bold text-[#253240] flex items-center gap-2">
            <span>Bitácora Cronológica de Decisiones y Trazabilidad</span>
            <span className="text-[10px] font-semibold bg-[#F3ECE3] text-[#704733] px-2 py-0.5 rounded border border-[#D9CEC1]">
              {decisionLog.length} Registros Inmutables
            </span>
          </h3>
          <p className="text-xs text-[#475569]">
            Historial ordenado de entregas, observaciones del tutor y aprobaciones formales con marcas de tiempo.
          </p>
        </div>

        <div className="space-y-3">
          {decisionLog.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-[#D9CEC1] bg-[#FAF7F2]/30 hover:bg-[#FAF7F2] transition-colors space-y-2 text-xs"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#253240] text-xs">
                    {log.action}
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono">
                    ID #{log.id}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#64748B] flex items-center gap-2">
                  <span>{log.timestamp}</span>
                  <span>&bull;</span>
                  <strong className="text-[#704733]">{log.author}</strong>
                </div>
              </div>

              <p className="text-xs text-[#334155] leading-relaxed bg-white p-3 rounded-lg border border-[#EBE4DA]">
                {log.notes}
              </p>

              {(log.milestone || log.deadline) && (
                <div className="flex flex-wrap items-center justify-between text-[11px] text-[#64748B] pt-1">
                  {log.milestone && (
                    <span>Hito asociado: <strong className="text-[#475569]">{log.milestone}</strong></span>
                  )}
                  {log.deadline && (
                    <span>Fecha límite pactada: <strong className="text-[#704733]">{log.deadline}</strong></span>
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
