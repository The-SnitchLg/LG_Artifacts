# Graph Report - IA  (2026-10-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1581 nodes · 2561 edges · 107 communities (77 shown, 30 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 129 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2a9a843b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- DesignSystemGenerator
- ShadcnInstaller
- scripts/core.py
- validate_data.py
- test_design_system_mode.py
- gray
- color
- cip/core.py
- button
- slide_search_core.py
- package.json
- spacing
- icon/generate.py
- html-token-validator.py
- design_system.py
- FichaProyecto.jsx
- json
- TestTailwindConfigGenerator
- App.jsx
- generate-slide.py
- pathlib
- react
- domain.test.mjs
- fetch-background.py
- cip/generate.py
- embed-tokens.cjs
- fontSize
- test_core.py
- test_data_contracts.py
- CatalogRefreshTest
- extract-colors.cjs
- validate-asset.cjs
- Find Skills
- TailwindConfigGenerator
- TestWebStackFreshness
- .test_node_check_parses_generated_config
- TestDomainDetection
- TestSearchDomains
- render-html.py
- sys
- validate-tokens.cjs
- test_text_layout_resilience.py
- Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado
- inject-brand-context.cjs
- primitive
- main
- TestNativeDesktopStackFreshness
- Detalle de los Hitos:
- pilotData.js
- sync-brand-to-tokens.cjs
- generate-tokens.cjs
- Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts
- Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)
- radius
- Rol: Arquitecto de Software y Base de Datos — LG_Artifacts
- Standard Workflow
- logo/search.py
- Standard Workflow
- TestThresholdGate
- Lógica de Negocio y Dominio Académico — LG_Artifacts
- 3. Escenarios de Aceptación Críticos
- Commands & Procedures
- shadow
- Commands & Procedures
- TestTokenizer
- .opencode/README.md
- .oxlintrc.json
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- Test-Driven Development (TDD)
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- lg
- Test-Driven Development (TDD)
- TestBm25CoreBehavior
- TestMetricMath
- Arquitectura de Seguridad, Privacidad y RLS — Supabase
- Agent Registry
- Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts
- Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts
- 2. Desglose de Fases y Tareas Técnicas
- ProjectHeader.jsx
- Arquitectura de Base de Datos — Supabase / PostgreSQL
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- xl
- md
- none
- TestFixtureValidation
- Modelo de Datos Relacional — Supabase / PostgreSQL
- Índice de Documentación del Proyecto — LG_Artifacts
- .opencode: Agentic Vibe Coding Framework
- Rol: Ingeniero Full-Stack Frontend — LG_Artifacts
- Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts
- Graphify Knowledge Graph Rule
- /graphify: Rebuild Knowledge Graph
- /review: Code Review & Quality Gate Workflow
- /spec: Spec-Driven Development Workflow
- /test: Test-Driven Development Workflow
- /review: Code Review & Quality Gate Workflow
- /spec: Spec-Driven Development Workflow
- /test: Test-Driven Development Workflow

## God Nodes (most connected - your core abstractions)
1. `TailwindConfigGenerator` - 58 edges
2. `DesignSystemGenerator` - 35 edges
3. `TestTailwindConfigGenerator` - 35 edges
4. `ShadcnInstaller` - 34 edges
5. `TestShadcnInstaller` - 26 edges
6. `react` - 24 edges
7. `read_rows()` - 16 edges
8. `TestReasoningContract` - 15 edges
9. `CatalogRefreshTest` - 15 edges
10. `search()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Detalle de los Hitos:` --references--> `ProjectPortfolio()`  [INFERRED]
  docs/implementation/plan.md → src/features/portfolio/ProjectPortfolio.jsx
- `Detalle de los Hitos:` --references--> `DemoNoticeBanner()`  [INFERRED]
  docs/implementation/plan.md → src/features/navigation/DemoNoticeBanner.jsx
- `Detalle de los Hitos:` --references--> `TopNav()`  [INFERRED]
  docs/implementation/plan.md → src/features/navigation/TopNav.jsx
- `Detalle de los Hitos:` --references--> `StageStepper()`  [INFERRED]
  docs/implementation/plan.md → src/features/stages/StageStepper.jsx
- `Detalle de los Hitos:` --references--> `ProjectHeader()`  [INFERRED]
  docs/implementation/plan.md → src/features/projects/ProjectHeader.jsx

## Import Cycles
- None detected.

## Communities (107 total, 30 thin omitted)

### Community 0 - "DesignSystemGenerator"
Cohesion: 0.05
Nodes (14): DesignSystemGenerator, _resolve_dial(), apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), _validate_action(), TestReasoningMatch, read_rows() (+6 more)

