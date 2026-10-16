import React, { useState, useMemo } from 'react';
import { TUTORS } from '../../data/pilotData.js';
import StatusBadge from '../../components/StatusBadge.jsx';

/**
 * ProjectPortfolio — Vista de Portafolio Institucional (15 Trabajos de Grado)
 * Tarjetas de investigación editorial con filtros dinámicos y métricas de supervisión.
 */
export default function ProjectPortfolio({
  projects,
  selectedProjectId,
  onSelectProject,
  role
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');
  const [tutorFilter, setTutorFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.institutionalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.thematicLine.toLowerCase().includes(searchTerm.toLowerCase());

      const activeStage = p.stages.find(s => s.status === 'en_revision' || s.status === 'observado') || p.stages[0];
      const matchStage = stageFilter === 'all' || String(activeStage.id) === stageFilter;
      const matchRisk = riskFilter === 'all' || p.riskLevel === riskFilter;
      const matchTutor = tutorFilter === 'all' || p.tutorId === tutorFilter;

      return matchSearch && matchStage && matchRisk && matchTutor;
    });
  }, [projects, searchTerm, stageFilter, riskFilter, tutorFilter]);

  // Métricas agregadas
  const totalProjects = projects.length;
  const avgProgress = Math.round(
    projects.reduce((acc, p) => {
      const approved = p.stages.filter(s => s.status === 'aprobado').length;
      return acc + (approved / 6) * 100;
    }, 0) / (totalProjects || 1)
  );
  const highRiskCount = projects.filter(p => p.riskLevel === 'Alto').length;

  return (
    <div className="space-y-6">
      {/* Portfolio Header & Stats Card */}
      <div className="bg-white rounded-2xl border border-[#D8CEBF] p-5 sm:p-6 shadow-editorial-sm">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-5 border-b border-[#E8E1D5]">
          <div>
            <h1 className="text-xl font-bold text-[#1C1917] flex items-center gap-2 tracking-tight">
              <span>Portafolio de Trabajos de Grado</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F5F1EA] text-[#6E432F] border border-[#D8CEBF]">
                Cohorte 2026-I &bull; {totalProjects} Proyectos
              </span>
            </h1>
            <p className="text-xs text-[#57534E] mt-1">
              Supervisión académica, seguimiento de las 6 etapas y avance consolidado del piloto institucional.
              <span className="ml-2 font-semibold text-[#6E432F]">
                (Modo: {role === 'tutor' ? 'Tutor Asignado' : role === 'estudiante' ? 'Estudiante Investigador' : 'Coordinación Administrador'})
              </span>
            </p>
          </div>

          {/* Metric Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs w-full lg:w-auto">
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] text-center min-w-[95px] flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold text-[#57534E] block">Tesis Piloto</span>
              <span className="text-base font-extrabold text-[#6E432F] font-tabular">{totalProjects}</span>
            </div>
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] text-center min-w-[95px] flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold text-[#57534E] block">Avance Medio</span>
              <span className="text-base font-extrabold text-[#059669] font-tabular">{avgProgress}%</span>
            </div>
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] text-center min-w-[95px] flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold text-[#57534E] block">Riesgo Alto</span>
              <span className="text-base font-extrabold text-[#DC2626] font-tabular">{highRiskCount}</span>
            </div>
            <div className="bg-[#FBF9F5] p-3 rounded-xl border border-[#D8CEBF] text-center min-w-[95px] flex-1 sm:flex-none">
              <span className="text-[10px] uppercase font-bold text-[#57534E] block">Tutores</span>
              <span className="text-base font-extrabold text-[#1E293B] font-tabular">3</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-xs">
          <div>
            <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Buscar por texto:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Título, estudiante, código..."
              className="w-full px-3 py-2 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#6E432F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Filtrar por Etapa Activa:</label>
            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden"
            >
              <option value="all">Todas las etapas (1 a 6)</option>
              <option value="1">Etapa 1: Propuesta / Protocolo</option>
              <option value="2">Etapa 2: Marco Teórico</option>
              <option value="3">Etapa 3: Metodología</option>
              <option value="4">Etapa 4: Recolección</option>
              <option value="5">Etapa 5: Análisis</option>
              <option value="6">Etapa 6: Documento Final</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Filtrar por Tutor:</label>
            <select
              value={tutorFilter}
              onChange={(e) => setTutorFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden"
            >
              <option value="all">Todos los tutores (3)</option>
              {TUTORS.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#57534E] mb-1">Riesgo Académico:</label>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#D8CEBF] bg-[#FBF9F5] text-[#1C1917] focus:bg-white focus:outline-hidden"
            >
              <option value="all">Todos los niveles</option>
              <option value="Bajo">Riesgo Bajo</option>
              <option value="Medio">Riesgo Medio</option>
              <option value="Alto">Riesgo Alto</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => {
          const approvedCount = project.stages.filter(s => s.status === 'aprobado').length;
          const progressPct = Math.round((approvedCount / 6) * 100);
          const activeStage = project.stages.find(s => s.status === 'en_revision' || s.status === 'observado') || project.stages[0];
          const isSelected = project.id === selectedProjectId;

          return (
            <div
              key={project.id}
              className={`bg-white rounded-2xl border p-5 transition-all flex flex-col justify-between shadow-editorial-sm ${
                isSelected
                  ? 'border-[#6E432F] ring-2 ring-[#6E432F]/15 bg-[#FBF9F5]/40'
                  : 'border-[#D8CEBF] hover:border-[#6E432F]/50 hover:shadow-editorial-md'
              }`}
            >
              <div className="space-y-3">
                {/* Badges bar */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold text-[#6E432F] bg-[#F5F1EA] px-2 py-0.5 rounded border border-[#D8CEBF]">
                    {project.institutionalId}
                  </span>
                  <StatusBadge type="risk" value={project.riskLevel} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#1C1917] text-sm leading-snug line-clamp-2">
                  {project.title}
                </h3>

                {/* Student & Tutor Info */}
                <div className="text-xs text-[#57534E] space-y-1 pt-1.5 border-t border-[#E8E1D5]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#8F8881]">Estudiante:</span>
                    <strong className="text-[#1C1917]">{project.student}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#8F8881]">Tutor:</span>
                    <span className="text-[#1C1917] font-medium">{project.tutor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#8F8881]">Etapa Actual:</span>
                    <span className="text-[#6E432F] font-semibold">
                      #{activeStage.id} {activeStage.name.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#57534E] mb-1">
                    <span>Avance ({approvedCount}/6 etapas)</span>
                    <span className="text-[#059669] font-bold font-tabular">{progressPct}%</span>
                  </div>
                  <div className="w-full bg-[#E8E1D5] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#059669] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-[#E8E1D5]">
                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-xl bg-[#6E432F] text-white hover:bg-[#553323] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Abrir Ficha de Seguimiento</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-2xl border border-[#D8CEBF] p-10 text-center space-y-2">
          <p className="text-sm font-semibold text-[#1C1917]">No se encontraron proyectos con los filtros seleccionados.</p>
          <p className="text-xs text-[#57534E]">Ajusta los términos de búsqueda o restablece los filtros de etapa y riesgo.</p>
        </div>
      )}
    </div>
  );
}
