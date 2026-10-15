import React, { useState, useMemo } from 'react';

// --- INLINE SVG ICONS (with graceful fallback) ---
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const AlertTriangleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const BookOpenIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CalendarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const UploadCloudIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <polyline points="16 16 12 12 8 16" />
  </svg>
);

const _FileCheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const CloseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// --- INITIAL GATE 0 CRITERIA (14 Items) ---
const INITIAL_GATE0_ITEMS = [
  { id: 'G0-01', label: 'Research question validated & clear problem boundary formulated', category: 'Foundation', checked: true },
  { id: 'G0-02', label: 'General & specific objectives aligned with methodological scope', category: 'Foundation', checked: true },
  { id: 'G0-03', label: 'Scope & boundary criteria explicit (temporal, geographical, thematic)', category: 'Foundation', checked: true },
  { id: 'G0-04', label: 'Unit of analysis defined (SMEs in manufacturing & services)', category: 'Foundation', checked: true },
  { id: 'G0-05', label: 'Preliminary conceptual map synthesized and referenced', category: 'Conceptual', checked: true },
  { id: 'G0-06', label: 'Conceptual categories / constructs established & operationalized', category: 'Conceptual', checked: true },
  { id: 'G0-07', label: 'Keyword dictionary structured (Boolean operators & multilingual syns)', category: 'Search Strategy', checked: true },
  { id: 'G0-08', label: 'Search equations reproducible & versioned across databases', category: 'Search Strategy', checked: true },
  { id: 'G0-09', label: 'Academic sources & databases justified (Scopus, WoS, IEEE, SciELO)', category: 'Search Strategy', checked: true },
  { id: 'G0-10', label: 'Inclusion / exclusion criteria (INC/EXC) encoded with formal limits', category: 'Screening', checked: true },
  { id: 'G0-11', label: 'Quality appraisal rubric defined (Q-01 to Q-04 critical filters)', category: 'Quality Assessment', checked: true },
  { id: 'G0-12', label: 'Data extraction form configured with cross-variable consistency', category: 'Synthesis', checked: true },
  { id: 'G0-13', label: 'Active decision log / bitácora enabled with institutional memory', category: 'Governance', checked: false },
  { id: 'G0-14', label: 'Version control established (v0.1 baseline repository archived)', category: 'Governance', checked: false }
];

// --- INITIAL STAGES ---
const INITIAL_STAGES = [
  { id: 1, name: 'Propuesta / Protocolo (Gate 0)', status: 'en_revision', date: '2026-03-20', gateAuditAvailable: true, description: 'Definición rigurosa del problema, 14 criterios del protocolo y viabilidad metodológica.' },
  { id: 2, name: 'Marco Teórico', status: 'pendiente', date: null, gateAuditAvailable: false, description: 'Revisión sistemática de literatura y estado del arte indexado.' },
  { id: 3, name: 'Metodología', status: 'pendiente', date: null, gateAuditAvailable: true, description: 'Diseño muestral, instrumentos validados y protocolo de recolección de campo.' },
  { id: 4, name: 'Recolección', status: 'pendiente', date: null, gateAuditAvailable: false, description: 'Levantamiento empírico de datos primarios en empresas seleccionadas.' },
  { id: 5, name: 'Análisis', status: 'pendiente', date: null, gateAuditAvailable: false, description: 'Procesamiento estadístico multivariable y triangulación de hallazgos.' },
  { id: 6, name: 'Documento Final', status: 'pendiente', date: null, gateAuditAvailable: false, description: 'Redacción académica completa de tesis y verificación antiplagio.' },
  { id: 7, name: 'Sustentación', status: 'pendiente', date: null, gateAuditAvailable: false, description: 'Defensa oral formal ante el jurado calificador institucional.' },
];