### Community 1 - "ShadcnInstaller"
Cohesion: 0.06
Nodes (3): main(), ShadcnInstaller, TestShadcnInstaller

### Community 2 - "scripts/core.py"
Cohesion: 0.06
Nodes (31): BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic(), _exact_row_identity(), _exact_stack_identifier(), _file_signature() (+23 more)

### Community 3 - "validate_data.py"
Cohesion: 0.07
Nodes (43): read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors, _catalog_date(), _check_app_interface_contract(), _check_catalog_contract() (+35 more)

### Community 4 - "test_design_system_mode.py"
Cohesion: 0.05
Nodes (15): _contrast_ratio(), _derive_dark_palette(), _filter_anti_patterns_for_mode(), _palette_is_dark(), _query_wants_dark(), _relative_luminance(), _resolve_color_mode(), _select_palette_for_mode() (+7 more)

### Community 5 - "gray"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 6 - "color"
Cohesion: 0.04
Nodes (48): $type, $value, background, destructive, destructive-foreground, foreground, muted, muted-foreground (+40 more)

### Community 7 - "cip/core.py"
Cohesion: 0.06
Nodes (13): BM25, detect_domain(), get_cip_brief(), _load_csv(), search(), search_all(), _search_csv(), BM25 (+5 more)

### Community 8 - "button"
Cohesion: 0.06
Nodes (45): $type, $value, $type, $value, bg, fg, font-size, hover-bg (+37 more)

### Community 9 - "slide_search_core.py"
Cohesion: 0.08
Nodes (17): format_context(), format_result(), main(), BM25, calculate_pattern_break(), detect_domain(), get_background_config(), get_color_for_emotion() (+9 more)

### Community 10 - "package.json"
Cohesion: 0.06
Nodes (33): dependencies, lucide-react, motion, react, react-dom, devDependencies, oxlint, playwright (+25 more)

### Community 11 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 12 - "icon/generate.py"
Cohesion: 0.10
Nodes (13): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+5 more)

### Community 13 - "html-token-validator.py"
Cohesion: 0.13
Nodes (12): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+4 more)

### Community 14 - "design_system.py"
Cohesion: 0.09
Nodes (11): ansi_ljust(), _detect_page_type(), format_ascii_box(), format_master_md(), format_page_override_md(), _generate_intelligent_overrides(), hex_to_ansi(), persist_design_system() (+3 more)

### Community 15 - "FichaProyecto.jsx"
Cohesion: 0.10
Nodes (26): 1. Filosofía de Diseño e Identidad Visual, 2. Tokens de Diseño (CSS Variables), 3. Escala Tipográfica y Jerarquía, 4.1 Stepper de las 6 Etapas Académicas, 4.2 Badges de Estado Semánticos, 4.3 Modal de Fase 0 (17 Actividades Metodológicas), 4.4 Panel de Auditoría Gate 0 (14 Criterios), 4.5 Portafolio de Proyectos (Vistas Tutor y Administrador) (+18 more)

### Community 16 - "json"
Cohesion: 0.13
Nodes (5): format_brief(), format_results(), main(), main(), format_output()

### Community 18 - "App.jsx"
Cohesion: 0.16
Nodes (12): App(), AdaptiveContextPanel(), RoleSidebar(), TopbarCompact(), downloadCSV(), exportProjectToCSV(), sanitizeCSVValue(), validateGate0() (+4 more)

### Community 19 - "generate-slide.py"
Cohesion: 0.13
Nodes (10): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+2 more)

### Community 20 - "pathlib"
Cohesion: 0.18
Nodes (4): test_sync_parses_bundled_starter_template(), _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation()

### Community 21 - "react"
Cohesion: 0.19
Nodes (5): lucide-react, react, StatusBadge(), ProjectPortfolio(), StageDetail()

### Community 22 - "domain.test.mjs"
Cohesion: 0.11
Nodes (17): canTransition(), STAGE_DEFINITIONS, STAGE_STATUS, approveStage2Without1, gate0Full, gate0Partial, observeWithoutNote, sampleCSV (+9 more)

### Community 23 - "fetch-background.py"
Cohesion: 0.16
Nodes (9): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+1 more)

### Community 24 - "cip/generate.py"
Cohesion: 0.19
Nodes (7): build_cip_prompt(), check_logo_required(), generate_cip_set(), generate_with_nano_banana(), load_env(), load_logo_image(), main()

### Community 25 - "embed-tokens.cjs"
Cohesion: 0.13
Nodes (9): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle (+1 more)

