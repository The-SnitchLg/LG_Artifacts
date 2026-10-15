import React, { useState, useMemo } from 'react';
import { TUTORS } from '../../data/pilotData.js';

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

  // Metric summaries for admin/tutor
  const totalProjects = projects.length;
  const avgProgress = Math.round(
    projects.reduce((acc, p) => {
      const approved = p.stages.filter(s => s.status === 'aprobado').length;
      return acc + (approved / 6) * 100;
    }, 0) / totalProjects
  );

  return (
    <div className="space-y-6">
      {/* Portfolio Header & Stats Card */}
      <div className="bg-white rounded-2xl border border-[#D9CEC1] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-[#EBE4DA]">
          <div>
            <h1 className="text-xl font-bold text-[#253240] flex items-center gap-2">
              <span>Portafolio de Trabajos de Grado</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F3ECE3] text-[#704733] border border-[#D9CEC1]">
                Cohorte 2026-I &bull; {totalProjects} Proyectos
              </span>
            </h1>
            <p className="text-xs text-[#475569] mt-1">
              Supervisión académica, seguimiento de las 6 etapas y avance consolidado del piloto institucional.
              <span className="ml-2 font-semibold text-[#704733]">
                (Modo activo: {role === 'tutor' ? 'Tutor Asignado' : role === 'estudiante' ? 'Estudiante Investigador' : 'Coordinación Administrador'})
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D9CEC1] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[#475569] block">Total Piloto</span>
              <span className="text-base font-extrabold text-[#704733]">{totalProjects} tesis</span>
            </div>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D9CEC1] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[#475569] block">Avance Promedio</span>
              <span className="text-base font-extrabold text-[#21684F]">{avgProgress}%</span>
            </div>
            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#D9CEC1] text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-bold text-[#475569] block">Tutores Activos</span>
              <span className="text-base font-extrabold text-[#253240]">3 docentes</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4 text-xs">
          <div>
            <label className="block text-[11px] font-semibold text-[#475569] mb-1">Buscar por texto:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Título, estudiante, código..."
              className="w-full px-3 py-2 rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-[#704733]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#475569] mb-1">Filtrar por Etapa Activa:</label>
            <select
              value={stageFilter}
              onChange={(e) => setStageFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden"
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
            <label className="block text-[11px] font-semibold text-[#475569] mb-1">Filtrar por Tutor:</label>
            <select
              value={tutorFilter}
              onChange={(e) => setTutorFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden"
            >
              <option value="all">Todos los tutores (3)</option>
              {TUTORS.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#475569] mb-1">Riesgo Académico:</label>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9CEC1] bg-[#FAF7F2] text-[#253240] focus:bg-white focus:outline-hidden"
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
              className={`bg-white rounded-xl border p-5 transition-all flex flex-col justify-between shadow-xs ${
                isSelected
                  ? 'border-[#704733] ring-2 ring-[#704733]/20 bg-[#FAF7F2]/40'
                  : 'border-[#D9CEC1] hover:border-[#704733]/50 hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                {/* Badges bar */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold text-[#704733] bg-[#F3ECE3] px-2 py-0.5 rounded border border-[#D9CEC1]">
                    {project.institutionalId}
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                      project.riskLevel === 'Alto'
                        ? 'bg-[#FDF0F2] text-[#9D3549] border border-[#F5B5BF]'
                        : project.riskLevel === 'Medio'
                        ? 'bg-[#FEF6E8] text-[#865A16] border border-[#F3D298]'
                        : 'bg-[#EAF3EF] text-[#21684F] border border-[#A3D2BE]'
                    }`}
                  >
                    Riesgo {project.riskLevel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-[#253240] text-sm leading-snug line-clamp-2">
                  {project.title}
                </h3>

                {/* Student & Tutor Info */}
                <div className="text-xs text-[#475569] space-y-1 pt-1 border-t border-[#EBE4DA]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B]">Estudiante:</span>
                    <strong className="text-[#253240]">{project.student}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B]">Tutor:</span>
                    <span className="text-[#253240] font-medium">{project.tutor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B]">Etapa Actual:</span>
                    <span className="text-[#704733] font-semibold">#{activeStage.id} {activeStage.name.split('(')[0]}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#475569] mb-1">
                    <span>Avance ({approvedCount}/6 etapas)</span>
                    <span className="text-[#21684F] font-bold">{progressPct}%</span>
                  </div>
                  <div className="w-full bg-[#EBE4DA] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#21684F] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-[#EBE4DA]">
                <button
                  type="button"
                  onClick={() => onSelectProject(project.id)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#704733] text-white hover:bg-[#573524] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
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
        <div className="bg-white rounded-xl border border-[#D9CEC1] p-10 text-center space-y-2">
          <p className="text-sm font-semibold text-[#253240]">No se encontraron proyectos con los filtros seleccionados.</p>
          <p className="text-xs text-[#475569]">Intente ajustar los términos de búsqueda o restablecer los filtros de etapa y riesgo.</p>
        </div>
      )}
    </div>
  );
}