// --- MAIN COMPONENT ---
export default function FichaProyecto() {
  // 1. Roles & View State
  const [role, setRole] = useState('tutor'); // 'tutor' | 'student'

  // 2. Project Metadata (Dublin Core)
  const [metadata] = useState({
    title: 'Impact of Circular Economy in SMEs',
    cohort: '2026-I',
    thematicLine: 'Corporate Sustainability',
    targetDefenseDate: 'Nov 15, 2026',
    student: 'Mateo R.',
    tutor: 'Carlos G.',
    institutionalId: 'THS-2026-CS-042',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    createdDate: '2026-02-01'
  });

  // 3. Stages & Active Stage State
  const [stages, setStages] = useState(INITIAL_STAGES);
  const [activeStageId, setActiveStageId] = useState(1);

  // 4. Gate 0 Checklist State (14 Criteria)
  const [gate0Items, setGate0Items] = useState(INITIAL_GATE0_ITEMS);
  const [isGate0ModalOpen, setIsGate0ModalOpen] = useState(false);

  // 5. Bitácora & Traceability State
  const [decisionLog, setDecisionLog] = useState([
    {
      id: 1,
      timestamp: '2026-10-10 16:45',
      author: 'Carlos G. (Tutor)',
      action: 'Retroalimentación de Protocolo',
      notes: 'Se revisó la matriz de operacionalización de variables de economía circular. Requiere ajustar la delimitación de criterios de inclusión en empresas manufactureras de menos de 50 trabajadores.',
      milestone: 'Subsanación de G0-13 y G0-14 para cierre formal de Gate 0',
      deadline: '2026-10-20'
    },
    {
      id: 2,
      timestamp: '2026-10-05 10:15',
      author: 'Mateo R. (Estudiante)',
      action: 'Entrega de Avance v0.1',
      notes: 'Carga de propuesta de investigación preliminar, diccionario de palabras clave estructurado y ecuaciones de búsqueda para Scopus y Web of Science.',
      milestone: 'Evaluación de protocolo por tutor',
      deadline: '2026-10-12'
    }
  ]);

  const [riskLevel, setRiskLevel] = useState('Bajo'); // 'Bajo' | 'Medio' | 'Alto'
  const [observationInput, setObservationInput] = useState('');
  const [isObserving, setIsObserving] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // --- DERIVED METRICS ---
  const approvedStagesCount = useMemo(() => {
    return stages.filter(s => s.status === 'aprobado').length;
  }, [stages]);

  const globalProgress = useMemo(() => {
    return Math.round((approvedStagesCount / 7) * 100);
  }, [approvedStagesCount]);

  const gate0CompletedCount = useMemo(() => {
    return gate0Items.filter(item => item.checked).length;
  }, [gate0Items]);

  const isGate0Approved = gate0CompletedCount === 14;

  const activeStage = useMemo(() => {
    return stages.find(s => s.id === activeStageId) || stages[0];
  }, [stages, activeStageId]);

  // --- TOAST HELPER ---
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // --- ACTIONS ---
  const handleToggleGateItem = (id) => {
    if (role !== 'tutor') {
      showToast('Solo el tutor puede validar formalmente los criterios de Gate 0.');
      return;
    }
    setGate0Items(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleApproveStage = () => {
    // Check if Gate 0 criteria met if approving stage 1
    if (activeStage.id === 1 && !isGate0Approved) {
      showToast('⚠️ No se puede aprobar la Etapa 1: Debe cumplir los 14 criterios de Gate 0.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    setStages(prev =>
      prev.map(s => {
        if (s.id === activeStage.id) {
          return { ...s, status: 'aprobado', date: today };
        }
        // Unlock next stage if it was pendiente
        if (s.id === activeStage.id + 1 && s.status === 'pendiente') {
          return { ...s, status: 'en_revision' };
        }
        return s;
      })
    );

    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${metadata.tutor} (Tutor)`,
      action: `Aprobación Formal: ${activeStage.name}`,
      notes: `Se ha dictaminado la aprobación de la etapa ${activeStage.name}. Protocolo y evidencias validados satisfactoriamente con estándar institucional.`,
      milestone: activeStage.id < 7 ? `Inicio de ${stages[activeStage.id]?.name || 'Siguiente Etapa'}` : 'Culminación de Proceso de Tesis',
      deadline: '2026-11-15'
    };
    setDecisionLog([newLog, ...decisionLog]);
    showToast(`Etapa "${activeStage.name}" aprobada exitosamente.`);
  };

  const handleRequestChanges = () => {
    if (!observationInput.trim()) {
      showToast('Por favor describa las observaciones y cambios requeridos antes de guardar.');
      return;
    }

    setStages(prev =>
      prev.map(s => (s.id === activeStage.id ? { ...s, status: 'observado' } : s))
    );

    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${metadata.tutor} (Tutor)`,
      action: `Observación Registrada: ${activeStage.name}`,
      notes: observationInput.trim(),
      milestone: `Subsanación de observaciones en ${activeStage.name}`,
      deadline: '2026-10-25'
    };

    setDecisionLog([newLog, ...decisionLog]);
    setObservationInput('');
    setIsObserving(false);
    showToast('Observaciones enviadas al estudiante y registradas en la bitácora.');
  };

  const handleStudentUpload = () => {
    setStages(prev =>
      prev.map(s => (s.id === activeStage.id ? { ...s, status: 'en_revision' } : s))
    );

    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${metadata.student} (Estudiante)`,
      action: `Carga de Nueva Evidencia: ${activeStage.name}`,
      notes: `Archivo complementario subido para revisión: 'Evidencia_${activeStage.name.replace(/[^a-zA-Z0-9]/g, '_')}_v1.2.pdf'. Se solicita evaluación de avances y resolución de observaciones.`,
      milestone: `Revisión por parte de ${metadata.tutor}`,
      deadline: '2026-10-22'
    };

    setDecisionLog([newLog, ...decisionLog]);
    showToast('Archivo y evidencia subidos con éxito. El estado ha cambiado a "En Revisión".');
  };

  // --- CLIENT-SIDE CSV EXPORT ---
  const handleExportCSV = () => {
    let csvContent = '\uFEFF'; // UTF-8 BOM for clean Excel display of accents/tildes
    
    // Metadata Header
    csvContent += 'FICHA INSTITUCIONAL DE SEGUIMIENTO DE TESIS\n';
    csvContent += `Estándar Dublin Core & Protocolo Gate 0\n\n`;
    csvContent += `Título del Proyecto,"${metadata.title}"\n`;
    csvContent += `Cohorte,"${metadata.cohort}"\n`;
    csvContent += `Línea Temática,"${metadata.thematicLine}"\n`;
    csvContent += `Fecha Objetivo de Sustentación,"${metadata.targetDefenseDate}"\n`;
    csvContent += `Estudiante Responsable,"${metadata.student}"\n`;
    csvContent += `Tutor / Director,"${metadata.tutor}"\n`;
    csvContent += `Código Institucional,"${metadata.institutionalId}"\n`;
    csvContent += `Progreso Global,"${globalProgress}% (${approvedStagesCount}/7 Etapas)"\n`;
    csvContent += `Riesgo Académico Actual,"${riskLevel}"\n\n`;

    // Stages Table
    csvContent += '--- ESTADO DE LAS ETAPAS DEL PROYECTO ---\n';
    csvContent += 'ID,Etapa,Estado,Fecha de Aprobación,Descripción\n';
    stages.forEach(s => {
      csvContent += `${s.id},"${s.name}","${s.status}","${s.date || 'Pendiente'}","${s.description}"\n`;
    });
    csvContent += '\n';

    // Gate 0 Table
    csvContent += '--- AUDITORÍA DE CALIDAD GATE 0 (14 CRITERIOS) ---\n';
    csvContent += 'Código,Criterio,Categoría,Estado de Cumplimiento\n';
    gate0Items.forEach(item => {
      csvContent += `${item.id},"${item.label}","${item.category}","${item.checked ? 'CUMPLIDO' : 'PENDIENTE'}"\n`;
    });
    csvContent += `\nResultado Gate 0,"${isGate0Approved ? 'APROBADO' : 'NO APROBADO - Cerrar pendientes'}",Cumplidos: ${gate0CompletedCount}/14\n\n`;

    // Decision Log Table
    csvContent += '--- BITÁCORA Y TRAZABILIDAD DE DECISIONES ---\n';
    csvContent += 'ID,Fecha y Hora,Autor,Acción,Observaciones / Acuerdos,Hito Acordado,Fecha Límite\n';
    decisionLog.forEach(log => {
      csvContent += `${log.id},"${log.timestamp}","${log.author}","${log.action}","${log.notes.replace(/"/g, '""')}","${log.milestone}","${log.deadline}"\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Ficha_Seguimiento_${metadata.institutionalId}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Reporte completo de Ficha y Bitácora exportado en formato CSV (.csv).');
  };

  // Helper styles for stage badges
  const getStageBadge = (stage) => {
    switch (stage.status) {
      case 'aprobado':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            ✔ Aprobado {stage.date && <span className="opacity-75 font-normal text-[10px]">({stage.date})</span>}
          </span>
        );
      case 'en_revision':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            En Revisión
          </span>
        );
      case 'observado':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            Cambios Solicitados
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
            <LockIcon className="w-3 h-3 text-slate-400" />
            Bloqueado
          </span>
        );
    }
  };

  const getRiskBadge = () => {
    switch (riskLevel) {
      case 'Alto':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-rose-100 text-rose-800 border border-rose-300">Alto</span>;
      case 'Medio':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-100 text-amber-800 border border-amber-300">Medio</span>;
      default:
        return <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">Bajo</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased p-3 sm:p-6 lg:p-8 font-sans">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center gap-3 animate-fade-in transition-all">
          <div className="p-1 bg-emerald-500 rounded-full text-white">
            <CheckIcon className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-5xl mx-auto space-y-6">

        {/* TOP CONTROLS: ROLE SWITCHER & CSV EXPORT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Modo de Vista:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setRole('tutor')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  role === 'tutor'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <UserIcon className="w-3.5 h-3.5" />
                View: Tutor
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  role === 'student'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <UserIcon className="w-3.5 h-3.5" />
                View: Student
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 transition-colors shadow-sm"
              title="Exportar toda la ficha y bitácora institucional a CSV compatible con Excel"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Export to Excel (.csv)</span>
            </button>
          </div>
        </div>

        {/* 1. HEADER & DUBLIN CORE METADATA CARD */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                    Dublin Core Validated
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                    ID: {metadata.institutionalId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-700/50 text-slate-300">
                    Cohorte {metadata.cohort}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                  {metadata.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                  <BookOpenIcon className="w-4 h-4 text-indigo-400" />
                  {metadata.thematicLine} &bull; {metadata.department}
                </p>
              </div>

              {/* Defense Date Target */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-right min-w-[140px] self-stretch sm:self-auto">
                <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                  Target Defense Date
                </div>
                <div className="text-sm font-bold text-amber-300 flex items-center justify-end gap-1 mt-0.5">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  {metadata.targetDefenseDate}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Defensa programada</div>
              </div>
            </div>

            {/* Dublin Core Roles & Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Estudiante / Investigador</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {metadata.student}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Tutor / Asesor Principal</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  {metadata.tutor}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Memoria Institucional</span>
                <span className="font-medium text-slate-200 mt-0.5 block">Repositorio v0.1</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Fase de Auditoría</span>
                <span className="font-medium text-amber-200 mt-0.5 block">Gate 0 Activo</span>
              </div>
            </div>
          </div>

          {/* Reactive Global Progress Bar */}
          <div className="p-6 bg-slate-50/50 border-t border-slate-200">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
              <span className="flex items-center gap-2">
                <span>Avance Global de Tesis</span>
                <span className="text-slate-400 font-normal text-[11px]">
                  (Aprobadas: {approvedStagesCount} de 7 Etapas)
                </span>
              </span>
              <span className="text-indigo-600 font-bold text-sm">{globalProgress}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden p-0.5 shadow-inner">
              <div
                className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${globalProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* 2. 7-STAGE TRACKER (STATE MACHINE) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Flujo de 7 Etapas del Ciclo Académico</span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">State Machine</span>
              </h2>
              <p className="text-xs text-slate-500">
                Seleccione una etapa para gestionar sus requerimientos y observar la bitácora específica.
              </p>
            </div>
            <div className="text-xs text-slate-500">
              Etapa Seleccionada: <strong className="text-indigo-600">#{activeStage.id} {activeStage.name}</strong>
            </div>
          </div>

          {/* Stepper Grid / Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
            {stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`cursor-pointer rounded-xl p-3.5 border transition-all flex flex-col justify-between text-left relative ${
                    isActive
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-sm ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Etapa {stage.id}
                      </span>
                      {stage.status === 'aprobado' && <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />}
                      {stage.status === 'pendiente' && <LockIcon className="w-3.5 h-3.5 text-slate-400" />}
                    </div>

                    <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 leading-snug">
                      {stage.name}
                    </h3>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
                    {getStageBadge(stage)}

                    {/* Button to open Gate 0 Drawer if available on Stage 1 or Stage 3 */}
                    {stage.gateAuditAvailable && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveStageId(stage.id);
                          setIsGate0ModalOpen(true);
                        }}
                        className="w-full text-center px-2 py-1 text-[11px] font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-md border border-indigo-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <ShieldCheckIcon className="w-3 h-3 text-indigo-600" />
                        Revisar Evidencia
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Active Stage Detail Banner */}
          <div className="mt-3 bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900">
                  Etapa {activeStage.id}: {activeStage.name}
                </span>
                {getStageBadge(activeStage)}
              </div>
              <p className="text-xs text-slate-600 max-w-2xl">{activeStage.description}</p>
            </div>

            {activeStage.gateAuditAvailable && (
              <button
                type="button"
                onClick={() => setIsGate0ModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all whitespace-nowrap"
              >
                <ShieldCheckIcon className="w-4 h-4" />
                Auditoría Gate 0 ({gate0CompletedCount}/14)
              </button>
            )}
          </div>
        </div>

        {/* 4. ACTIVE BITÁCORA (TUTOR-STUDENT AGREEMENT CARD) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">Bitácora Activa & Acuerdo de Sesión</h2>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  Traceability Card
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Acuerdos formalizados entre Mateo R. (Estudiante) y Carlos G. (Tutor).
              </p>
            </div>

            {/* Risk Indicator with Tutor Control */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 font-medium">Indicador de Riesgo Académico:</span>
              {getRiskBadge()}
              {role === 'tutor' && (
                <select
                  value={riskLevel}
                  onChange={(e) => {
                    setRiskLevel(e.target.value);
                    showToast(`Nivel de riesgo actualizado a ${e.target.value}`);
                  }}
                  className="text-xs border border-slate-300 rounded-md px-2 py-1 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="Bajo">Bajo</option>
                  <option value="Medio">Medio</option>
                  <option value="Alto">Alto</option>
                </select>
              )}
            </div>
          </div>

          {/* DYNAMIC ACTION CONTROLS BASED ON ACTIVE ROLE */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <span>Panel de Acción Activa</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  role === 'tutor' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {role === 'tutor' ? 'Controles de Tutor' : 'Controles de Estudiante'}
                </span>
              </span>
              <span className="text-xs text-slate-500">
                Afecta directamente la: <strong>Etapa {activeStage.id} ({activeStage.name})</strong>
              </span>
            </div>

            {/* TUTOR CONTROLS */}
            {role === 'tutor' ? (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleApproveStage}
                    disabled={activeStage.status === 'aprobado'}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all ${
                      activeStage.status === 'aprobado'
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <CheckIcon className="w-4 h-4" />
                    Aprobar Etapa
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsObserving(!isObserving)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 transition-colors shadow-sm"
                  >
                    <AlertTriangleIcon className="w-4 h-4 text-rose-600" />
                    {isObserving ? 'Cancelar Observación' : 'Pedir Cambios'}
                  </button>

                  {activeStage.gateAuditAvailable && (
                    <button
                      type="button"
                      onClick={() => setIsGate0ModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-indigo-700 border border-indigo-300 transition-colors"
                    >
                      <ShieldCheckIcon className="w-4 h-4 text-indigo-600" />
                      Validar Criterios Gate 0 ({gate0CompletedCount}/14)
                    </button>
                  )}
                </div>

                {/* Inline observation textarea */}
                {isObserving && (
                  <div className="mt-3 p-4 bg-white rounded-lg border border-rose-200 space-y-3 animate-fade-in">
                    <label className="block text-xs font-semibold text-rose-900">
                      Detalle de observaciones y ajustes requeridos:
                    </label>
                    <textarea
                      rows={3}
                      value={observationInput}
                      onChange={(e) => setObservationInput(e.target.value)}
                      placeholder="Escriba aquí los puntos que el estudiante debe corregir o ampliar antes de proceder con la aprobación formal..."
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsObserving(false);
                          setObservationInput('');
                        }}
                        className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                      >
                        Descartar
                      </button>
                      <button
                        type="button"
                        onClick={handleRequestChanges}
                        className="px-4 py-1.5 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-700 text-white shadow-sm"
                      >
                        Enviar Observaciones & Marcar 'Cambios Solicitados'
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* STUDENT CONTROLS */
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200 border-dashed flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg">
                      <UploadCloudIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">
                        Cargar Entrega / Sustento para {activeStage.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Formatos aceptados: PDF, ZIP, XLSX. Tamaño máx. 50MB con hash institucional.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleStudentUpload}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
                  >
                    <UploadCloudIcon className="w-4 h-4" />
                    Subir Nueva Evidencia
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Al subir nueva evidencia, el estado pasará automáticamente a <strong>"En Revisión"</strong> para que el tutor valide los cambios.
                </div>
              </div>
            )}
          </div>

          {/* HISTORICAL DECISION LOG TIMELINE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-slate-500" />
                Historial de Decisiones y Acuerdos de Trabajo
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">
                {decisionLog.length} registros archivados
              </span>
            </div>

            <div className="space-y-3">
              {decisionLog.map((log) => (
                <div
                  key={log.id}
                  className="p-4 bg-slate-50/80 hover:bg-slate-50 rounded-xl border border-slate-200/80 transition-colors space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{log.action}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                        {log.author}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{log.timestamp}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-100">
                    {log.notes}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <strong className="text-slate-700">Próximo Hito Acordado:</strong>
                      <span>{log.milestone}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <CalendarIcon className="w-3 h-3" />
                      Límite: {log.deadline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 3. GATE 0 VERIFICATION DRAWER / MODAL */}
      {isGate0ModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-slide-left">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                    Protocolo de Calidad
                  </span>
                  <span className="text-xs text-slate-400">Etapa 1: Propuesta</span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-indigo-400" />
                  Auditoría de Calidad Gate 0 (14 Criterios)
                </h3>
                <p className="text-xs text-slate-300">
                  Verificación previa a la ejecución de búsqueda sistemática y recolección de campo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsGate0ModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Live Counter & Gate Status Bar */}
            <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-700">Progreso de Criterios:</span>
                <div className="text-sm font-extrabold text-indigo-700 mt-0.5">
                  Criteria met: {gate0CompletedCount} / 14
                </div>
              </div>

              {/* Dynamic Gate Status */}
              <div>
                {isGate0Approved ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <CheckIcon className="w-4 h-4 text-emerald-700" />
                    GATE STATUS: APROBADO
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                    <AlertTriangleIcon className="w-4 h-4 text-rose-700" />
                    GATE STATUS: NO APROBADO — Cerrar pendientes ({14 - gate0CompletedCount} restantes)
                  </div>
                )}
              </div>
            </div>

            {/* Checklist Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              <div className="text-xs text-slate-500 mb-2">
                {role === 'tutor'
                  ? 'Como Tutor, haga clic en las casillas para validar cada criterio del protocolo investigativo.'
                  : 'Modo Estudiante: Vista de solo lectura. Consulte con su tutor para completar las verificaciones pendientes.'}
              </div>

              {gate0Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleToggleGateItem(item.id)}
                  className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    role === 'tutor' ? 'cursor-pointer' : 'cursor-default'
                  } ${
                    item.checked
                      ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly={role !== 'tutor'}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer"
                  />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {item.id}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <p className={`text-xs ${item.checked ? 'text-slate-800 font-medium' : 'text-slate-600'}`}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Memoria Institucional: Fase 0 Excel Audit
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsGate0ModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm"
                >
                  Cerrar
                </button>
                {role === 'tutor' && isGate0Approved && (
                  <button
                    type="button"
                    onClick={() => {
                      handleApproveStage();
                      setIsGate0ModalOpen(false);
                    }}
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center gap-1.5"
                  >
                    <CheckIcon className="w-4 h-4" />
                    Aprobar Gate 0 en Etapa
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