### Community 26 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 29 - "test_core.py"
Cohesion: 0.15
Nodes (4): format_markdown(), generate_design_system(), TestDiagnosticsContracts, TestPersistence

### Community 32 - "extract-colors.cjs"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 33 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 34 - "Find Skills"
Cohesion: 0.14
Nodes (13): Common Skill Categories, Find Skills, How to Help Users Find Skills, Step 1: Understand What They Need, Step 2: Check the Leaderboard First, Step 3: Search for Skills, Step 4: Verify Quality Before Recommending, Step 5: Present Options to the User (+5 more)

### Community 40 - "render-html.py"
Cohesion: 0.23
Nodes (4): generate_html(), get_deliverable_info(), get_image_base64(), main()

### Community 42 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 43 - "test_text_layout_resilience.py"
Cohesion: 0.18
Nodes (3): read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 44 - "Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado"
Cohesion: 0.17
Nodes (11): 1.1 Incluido en el MVP, 1.2 Exclusiones Explícitas (Fuera de Alcance), 1. Alcance y Fronteras del MVP, 2.1 Código a Preservar, 2.2 Refactorizaciones Mandatorias, 2. Estrategia de Refactorización y Evolución, 3. Arquitectura Modular Propuesta, 4. Plan de Ejecución por Hitos (+3 more)

### Community 45 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 46 - "primitive"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 49 - "Detalle de los Hitos:"
Cohesion: 0.18
Nodes (6): Detalle de los Hitos:, DemoNoticeBanner(), TopNav(), Phase0Modal(), TutorReviewModal(), StageStepper()

### Community 50 - "pilotData.js"
Cohesion: 0.22
Nodes (5): GATE0_CRITERIA, PHASE0_ACTIVITIES, ADMIN_USER, PILOT_PROJECTS, TUTORS

### Community 51 - "sync-brand-to-tokens.cjs"
Cohesion: 0.29
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 52 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 54 - "Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts"
Cohesion: 0.20
Nodes (9): 1. Resumen Ejecutivo de la Auditoría, 2.1 Configuración y Dependencias (`package.json`), 2.2 Estructura de Directorios Existente, 2. Inventario del Workspace y Stack Tecnológico, 3. Análisis de las Especificaciones y Fuentes de Verdad, 4. Hallazgos y Brechas Críticas Detectadas en el Código Existente, 5. Inspección de Habilidades (Skills) y Reglas, 6. Dictamen de Aprobación de Fase 0 (+1 more)

### Community 55 - "Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)"
Cohesion: 0.22
Nodes (8): 1. Alcance del Piloto Institucional (Cohorte 2026-I), 2. Pila Tecnológica (Stack), 3. Instalación y Ejecución Local, 4. Estructura del Repositorio, 5. Fronteras de Seguridad y Privacidad, Comandos de Desarrollo, Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts), Prerrequisitos

### Community 56 - "radius"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 57 - "Rol: Arquitecto de Software y Base de Datos — LG_Artifacts"
Cohesion: 0.25
Nodes (7): 1. Propósito y Responsabilidades del Rol, 2. Pila Tecnológica Homologada, 3. Diagrama de Arquitectura de Capas, 4. Registro de Decisiones de Arquitectura (ADR), ADR-001: Reducción Estricta a 6 Etapas Académicas, ADR-002: Aislamiento del Modo Demostración sin Exposición de Credenciales, Rol: Arquitecto de Software y Base de Datos — LG_Artifacts

### Community 58 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 60 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 63 - "Lógica de Negocio y Dominio Académico — LG_Artifacts"
Cohesion: 0.29
Nodes (6): 1. Visión General del Dominio, 2. Entidades Principales y Modelo de Datos, 3. Reglas de Negocio Inmutables, 4. Flujos Clave de Usuario, Flujo 1: Revisión y Aprobación de Etapa 1 (Gate 0), Lógica de Negocio y Dominio Académico — LG_Artifacts

### Community 64 - "3. Escenarios de Aceptación Críticos"
Cohesion: 0.29
Nodes (6): 1. Resumen del Hito, 3. Escenarios de Aceptación Críticos, Escenario 1: Bloqueo de Aprobación por Gate 0 Incompleto, Escenario 2: Habilitación de Dictamen Manual (Sin Auto-Aprobación), Escenario 3: Progreso Exacto en Base 6, Especificación del Flujo de Trabajo Académico — LG_Artifacts

### Community 65 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 66 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 67 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 70 - ".opencode/README.md"
Cohesion: 0.33
Nodes (3): 1. Modelo de Orquestación, 2. Protocolo de Hand-off y Puertas de Verificación, Orquestación de Agentes y Flujo Operativo — LG_Artifacts

