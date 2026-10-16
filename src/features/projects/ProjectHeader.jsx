import React from 'react';
import { calculateProgress } from '../../domain/progressCalculator.js';
import StatusBadge from '../../components/StatusBadge.jsx';

/**
 * ProjectHeader — Ficha Técnica Dublin Core con Avance de 6 Etapas
 * Tipografía de alto contraste y metadatos de supervisión académica.
 */
export default function ProjectHeader({
  project,
  onBackToPortfolio
}) {
  const { approvedCount, percentage } = calculateProgress(project.stages);

  return (
    <div className="bg-white rounded-2xl border border-[#D8CEBF] shadow-editorial-sm overflow-hidden">
      {/* Institutional Header Banner */}
      <div className="bg-[#1E293B] text-white p-5 sm:p-7">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-2.5 max-w-3xl">
            {/* Badges / Navigation */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-[#FBF9F5] border border-white/20 transition-colors"
              >
                &larr; Volver al Portafolio
              </button>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#8E4928]/40 text-[#FBF9F5] border border-[#8E4928]/60">
                {project.institutionalId}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#059669]/30 text-[#FBF9F5] border border-[#059669]/40">
                Cohorte {project.cohort}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-slate-300">
                Dublin Core Metadatos
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
              <span>{project.thematicLine}</span>
              <span>&bull;</span>
              <span>{project.department}</span>
            </p>
          </div>

          {/* Target Date and Risk Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-left md:text-right min-w-[190px] self-stretch md:self-auto space-y-1 shrink-0">
            <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider block">
              Fecha Objetivo de Conclusión
            </span>
            <div className="text-sm font-bold text-amber-200 font-mono">
              {project.targetDate}
            </div>
            <div className="pt-1.5 flex items-center md:justify-end gap-2 text-[11px]">
              <span className="text-slate-300">Riesgo:</span>
              <StatusBadge type="risk" value={project.riskLevel} />
            </div>
          </div>
        </div>

        {/* Roles and Dublin Core Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-white/15 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Estudiante Investigador</span>
            <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#9CD5BE]"></span>
              {project.student}
            </span>
            <span className="text-[10px] text-slate-300 block font-mono">{project.studentEmail}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Tutor / Asesor Principal</span>
            <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {project.tutor}
            </span>
            <span className="text-[10px] text-slate-300 block">Dictaminador Oficial</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Protocolo Metodológico</span>
            <span className="font-semibold text-white mt-0.5 block">17 Actividades Fase 0</span>
            <span className="text-[10px] text-slate-300 block">Investigación Preparatoria</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Control de Salida</span>
            <span className="font-semibold text-white mt-0.5 block">Gate 0 (14 Criterios)</span>
            <span className="text-[10px] text-slate-300 block">Precondición Etapa 2</span>
          </div>
        </div>
      </div>

      {/* 6-Stage Progress Indicator Bar */}
      <div className="p-4 sm:p-5 bg-white border-t border-[#E8E1D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-xl bg-[#F5F1EA] text-[#6E432F] flex items-center justify-center font-bold text-sm shrink-0 border border-[#D8CEBF]">
            {approvedCount}/6
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1C1917] text-sm">
                Avance Académico Global: {percentage}%
              </span>
              <span className="text-[10px] text-[#57534E]">
                ({approvedCount} de 6 etapas aprobadas)
              </span>
            </div>
            <p className="text-[11px] text-[#57534E]">
              Fórmula de cohorte: (etapas aprobadas / 6) &times; 100
            </p>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full sm:w-64 space-y-1">
          <div className="w-full bg-[#E8E1D5] rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#059669] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] text-[#8F8881] font-mono">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
