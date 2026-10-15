import React from 'react';

export default function TopNav({
  role,
  onRoleChange,
  currentView,
  onViewChange,
  onExportCSV,
  selectedProjectTitle
}) {
  return (
    <header className="bg-white border-b border-[#D9CEC1] sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#704733] text-white flex items-center justify-center font-bold text-base shadow-sm">
            LG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#253240] text-base leading-tight">
                Seguimiento Académico
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#F3ECE3] text-[#704733] px-2 py-0.5 rounded border border-[#D9CEC1]">
                Piloto 2026-I
              </span>
            </div>
            <p className="text-xs text-[#475569] leading-tight flex items-center gap-1.5">
              <span>Trabajos de Grado &bull; 6 Etapas &bull; Gate 0</span>
              {currentView === 'ficha' && selectedProjectTitle && (
                <span className="hidden lg:inline text-[11px] text-[#704733] font-medium bg-[#FAF7F2] px-2 py-0.2 rounded border border-[#D9CEC1] max-w-[280px] truncate">
                  Ficha activa: {selectedProjectTitle}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Center / Right: Role Switcher & Navigation Actions */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
          {/* Role Switcher */}
          <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-lg border border-[#D9CEC1]">
            <span className="text-[11px] font-semibold text-[#475569] px-2 hidden md:inline">
              Rol Simulado:
            </span>
            <button
              type="button"
              onClick={() => onRoleChange('estudiante')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                role === 'estudiante'
                  ? 'bg-[#704733] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#253240] hover:bg-[#F3ECE3]'
              }`}
            >
              Estudiante
            </button>
            <button
              type="button"
              onClick={() => onRoleChange('tutor')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                role === 'tutor'
                  ? 'bg-[#704733] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#253240] hover:bg-[#F3ECE3]'
              }`}
            >
              Tutor
            </button>
            <button
              type="button"
              onClick={() => onRoleChange('admin')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                role === 'admin'
                  ? 'bg-[#704733] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#253240] hover:bg-[#F3ECE3]'
              }`}
            >
              Administrador
            </button>
          </div>

          {/* View Toggle (Portafolio vs Ficha) */}
          <div className="inline-flex rounded-lg border border-[#D9CEC1] overflow-hidden">
            <button
              type="button"
              onClick={() => onViewChange('portafolio')}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                currentView === 'portafolio'
                  ? 'bg-[#253240] text-white'
                  : 'bg-white text-[#475569] hover:bg-[#F3ECE3]'
              }`}
            >
              Portafolio (15)
            </button>
            <button
              type="button"
              onClick={() => onViewChange('ficha')}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                currentView === 'ficha'
                  ? 'bg-[#253240] text-white'
                  : 'bg-white text-[#475569] hover:bg-[#F3ECE3]'
              }`}
            >
              Ficha del Proyecto
            </button>
          </div>

          {/* Export to CSV Button */}
          <button
            type="button"
            onClick={onExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#EAF3EF] text-[#21684F] hover:bg-[#d8ece3] border border-[#A3D2BE] transition-colors shadow-xs"
            title="Exportar reporte institucional en formato CSV compatible con Excel"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Exportar CSV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
