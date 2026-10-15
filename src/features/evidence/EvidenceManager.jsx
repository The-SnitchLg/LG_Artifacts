import React from 'react';

export default function EvidenceManager({
  evidences,
  activeStageId,
  role,
  onUploadEvidence,
  onShowToast
}) {
  const stageEvidences = evidences.filter(e => e.stageId === activeStageId);

  const handleDownload = (ev) => {
    onShowToast(`Descargando copia de archivo: ${ev.filename} (${ev.version})`);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#D9CEC1] p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#EBE4DA]">
        <div>
          <h3 className="text-sm font-bold text-[#253240] flex items-center gap-2">
            <span>Repositorio de Evidencias y Versiones</span>
            <span className="text-[10px] font-semibold bg-[#F3ECE3] text-[#704733] px-2 py-0.5 rounded border border-[#D9CEC1]">
              Etapa #{activeStageId}
            </span>
          </h3>
          <p className="text-xs text-[#475569]">
            Archivos entregados, versiones inmutables y trazabilidad de cambios por etapa.
          </p>
        </div>

        {role === 'estudiante' && (
          <button
            type="button"
            onClick={onUploadEvidence}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF7F2] text-[#704733] hover:bg-[#F3ECE3] border border-[#D9CEC1] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
            <span>Subir Archivo de Etapa #{activeStageId}</span>
          </button>
        )}
      </div>

      {stageEvidences.length > 0 ? (
        <div className="space-y-2">
          {stageEvidences.map((ev) => (
            <div
              key={ev.id}
              className="p-3.5 rounded-xl border border-[#D9CEC1] bg-[#FAF7F2]/40 hover:bg-[#FAF7F2] transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F3ECE3] text-[#704733] flex items-center justify-center font-bold text-xs border border-[#D9CEC1]">
                  📄
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#253240]">{ev.filename}</span>
                    <span className="font-mono text-[10px] font-bold bg-[#704733] text-white px-1.5 py-0.2 rounded">
                      {ev.version}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#64748B] flex items-center gap-2 mt-0.5">
                    <span>Cargado por: <strong className="text-[#475569]">{ev.uploadedBy}</strong></span>
                    <span>&bull;</span>
                    <span>Fecha: {ev.date}</span>
                    <span>&bull;</span>
                    <span>Tamaño: {ev.size}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(ev)}
                className="px-3 py-1 text-[11px] font-semibold text-[#21684F] bg-[#EAF3EF] hover:bg-[#d8ece3] rounded-md border border-[#A3D2BE] transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3 text-[#21684F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Descargar</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-center rounded-xl bg-[#FAF7F2] border border-dashed border-[#D9CEC1] space-y-1">
          <p className="text-xs font-semibold text-[#253240]">No hay evidencias cargadas para la Etapa #{activeStageId}.</p>
          <p className="text-[11px] text-[#64748B]">El estudiante puede adjuntar el documento preliminar o protocolo para revisión del tutor.</p>
        </div>
      )}
    </div>
  );
}
