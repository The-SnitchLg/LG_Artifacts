import React from 'react';

export default function DemoNoticeBanner() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-xs text-amber-900 flex items-center justify-between gap-3 shadow-xs">
      <div className="flex items-center gap-2 max-w-5xl mx-auto w-full">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold shrink-0 text-[11px]">
          ℹ
        </span>
        <div className="leading-tight">
          <span className="font-bold">Ambiente de Demostración con Datos Ficticios:</span>{' '}
          <span className="text-amber-800">
            El piloto opera con 15 proyectos y 3 tutores simulados. El acceso público a bases privadas y el almacenamiento real de documentos están restringidos por diseño hasta la integración de autenticación operativa.
          </span>
        </div>
      </div>
    </div>
  );
}
