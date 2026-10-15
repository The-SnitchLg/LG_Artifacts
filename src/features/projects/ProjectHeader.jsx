import React from 'react';
import { calculateProgress } from '../../domain/progressCalculator.js';

export default function ProjectHeader({
  project,
  onBackToPortfolio
}) {
  const { approvedCount, percentage } = calculateProgress(project.stages);

  return (
    <div className="bg-white rounded-2xl border border-[#D9CEC1] shadow-sm overflow-hidden">
      {/* Top Banner with Academic Navy/Brown gradient */}
      <div className="bg-gradient-to-r from-[#253240] via-[#354558] to-[#253240] text-white p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onBackToPortfolio}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/20 transition-colors"
              >
                &larr; Volver al Portafolio
              </button>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#A65C3D]/30 text-[#FAF7F2] border border-[#A65C3D]/50">
                {project.institutionalId}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#21684F]/30 text-[#FAF7F2] border border-[#21684F]/40">
                Cohorte {project.cohort}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-[#FAF7F2]">
                Estándar Dublin Core
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-200 flex items-center gap-1.5">
              <span>{project.thematicLine}</span> &bull; <span>{project.department}</span>
            </p>
          </div>

          {/* Target Date and Risk Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-right min-w-[170px] self-stretch sm:self-auto space-y-1">
            <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
              Fecha Objetivo de Conclusión
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-200">
              {project.targetDate}
            </div>
            <div className="pt-1 flex items-center justify-end gap-1.5 text-[11px]">
              <span className="text-slate-300">Riesgo:</span>
              <span
                className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                  project.riskLevel === 'Alto'
                    ? 'bg-[#9D3549] text-white'
                    : project.riskLevel === 'Medio'
                    ? 'bg-[#865A16] text-white'
                    : 'bg-[#21684F] text-white'
                }`}
              >
                {project.riskLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Roles and Dublin Core Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-white/15 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Estudiante Investigador</span>
            <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#A3D2BE]"></span>
              {project.student}
            </span>
            <span className="text-[10px] text-slate-300 block">{project.studentEmail}</span>
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
            <span className="text-[10px] text-slate-300 block">Guía de Investigación</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[11px]">Control de Salida</span>
            <span className="font-semibold text-white mt-0.5 block">Gate 0 (14 Criterios)</span>
            <span className="text-[10px] text-slate-300 block">Auditoría Previa a Etapa 2</span>
          </div>
        </div>
      </div>

      {/* Reactive Global Progress Bar (Exact denominator 6) */}
      <div className="p-5 sm:p-6 bg-[#FAF7F2] border-t border-[#D9CEC1]">
        <div className="flex items-center justify-between text-xs font-semibold text-[#253240] mb-2">
          <span className="flex items-center gap-2">
            <span>Avance Global del Trabajo de Grado</span>
            <span className="text-[#475569] font-normal text-[11px]">
              ({approvedCount} de 6 etapas académicas aprobadas)
            </span>
          </span>
          <span className="text-[#21684F] font-bold text-sm">{percentage}%</span>
        </div>
        <div className="w-full bg-[#EBE4DA] rounded-full h-3 overflow-hidden p-0.5">
          <div
            className="bg-gradient-to-r from-[#704733] to-[#21684F] h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
