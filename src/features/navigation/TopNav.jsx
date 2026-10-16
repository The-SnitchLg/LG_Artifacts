import React from 'react';

/**
 * TopNav — Barra de Navegación Editorial Descongestionada
 * Estética Framer con separación limpia de marca, roles simulados y acciones globales.
 */
export default function TopNav({
  role,
  onRoleChange,
  currentView,
  onViewChange,
  onExportCSV,
  selectedProjectTitle,
  onToggleDrawer,
  pendingCount = 0
}) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-[#D8CEBF] sticky top-0 z-40 shadow-editorial-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Project Identity */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#6E432F] text-white flex items-center justify-center font-bold text-sm shadow-editorial-sm shrink-0">
              LG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1C1917] text-base leading-tight tracking-tight">
                  Seguimiento Académico
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#F5F1EA] text-[#6E432F] px-2 py-0.5 rounded-full border border-[#D8CEBF]">
                  Piloto 2026-I
                </span>
              </div>
              <p className="text-xs text-[#57534E] leading-tight flex items-center gap-1.5 mt-0.5">
                <span>6 Etapas &bull; Gate 0 &bull; 15 Tesis</span>
                {currentView === 'ficha' && selectedProjectTitle && (
                  <span className="hidden xl:inline text-[11px] text-[#6E432F] font-medium bg-[#FBF9F5] px-2 py-0.2 rounded border border-[#D8CEBF] max-w-[240px] truncate">
                    {selectedProjectTitle}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Mobile Drawer Trigger */}
          {currentView === 'ficha' && onToggleDrawer && (
            <button
              type="button"
              onClick={onToggleDrawer}
              className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F1EA] text-[#6E432F] border border-[#D8CEBF]"
              title="Abrir panel de acompañamiento contextual"
            >
              <span>Panel</span>
              {pendingCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
              )}
            </button>
          )}
        </div>

        {/* Center / Right: Role Switcher & Navigation Actions */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 w-full md:w-auto">
          {/* Simulated Role Segmented Control */}
          <div className="flex items-center gap-1 bg-[#F5F1EA] p-1 rounded-xl border border-[#D8CEBF]">
            <span className="text-[11px] font-semibold text-[#57534E] px-2 hidden lg:inline">
              Rol:
            </span>
            <button
              type="button"
              onClick={() => onRoleChange('estudiante')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                role === 'estudiante'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Estudiante
            </button>
            <button
              type="button"
              onClick={() => onRoleChange('tutor')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                role === 'tutor'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Tutor
            </button>
            <button
              type="button"
              onClick={() => onRoleChange('admin')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                role === 'admin'
                  ? 'bg-white text-[#1C1917] shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Administrador
            </button>
          </div>

          {/* View Toggle */}
          <div className="inline-flex rounded-xl border border-[#D8CEBF] bg-[#F5F1EA] p-1">
            <button
              type="button"
              onClick={() => onViewChange('portafolio')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                currentView === 'portafolio'
                  ? 'bg-[#1E293B] text-white shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Portafolio (15)
            </button>
            <button
              type="button"
              onClick={() => onViewChange('ficha')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                currentView === 'ficha'
                  ? 'bg-[#1E293B] text-white shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Ficha
            </button>
          </div>

          {/* Export to CSV Button */}
          <button
            type="button"
            onClick={onExportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#EDF7F2] text-[#059669] hover:bg-[#d8ece3] border border-[#9CD5BE] transition-colors shadow-xs"
            title="Exportar reporte institucional en formato CSV compatible con Excel"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Exportar CSV</span>
            <span className="sm:hidden">CSV</span>
          </button>

          {/* Context Drawer Button (Desktop) */}
          {currentView === 'ficha' && onToggleDrawer && (
            <button
              type="button"
              onClick={onToggleDrawer}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#F5F1EA] text-[#6E432F] hover:bg-[#EFE9DF] border border-[#D8CEBF] transition-colors shadow-xs"
              title="Ver bitácora, compromisos y protocolos en panel contextual"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="15" y1="3" x2="15" y2="21" />
              </svg>
              <span>Acompañamiento</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
