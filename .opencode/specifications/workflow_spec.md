# Especificación del Flujo de Trabajo Académico — LG_Artifacts

## 1. Resumen del Hito
- **Nombre:** Seguimiento Académico de Trabajos de Grado — Piloto 2026-I
- **Objetivo Central:** Plataforma web en React + Vite + Tailwind para la supervisión de 15 proyectos en 6 etapas académicas con Fase 0, Gate 0, bitácora y exportación CSV segura.
- **Público Objetivo:** Estudiantes tesistas, tutores/asesores de tesis y directores de grados académicos.

## 2. Desglose de Fases y Tareas Técnicas

### Fase 0: Auditoría y Línea Base
- [x] Tarea 0.1: Auditoría de stack, dependencias y discrepancias en `docs/architecture/auditoria-inicial.md`.
- [x] Tarea 0.2: Creación de la rama de trabajo `feat/seguimiento-academico-mvp`.

### Fase 1 y 2: Planificación, Dominio y Diseño
- [x] Tarea 1.1: Documentación del plan de implementación en `docs/implementation/plan.md`.
- [x] Tarea 1.2: Definición de variables CSS de tokens cálidos en `src/styles/tokens.css` y `docs/ux/sistema-diseno.md`.
- [x] Tarea 1.3: Creación de módulos de dominio puro (`stageMachine.js`, `progressCalculator.js`, `gate0Validator.js`, `csvExporter.js`).
- [x] Tarea 1.4: Definición del dataset del piloto de 15 proyectos en `src/data/pilotData.js`.

### Fase 3: Implementación de Frontend Modular
- [x] Tarea 3.1: Componentes de navegación y advertencia de modo demo (`TopNav.jsx`, `DemoNoticeBanner.jsx`).
- [x] Tarea 3.2: Portafolio de proyectos con filtros y búsqueda (`ProjectPortfolio.jsx`).
- [x] Tarea 3.3: Cabecera Dublin Core y stepper de 6 etapas (`ProjectHeader.jsx`, `StageStepper.jsx`, `StageDetail.jsx`).
- [x] Tarea 3.4: Auditoría interactiva Gate 0 y guía Fase 0 (`Gate0Modal.jsx`, `Phase0Modal.jsx`).
- [x] Tarea 3.5: Modal de dictamen del tutor (`TutorReviewModal.jsx`).
- [x] Tarea 3.6: Repositorio de evidencias versionadas y bitácora de compromisos (`EvidenceManager.jsx`, `BitacoraSection.jsx`).
- [x] Tarea 3.7: Integración completa en `App.jsx` garantizando idioma 100% español nativo.

### Fase 4: Arquitectura de Base de Datos Supabase
- [x] Tarea 4.1: Migración DDL SQL versionada con 12 tablas relacionales, constraints y RLS (`supabase/migrations/20261014000000_schema_inicial.sql`).
- [x] Tarea 4.2: Datos semilla reproducibles (`supabase/seed.sql`).
- [x] Tarea 4.3: Documentación de modelo y seguridad (`docs/database/modelo-datos.md`, `docs/database/seguridad.md`).

## 3. Escenarios de Aceptación Críticos

### Escenario 1: Bloqueo de Aprobación por Gate 0 Incompleto
- **Dado:** Un proyecto con la Etapa 1 en estado `en_revision` y 13 de 14 criterios de Gate 0 conformes.
- **Cuando:** El tutor intenta emitir la aprobación formal de la Etapa 1.
- **Entonces:** El sistema bloquea la acción, muestra una alerta explicativa e indica que se requiere verificar los 14 criterios de Gate 0.

### Escenario 2: Habilitación de Dictamen Manual (Sin Auto-Aprobación)
- **Dado:** Un proyecto con la Etapa 1 en estado `en_revision` y 13 de 14 criterios de Gate 0 conformes.
- **Cuando:** El tutor marca el criterio 14 como conforme (14/14).
- **Entonces:** El estado de la Etapa 1 permanece en `en_revision`, el progreso se mantiene intacto, y se habilita el botón para que el tutor dictamine la aprobación explícitamente.

### Escenario 3: Progreso Exacto en Base 6
- **Dado:** Un proyecto nuevo con 0 etapas aprobadas.
- **Cuando:** El tutor aprueba sucesivamente las etapas 1, 2, 3...
- **Entonces:** El progreso se calcula como `(etapasAprobadas / 6) * 100`, reflejando exactamente 0%, 17%, 33%, 50%, 67%, 83%, 100%.
