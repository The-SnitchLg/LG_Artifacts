import React from 'react';

/**
 * StatusBadge — Insignia visual unificada con tokens accesibles (WCAG 2.2 AA)
 */
export default function StatusBadge({ type = 'stage', value, className = '' }) {
  if (type === 'stage') {
    switch (value) {
      case 'aprobado':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE] ${className}`}>
            <svg className="w-3 h-3 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Aprobado</span>
          </span>
        );
      case 'en_revision':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D] ${className}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97706]"></span>
            </span>
            <span>En Revisión</span>
          </span>
        );
      case 'observado':
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5] ${className}`}>
            <svg className="w-3 h-3 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>Observado</span>
          </span>
        );
      default:
        return (
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F1EFEA] text-[#64748B] border border-[#D8D4CC] ${className}`}>
            <svg className="w-2.5 h-2.5 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Bloqueado</span>
          </span>
        );
    }
  }

  if (type === 'risk') {
    switch (value) {
      case 'Alto':
        return (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#FEF2F2] text-[#DC2626] border border-[#FCA5A5] ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
            <span>Riesgo Alto</span>
          </span>
        );
      case 'Medio':
        return (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#FFFBEB] text-[#D97706] border border-[#FCD34D] ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
            <span>Riesgo Medio</span>
          </span>
        );
      default:
        return (
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EDF7F2] text-[#059669] border border-[#9CD5BE] ${className}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            <span>Riesgo Bajo</span>
          </span>
        );
    }
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#F5F1EA] text-[#57534E] border border-[#D8CEBF] ${className}`}>
      {value}
    </span>
  );
}
