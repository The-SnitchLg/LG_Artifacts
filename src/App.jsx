import React, { useState, useMemo } from 'react';
import { PILOT_PROJECTS } from './data/pilotData.js';
import TopNav from './features/navigation/TopNav.jsx';
import DemoNoticeBanner from './features/navigation/DemoNoticeBanner.jsx';
import ProjectPortfolio from './features/portfolio/ProjectPortfolio.jsx';
import ProjectHeader from './features/projects/ProjectHeader.jsx';
import StageStepper from './features/stages/StageStepper.jsx';
import StageDetail from './features/stages/StageDetail.jsx';
import Gate0Modal from './features/gate0/Gate0Modal.jsx';
import Phase0Modal from './features/phase0/Phase0Modal.jsx';
import TutorReviewModal from './features/review/TutorReviewModal.jsx';
import EvidenceManager from './features/evidence/EvidenceManager.jsx';
import BitacoraSection from './features/bitacora/BitacoraSection.jsx';
import { exportProjectToCSV, downloadCSV } from './domain/csvExporter.js';
import { validateGate0 } from './domain/gate0Validator.js';

export default function App() {
  // 1. App State
  const [role, setRole] = useState('tutor'); // 'estudiante' | 'tutor' | 'admin'
  const [currentView, setCurrentView] = useState('ficha'); // 'portafolio' | 'ficha'
  const [projects, setProjects] = useState(PILOT_PROJECTS);
  const [selectedProjectId, setSelectedProjectId] = useState('PRJ-01');
  const [activeStageId, setActiveStageId] = useState(1);

  // 2. Modals & Notifications
  const [isGate0ModalOpen, setIsGate0ModalOpen] = useState(false);
  const [isPhase0ModalOpen, setIsPhase0ModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Selected Project
  const currentProject = useMemo(() => {
    return projects.find(p => p.id === selectedProjectId) || projects[0];
  }, [projects, selectedProjectId]);

  // Active Stage in Selected Project
  const activeStage = useMemo(() => {
    return currentProject.stages.find(s => s.id === activeStageId) || currentProject.stages[0];
  }, [currentProject, activeStageId]);

  // Gate 0 Analysis
  const gate0Analysis = useMemo(() => {
    return validateGate0(currentProject.gate0Items);
  }, [currentProject.gate0Items]);

  // Handler: Select Project from Portfolio
  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
    const proj = projects.find(p => p.id === projectId);
    if (proj) {
      const firstActive = proj.stages.find(s => s.status === 'en_revision' || s.status === 'observado');
      setActiveStageId(firstActive ? firstActive.id : 1);
    }
    setCurrentView('ficha');
  };

  // Handler: Gate 0 Checklist Toggle (Tutor only)
  const handleToggleGateItem = (itemId) => {
    if (role !== 'tutor') {
      showToast('Acceso denegado: Solo el tutor asignado puede certificar los criterios de Gate 0.');
      return;
    }

    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;
        const updatedItems = p.gate0Items.map(item =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        );
        return { ...p, gate0Items: updatedItems };
      })
    );
  };

  // Handler: Phase 0 Step Toggle
  const handleTogglePhase0Step = (stepNumber) => {
    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;
        const updatedSteps = p.phase0Steps.map(step =>
          step.number === stepNumber ? { ...step, completed: !step.completed } : step
        );
        return { ...p, phase0Steps: updatedSteps };
      })
    );
  };

  // Handler: Student Uploads Evidence
  const handleStudentUploadEvidence = () => {
    const today = new Date().toISOString().split('T')[0];
    const newVersion = `v1.${(currentProject.evidences || []).length + 1}`;
    const newFilename = `Evidencia_Etapa_${activeStage.id}_${newVersion}.pdf`;

    const newEvidence = {
      id: `EV-${Date.now()}`,
      version: newVersion,
      filename: newFilename,
      stageId: activeStage.id,
      uploadedBy: currentProject.student,
      date: today,
      size: '2.5 MB'
    };

    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${currentProject.student} (Estudiante)`,
      action: `Entrega de Evidencia: ${activeStage.name}`,
      notes: `Se cargó el archivo '${newFilename}' para revisión formal del tutor. El estado pasa a 'En Revisión'.`,
      milestone: `Revisión de avance por ${currentProject.tutor}`,
      deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;
        const updatedStages = p.stages.map(s =>
          s.id === activeStage.id ? { ...s, status: 'en_revision' } : s
        );
        return {
          ...p,
          stages: updatedStages,
          evidences: [newEvidence, ...(p.evidences || [])],
          decisionLog: [newLog, ...(p.decisionLog || [])]
        };
      })
    );

    showToast(`Archivo '${newFilename}' entregado con éxito. Estado actualizado a 'En Revisión'.`);
  };

  // Handler: Tutor Requests Changes
  const handleTutorRequestChanges = ({ notes, milestone, deadline }) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${currentProject.tutor} (Tutor)`,
      action: `Observación Registrada: ${activeStage.name}`,
      notes,
      milestone,
      deadline
    };

    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;
        const updatedStages = p.stages.map(s =>
          s.id === activeStage.id ? { ...s, status: 'observado' } : s
        );
        return {
          ...p,
          stages: updatedStages,
          riskLevel: 'Medio',
          decisionLog: [newLog, ...(p.decisionLog || [])]
        };
      })
    );

    showToast('Observaciones registradas formalmente. Notificación emitida al estudiante.');
  };

  // Handler: Tutor Approves Stage
  const handleTutorApproveStage = ({ notes, milestone, deadline }) => {
    if (activeStage.id === 1 && !gate0Analysis.isFullyCompliant) {
      showToast('⚠️ No se puede aprobar la Etapa 1: Los 14 criterios de Gate 0 deben estar conformes.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];

    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
      author: `${currentProject.tutor} (Tutor)`,
      action: `Aprobación Formal: ${activeStage.name}`,
      notes,
      milestone,
      deadline
    };

    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;

        const updatedStages = p.stages.map(s => {
          if (s.id === activeStage.id) {
            return { ...s, status: 'aprobado', date: today };
          }
          if (s.id === activeStage.id + 1 && s.status === 'pendiente') {
            return { ...s, status: 'en_revision' };
          }
          return s;
        });

        return {
          ...p,
          stages: updatedStages,
          riskLevel: 'Bajo',
          decisionLog: [newLog, ...(p.decisionLog || [])]
        };
      })
    );

    showToast(`Etapa #${activeStage.id} "${activeStage.name}" aprobada formalmente.`);
  };

  // Handler: Add Academic Commitment
  const handleAddCommitment = (commitment) => {
    const newCommitment = {
      id: `C-${Date.now()}`,
      ...commitment
    };

    setProjects(prev =>
      prev.map(p => {
        if (p.id !== currentProject.id) return p;
        return {
          ...p,
          commitments: [newCommitment, ...(p.commitments || [])]
        };
      })
    );

    showToast('Nuevo compromiso académico registrado con éxito.');
  };

  // Handler: CSV Export
  const handleExportCSV = () => {
    const csvContent = exportProjectToCSV(currentProject);
    const dateStr = new Date().toISOString().slice(0, 10);
    const filename = `Ficha_Seguimiento_${currentProject.institutionalId}_${dateStr}.csv`;
    downloadCSV(filename, csvContent);
    showToast('Ficha y bitácora exportadas exitosamente en formato CSV (.csv).');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#253240] flex flex-col font-sans">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#253240] text-white px-4 py-3 rounded-xl shadow-xl border border-[#354558] flex items-center gap-3 animate-fade-in">
          <span className="w-5 h-5 rounded-full bg-[#21684F] text-white flex items-center justify-center font-bold text-xs shrink-0">
            ✓
          </span>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Demo Notice Banner */}
      <DemoNoticeBanner />

      {/* Navigation Header */}
      <TopNav
        role={role}
        onRoleChange={setRole}
        currentView={currentView}
        onViewChange={setCurrentView}
        onExportCSV={handleExportCSV}
        selectedProjectTitle={currentProject.title}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 w-full flex-1">
        {currentView === 'portafolio' ? (
          <ProjectPortfolio
            projects={projects}
            selectedProjectId={selectedProjectId}
            onSelectProject={handleSelectProject}
            role={role}
          />
        ) : (
          <div className="space-y-6">
            {/* 1. Project Header Card (Dublin Core & 6-Stage Progress) */}
            <ProjectHeader
              project={currentProject}
              onBackToPortfolio={() => setCurrentView('portafolio')}
            />

            {/* 2. 6-Stage Stepper Machine */}
            <StageStepper
              stages={currentProject.stages}
              activeStageId={activeStageId}
              onSelectStage={setActiveStageId}
              onOpenGate0={() => setIsGate0ModalOpen(true)}
              onOpenPhase0={() => setIsPhase0ModalOpen(true)}
            />

            {/* 3. Active Stage Detail & Actions */}
            <StageDetail
              stage={activeStage}
              role={role}
              onOpenGate0={() => setIsGate0ModalOpen(true)}
              onOpenPhase0={() => setIsPhase0ModalOpen(true)}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
              onStudentUploadEvidence={handleStudentUploadEvidence}
              isGate0Compliant={gate0Analysis.isFullyCompliant}
              gate0CompletedCount={gate0Analysis.completedCount}
            />

            {/* 4. Evidence Repository & Version Management */}
            <EvidenceManager
              evidences={currentProject.evidences || []}
              activeStageId={activeStage.id}
              role={role}
              onUploadEvidence={handleStudentUploadEvidence}
              onShowToast={showToast}
            />

            {/* 5. Bitácora & Academic Commitments */}
            <BitacoraSection
              decisionLog={currentProject.decisionLog || []}
              commitments={currentProject.commitments || []}
              role={role}
              onAddCommitment={handleAddCommitment}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D9CEC1] py-6 px-4 text-center text-xs text-[#64748B]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Plataforma de Seguimiento Académico de Trabajos de Grado &bull; Piloto 2026-I
          </p>
          <p className="text-[11px]">
            Estándar Metodológico Fase 0 &bull; Protocolo de Salida Gate 0 &bull; Interfaz 100% en Español
          </p>
        </div>
      </footer>

      {/* Modals */}
      <Gate0Modal
        isOpen={isGate0ModalOpen}
        onClose={() => setIsGate0ModalOpen(false)}
        gate0Items={currentProject.gate0Items}
        onToggleItem={handleToggleGateItem}
        role={role}
        onShowToast={showToast}
      />

      <Phase0Modal
        isOpen={isPhase0ModalOpen}
        onClose={() => setIsPhase0ModalOpen(false)}
        phase0Steps={currentProject.phase0Steps}
        onToggleStep={handleTogglePhase0Step}
      />

      <TutorReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        activeStage={activeStage}
        isGate0Compliant={gate0Analysis.isFullyCompliant}
        gate0CompletedCount={gate0Analysis.completedCount}
        onApproveStage={handleTutorApproveStage}
        onRequestChanges={handleTutorRequestChanges}
        tutorName={currentProject.tutor}
      />
    </div>
  );
}
