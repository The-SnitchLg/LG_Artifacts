# Graph Report - IA  (2026-10-15)

## Corpus Check
- 68 files · ~104,342 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .css 2, (none) 1)

## Summary
- 352 nodes · 404 edges · 40 communities (32 shown, 8 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d7d724c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FichaProyecto.jsx
- package.json
- devDependencies
- .oxlintrc.json
- App.jsx
- .opencode/README.md
- domain.test.mjs
- Find Skills
- Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado
- 4. Componentes y Patrones UI
- 2. Desglose de Fases y Tareas Técnicas
- pilotData.js
- Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts
- Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)
- Rol: Arquitecto de Software y Base de Datos — LG_Artifacts
- Standard Workflow
- Standard Workflow
- Commands & Procedures
- Commands & Procedures
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- Test-Driven Development (TDD)
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- Test-Driven Development (TDD)
- Arquitectura de Seguridad, Privacidad y RLS — Supabase
- Agent Registry
- Arquitectura de Base de Datos — Supabase / PostgreSQL
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- Modelo de Datos Relacional — Supabase / PostgreSQL
- Índice de Documentación del Proyecto — LG_Artifacts
- Graphify Knowledge Graph Rule
- /graphify: Rebuild Knowledge Graph
- /review: Code Review & Quality Gate Workflow
- /spec: Spec-Driven Development Workflow
- /test: Test-Driven Development Workflow
- /review: Code Review & Quality Gate Workflow
- /spec: Spec-Driven Development Workflow
- /test: Test-Driven Development Workflow

## God Nodes (most connected - your core abstractions)
1. `App()` - 16 edges
2. `react` - 15 edges
3. `FichaProyecto()` - 12 edges
4. `Detalle de los Hitos:` - 8 edges
5. `Find Skills` - 7 edges
6. `How to Help Users Find Skills` - 7 edges
7. `Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts` - 7 edges
8. `Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado` - 7 edges
9. `scripts` - 6 edges
10. `Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)` - 6 edges

## Surprising Connections (you probably didn't know these)
- `4.2 Badges de Estado Semánticos` --references--> `CheckIcon()`  [INFERRED]
  docs/ux/sistema-diseno.md → src/FichaProyecto.jsx
- `4.2 Badges de Estado Semánticos` --references--> `LockIcon()`  [INFERRED]
  docs/ux/sistema-diseno.md → src/FichaProyecto.jsx
- `4.2 Badges de Estado Semánticos` --references--> `AlertTriangleIcon()`  [INFERRED]
  docs/ux/sistema-diseno.md → src/FichaProyecto.jsx
- `4.2 Badges de Estado Semánticos` --references--> `ClockIcon()`  [INFERRED]
  docs/ux/sistema-diseno.md → src/FichaProyecto.jsx
- `Detalle de los Hitos:` --references--> `DemoNoticeBanner()`  [INFERRED]
  docs/implementation/plan.md → src/features/navigation/DemoNoticeBanner.jsx

## Import Cycles
- None detected.

## Communities (40 total, 8 thin omitted)

### Community 0 - "FichaProyecto.jsx"
Cohesion: 0.22
Nodes (15): 4.2 Badges de Estado Semánticos, AlertTriangleIcon(), BookOpenIcon(), CalendarIcon(), CheckIcon(), ClockIcon(), CloseIcon(), DownloadIcon() (+7 more)

### Community 1 - "package.json"
Cohesion: 0.08
Nodes (23): dependencies, lucide-react, react, react-dom, name, private, scripts, build (+15 more)

### Community 2 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, oxlint, playwright, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite (+1 more)

### Community 3 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 4 - "App.jsx"
Cohesion: 0.14
Nodes (19): Detalle de los Hitos:, react, react-dom, App(), downloadCSV(), exportProjectToCSV(), sanitizeCSVValue(), validateGate0() (+11 more)

### Community 5 - ".opencode/README.md"
Cohesion: 0.06
Nodes (28): 1. Visión General del Dominio, 2. Entidades Principales y Modelo de Datos, 3. Reglas de Negocio Inmutables, 4. Flujos Clave de Usuario, Flujo 1: Revisión y Aprobación de Etapa 1 (Gate 0), Lógica de Negocio y Dominio Académico — LG_Artifacts, 1. Límites Técnicos y Dependencias Prohibidas, 2. Anti-Patrones de Arquitectura a Rechazar Activamente (+20 more)

### Community 6 - "domain.test.mjs"
Cohesion: 0.10
Nodes (19): calculateProgress(), calculateRiskLevel(), canTransition(), STAGE_DEFINITIONS, STAGE_STATUS, approveStage2Without1, gate0Full, gate0Partial (+11 more)

### Community 7 - "Find Skills"
Cohesion: 0.14
Nodes (13): Common Skill Categories, Find Skills, How to Help Users Find Skills, Step 1: Understand What They Need, Step 2: Check the Leaderboard First, Step 3: Search for Skills, Step 4: Verify Quality Before Recommending, Step 5: Present Options to the User (+5 more)

### Community 8 - "Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado"
Cohesion: 0.17
Nodes (11): 1.1 Incluido en el MVP, 1.2 Exclusiones Explícitas (Fuera de Alcance), 1. Alcance y Fronteras del MVP, 2.1 Código a Preservar, 2.2 Refactorizaciones Mandatorias, 2. Estrategia de Refactorización y Evolución, 3. Arquitectura Modular Propuesta, 4. Plan de Ejecución por Hitos (+3 more)