### Community 71 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 72 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 73 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 74 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 75 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 76 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 77 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 78 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 81 - "Arquitectura de Seguridad, Privacidad y RLS — Supabase"
Cohesion: 0.40
Nodes (4): 1. Fronteras Mandatorias de Seguridad del MVP, 2. Reglas de Integridad y Autorización en Base de Datos (R-01 a R-08), 3. Políticas de Row Level Security (RLS) Diseñadas para Fase Autenticada, Arquitectura de Seguridad, Privacidad y RLS — Supabase

### Community 82 - "Agent Registry"
Cohesion: 0.40
Nodes (4): 1. Registry Overview, 2. Active Agent Directory, 3. Sub-Agent Invocation Protocol, Agent Registry

### Community 83 - "Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts"
Cohesion: 0.40
Nodes (5): 1. Límites Técnicos y Dependencias Prohibidas, 2. Anti-Patrones de Arquitectura a Rechazar Activamente, 3. Seguridad y Exportación CSV, 4. Elementos Explícitamente Fuera de Alcance (Out of Scope), Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts

### Community 84 - "Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts"
Cohesion: 0.40
Nodes (4): 1. Propósito y Responsabilidades del Rol, 2. Tokens de Diseño Institucionales, 3. Verificación de Accesibilidad WCAG 2.2 AA, Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts

### Community 85 - "2. Desglose de Fases y Tareas Técnicas"
Cohesion: 0.40
Nodes (5): 2. Desglose de Fases y Tareas Técnicas, Fase 0: Auditoría y Línea Base, Fase 1 y 2: Planificación, Dominio y Diseño, Fase 3: Implementación de Frontend Modular, Fase 4: Arquitectura de Base de Datos Supabase

### Community 86 - "ProjectHeader.jsx"
Cohesion: 0.60
Nodes (3): calculateProgress(), calculateRiskLevel(), ProjectHeader()

### Community 87 - "Arquitectura de Base de Datos — Supabase / PostgreSQL"
Cohesion: 0.40
Nodes (4): 1. Estructura de Directorios, 2. Aplicación de Migraciones Locales con Supabase CLI, 3. Políticas de Seguridad y Aislamiento (RLS), Arquitectura de Base de Datos — Supabase / PostgreSQL

### Community 88 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 89 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 90 - "xl"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 91 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 92 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 94 - "Modelo de Datos Relacional — Supabase / PostgreSQL"
Cohesion: 0.50
Nodes (3): 1. Diagrama de Entidad-Relación (Mermaid), 2. Catálogo de las 12 Entidades Relacionales, Modelo de Datos Relacional — Supabase / PostgreSQL

### Community 95 - "Índice de Documentación del Proyecto — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Documentos Disponibles, 2. Mapa de Trazabilidad con las Especificaciones Originales, Índice de Documentación del Proyecto — LG_Artifacts

### Community 96 - ".opencode: Agentic Vibe Coding Framework"
Cohesion: 0.50
Nodes (4): 1. Directory Structure, 2. Framework Navigation & Lifecycle, 3. Populating the Templates, .opencode: Agentic Vibe Coding Framework

### Community 97 - "Rol: Ingeniero Full-Stack Frontend — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Propósito y Responsabilidades del Rol, 2. Directrices de Implementación, Rol: Ingeniero Full-Stack Frontend — LG_Artifacts

### Community 98 - "Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Propósito y Responsabilidades del Rol, 2. Checklist de Puertas de Calidad (Quality Gates), Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts

## Knowledge Gaps
- **5 isolated node(s):** `motion`, `oxlint`, `tailwindcss`, `@types/react`, `@types/react-dom`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 728 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TailwindConfigGenerator` connect `TailwindConfigGenerator` to `.recommend_plugins`, `.test_node_check_parses_generated_config`, `main`, `json`, `TestTailwindConfigGenerator`, `pathlib`, `._base_config`, `.generate_config_string`, `.add_colors`, `.add_plugins`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `motion`, `oxlint`, `tailwindcss` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `DesignSystemGenerator` be split into smaller, more focused modules?**
  _Cohesion score 0.053555750658472345 - nodes in this community are weakly interconnected._
- **Why does `primitive` connect `primitive` to `shadow`, `gray`, `color`, `spacing`, `radius`, `fontSize`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `DesignSystemGenerator` (e.g. with `TestReasoningMatch` and `TestReasoningContract`) actually correct?**
  _`DesignSystemGenerator` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ShadcnInstaller` be split into smaller, more focused modules?**
  _Cohesion score 0.055178652193577565 - nodes in this community are weakly interconnected._