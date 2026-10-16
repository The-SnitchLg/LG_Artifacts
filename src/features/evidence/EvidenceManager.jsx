import React from 'react';

/**
 * EvidenceManager — Repositorio y Versionado de Evidencias Documentales
 * Permite la entrega, consulta y descarga de versiones inmutables por etapa.
 */
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
    <div className="bg-white rounded-2xl border border-[#D8CEBF] p-5 sm:p-6 shadow-editorial-sm space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-[#E8E1D5]">
        <div>
          <h3 className="text-sm font-bold text-[#1C1917] flex items-center gap-2">
            <span>Repositorio de Evidencias y Versiones</span>
            <span className="text-[10px] font-semibold bg-[#F5F1EA] text-[#6E432F] px-2 py-0.5 rounded-full border border-[#D8CEBF]">
              Etapa #{activeStageId}
            </span>
          </h3>
          <p className="text-xs text-[#57534E] mt-0.5">
            Archivos entregados, versiones inmutables y trazabilidad de cambios por etapa.
          </p>
        </div>

        {role === 'estudiante' && (
          <button
            type="button"
            onClick={onUploadEvidence}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#F5F1EA] text-[#6E432F] hover:bg-[#EFE9DF] border border-[#D8CEBF] transition-colors flex items-center gap-1.5 shadow-xs"
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
              className="p-3.5 rounded-xl border border-[#E8E1D5] bg-[#FBF9F5]/40 hover:bg-[#FBF9F5] transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F5F1EA] text-[#6E432F] flex items-center justify-center font-bold text-xs border border-[#D8CEBF] shrink-0">
                  📄
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1C1917]">{ev.filename}</span>
                    <span className="font-mono text-[10px] font-bold bg-[#6E432F] text-white px-1.5 py-0.2 rounded">
                      {ev.version}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#8F8881] flex flex-wrap items-center gap-2 mt-0.5 font-mono">
                    <span>Cargado por: <strong className="text-[#57534E] font-sans">{ev.uploadedBy}</strong></span>
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
                className="px-3 py-1.5 text-[11px] font-semibold text-[#059669] bg-[#EDF7F2] hover:bg-[#d8ece3] rounded-lg border border-[#9CD5BE] transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
              >
                <svg className="w-3.5 h-3.5 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Descargar Copia</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-[#FBF9F5] rounded-xl border border-dashed border-[#D8CEBF] space-y-1.5">
          <p className="text-xs font-semibold text-[#1C1917]">No hay evidencias documentales entregadas para la Etapa #{activeStageId}.</p>
          <p className="text-[11px] text-[#57534E]">
            {role === 'estudiante'
              ? 'Utilice el botón de carga para entregar el archivo de avance correspondiente.'
              : 'En espera de la entrega formal por parte del estudiante investigador.'}
          </p>
        </div>
      )}
    </div>
  );
}