### Community 9 - "4. Componentes y Patrones UI"
Cohesion: 0.17
Nodes (11): 1. Filosofía de Diseño e Identidad Visual, 2. Tokens de Diseño (CSS Variables), 3. Escala Tipográfica y Jerarquía, 4.1 Stepper de las 6 Etapas Académicas, 4.3 Modal de Fase 0 (17 Actividades Metodológicas), 4.4 Panel de Auditoría Gate 0 (14 Criterios), 4.5 Portafolio de Proyectos (Vistas Tutor y Administrador), 4. Componentes y Patrones UI (+3 more)

### Community 10 - "2. Desglose de Fases y Tareas Técnicas"
Cohesion: 0.17
Nodes (11): 1. Resumen del Hito, 2. Desglose de Fases y Tareas Técnicas, 3. Escenarios de Aceptación Críticos, Escenario 1: Bloqueo de Aprobación por Gate 0 Incompleto, Escenario 2: Habilitación de Dictamen Manual (Sin Auto-Aprobación), Escenario 3: Progreso Exacto en Base 6, Especificación del Flujo de Trabajo Académico — LG_Artifacts, Fase 0: Auditoría y Línea Base (+3 more)

### Community 11 - "pilotData.js"
Cohesion: 0.22
Nodes (5): GATE0_CRITERIA, PHASE0_ACTIVITIES, ADMIN_USER, PILOT_PROJECTS, TUTORS

### Community 12 - "Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts"
Cohesion: 0.20
Nodes (9): 1. Resumen Ejecutivo de la Auditoría, 2.1 Configuración y Dependencias (`package.json`), 2.2 Estructura de Directorios Existente, 2. Inventario del Workspace y Stack Tecnológico, 3. Análisis de las Especificaciones y Fuentes de Verdad, 4. Hallazgos y Brechas Críticas Detectadas en el Código Existente, 5. Inspección de Habilidades (Skills) y Reglas, 6. Dictamen de Aprobación de Fase 0 (+1 more)

### Community 13 - "Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)"
Cohesion: 0.22
Nodes (8): 1. Alcance del Piloto Institucional (Cohorte 2026-I), 2. Pila Tecnológica (Stack), 3. Instalación y Ejecución Local, 4. Estructura del Repositorio, 5. Fronteras de Seguridad y Privacidad, Comandos de Desarrollo, Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts), Prerrequisitos

### Community 14 - "Rol: Arquitecto de Software y Base de Datos — LG_Artifacts"
Cohesion: 0.25
Nodes (7): 1. Propósito y Responsabilidades del Rol, 2. Pila Tecnológica Homologada, 3. Diagrama de Arquitectura de Capas, 4. Registro de Decisiones de Arquitectura (ADR), ADR-001: Reducción Estricta a 6 Etapas Académicas, ADR-002: Aislamiento del Modo Demostración sin Exposición de Credenciales, Rol: Arquitecto de Software y Base de Datos — LG_Artifacts

### Community 15 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 16 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 17 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 18 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 19 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 20 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 21 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 22 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 23 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 24 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 25 - "Arquitectura de Seguridad, Privacidad y RLS — Supabase"
Cohesion: 0.40
Nodes (4): 1. Fronteras Mandatorias de Seguridad del MVP, 2. Reglas de Integridad y Autorización en Base de Datos (R-01 a R-08), 3. Políticas de Row Level Security (RLS) Diseñadas para Fase Autenticada, Arquitectura de Seguridad, Privacidad y RLS — Supabase

### Community 26 - "Agent Registry"
Cohesion: 0.40
Nodes (4): 1. Registry Overview, 2. Active Agent Directory, 3. Sub-Agent Invocation Protocol, Agent Registry

### Community 27 - "Arquitectura de Base de Datos — Supabase / PostgreSQL"
Cohesion: 0.40
Nodes (4): 1. Estructura de Directorios, 2. Aplicación de Migraciones Locales con Supabase CLI, 3. Políticas de Seguridad y Aislamiento (RLS), Arquitectura de Base de Datos — Supabase / PostgreSQL

### Community 28 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 29 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 30 - "Modelo de Datos Relacional — Supabase / PostgreSQL"
Cohesion: 0.50
Nodes (3): 1. Diagrama de Entidad-Relación (Mermaid), 2. Catálogo de las 12 Entidades Relacionales, Modelo de Datos Relacional — Supabase / PostgreSQL

### Community 31 - "Índice de Documentación del Proyecto — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Documentos Disponibles, 2. Mapa de Trazabilidad con las Especificaciones Originales, Índice de Documentación del Proyecto — LG_Artifacts

## Knowledge Gaps
- **5 isolated node(s):** `lucide-react`, `@types/react`, `@types/react-dom`, `oxlint`, `tailwindcss`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 214 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `FichaProyecto.jsx`, `package.json`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `Detalle de los Hitos:` (e.g. with `DemoNoticeBanner()` and `TopNav()`) actually correct?**
  _`Detalle de los Hitos:` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `lucide-react`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07671957671957672 - nodes in this community are weakly interconnected._
- **Why does `Detalle de los Hitos:` connect `App.jsx` to `Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13781512605042018 - nodes in this community are weakly interconnected._
- **Why does `4.2 Badges de Estado Semánticos` connect `FichaProyecto.jsx` to `4. Componentes y Patrones UI`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._