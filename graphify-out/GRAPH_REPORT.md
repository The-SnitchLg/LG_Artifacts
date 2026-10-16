# Graph Report - IA  (2026-10-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1565 nodes · 2540 edges · 112 communities (80 shown, 32 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 127 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `722c2b3f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.jsx
- ShadcnInstaller
- scripts/core.py
- DesignSystemGenerator
- gray
- color
- button
- slide_search_core.py
- validate_data.py
- spacing
- package.json
- html-token-validator.py
- FichaProyecto.jsx
- logo/core.py
- generate-slide.py
- test_core_data_quality.py
- json
- TestTailwindConfigGenerator
- icon/generate.py
- pathlib
- design_system.py
- csv
- test_core.py
- test_tailwind_config_gen.py
- cip/generate.py
- fontSize
- extract-colors.cjs
- _palette_is_dark
- CatalogRefreshTest
- _check_font_catalog
- validate-asset.cjs
- cip/core.py
- Find Skills
- TailwindConfigGenerator
- generate_design_system
- TestWebStackFreshness
- logo/generate.py
- .test_node_check_parses_generated_config
- _select_palette_for_mode
- TestDomainDetection
- TestSearchDomains
- render-html.py
- validate-tokens.cjs
- _style_is_dark_primary
- test_text_layout_resilience.py
- Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado
- inject-brand-context.cjs
- embed-tokens.cjs
- primitive
- TestNativeDesktopStackFreshness
- TestThresholdGate
- sync-brand-to-tokens.cjs
- generate-tokens.cjs
- Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts
- BM25
- format_ascii_box
- test_design_system_mode.py
- TestStyleTaxonomy
- Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)
- cip/search.py
- argparse
- radius
- Rol: Arquitecto de Software y Base de Datos — LG_Artifacts
- Standard Workflow
- Standard Workflow
- Lógica de Negocio y Dominio Académico — LG_Artifacts
- 3. Escenarios de Aceptación Críticos
- Commands & Procedures
- shadow
- Commands & Procedures
- .opencode/README.md
- .oxlintrc.json
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- Test-Driven Development (TDD)
- Skills Management & Integration Policies
- Code Review & Quality Assurance
- lg
- Test-Driven Development (TDD)
- TestMetricMath
- Arquitectura de Seguridad, Privacidad y RLS — Supabase
- Agent Registry
- Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts
- Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts
- 2. Desglose de Fases y Tareas Técnicas
- Arquitectura de Base de Datos — Supabase / PostgreSQL
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- Ponytail: Anti-Overengineering Guidelines (Mode: full)
- xl
- md
- none
- Modelo de Datos Relacional — Supabase / PostgreSQL
- Índice de Documentación del Proyecto — LG_Artifacts
- .opencode: Agentic Vibe Coding Framework
- Rol: Ingeniero Full-Stack Frontend — LG_Artifacts
- Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts
- ref_fs
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
2. `TestTailwindConfigGenerator` - 35 edges
3. `DesignSystemGenerator` - 35 edges
4. `ShadcnInstaller` - 34 edges
5. `TestShadcnInstaller` - 26 edges
6. `App()` - 18 edges
7. `react` - 18 edges
8. `read_rows()` - 16 edges
9. `CatalogRefreshTest` - 15 edges
10. `TestReasoningContract` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Detalle de los Hitos:` --references--> `DemoNoticeBanner()`  [INFERRED]
  docs/implementation/plan.md → src/features/navigation/DemoNoticeBanner.jsx
- `Detalle de los Hitos:` --references--> `TopNav()`  [INFERRED]
  docs/implementation/plan.md → src/features/navigation/TopNav.jsx
- `Detalle de los Hitos:` --references--> `Phase0Modal()`  [INFERRED]
  docs/implementation/plan.md → src/features/phase0/Phase0Modal.jsx
- `Detalle de los Hitos:` --references--> `ProjectPortfolio()`  [INFERRED]
  docs/implementation/plan.md → src/features/portfolio/ProjectPortfolio.jsx
- `Detalle de los Hitos:` --references--> `ProjectHeader()`  [INFERRED]
  docs/implementation/plan.md → src/features/projects/ProjectHeader.jsx

## Import Cycles
- None detected.

## Communities (112 total, 32 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.06
Nodes (45): Detalle de los Hitos:, react, App(), ContextDrawer(), NextStepBanner(), StatusBadge(), GATE0_CRITERIA, PHASE0_ACTIVITIES (+37 more)

### Community 1 - "ShadcnInstaller"
Cohesion: 0.06
Nodes (3): main(), ShadcnInstaller, TestShadcnInstaller

### Community 2 - "scripts/core.py"
Cohesion: 0.06
Nodes (31): BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic(), _exact_row_identity(), _exact_stack_identifier(), _file_signature() (+23 more)

### Community 3 - "DesignSystemGenerator"
Cohesion: 0.06
Nodes (13): DesignSystemGenerator, _resolve_dial(), apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), _validate_action(), TestReasoningMatch, read_rows() (+5 more)

### Community 4 - "gray"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 5 - "color"
Cohesion: 0.04
Nodes (48): $type, $value, background, destructive, destructive-foreground, foreground, muted, muted-foreground (+40 more)

### Community 6 - "button"
Cohesion: 0.06
Nodes (45): $type, $value, $type, $value, bg, fg, font-size, hover-bg (+37 more)

### Community 7 - "slide_search_core.py"
Cohesion: 0.08
Nodes (17): format_context(), format_result(), main(), BM25, calculate_pattern_break(), detect_domain(), get_background_config(), get_color_for_emotion() (+9 more)

### Community 8 - "validate_data.py"
Cohesion: 0.12
Nodes (26): _check_app_interface_contract(), _check_chart_contract(), _check_color_contract(), _check_core_data_contract(), _check_file(), _check_icon_contract(), _check_landing_claims(), _check_motion_contract() (+18 more)

### Community 9 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 10 - "package.json"
Cohesion: 0.06
Nodes (32): dependencies, lucide-react, react, react-dom, devDependencies, oxlint, playwright, tailwindcss (+24 more)

### Community 11 - "html-token-validator.py"
Cohesion: 0.13
Nodes (12): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+4 more)

### Community 12 - "FichaProyecto.jsx"
Cohesion: 0.10
Nodes (26): 1. Filosofía de Diseño e Identidad Visual, 2. Tokens de Diseño (CSS Variables), 3. Escala Tipográfica y Jerarquía, 4.1 Stepper de las 6 Etapas Académicas, 4.2 Badges de Estado Semánticos, 4.3 Modal de Fase 0 (17 Actividades Metodológicas), 4.4 Panel de Auditoría Gate 0 (14 Criterios), 4.5 Portafolio de Proyectos (Vistas Tutor y Administrador) (+18 more)

### Community 13 - "logo/core.py"
Cohesion: 0.12
Nodes (6): BM25, detect_domain(), _load_csv(), search(), search_all(), _search_csv()

### Community 14 - "generate-slide.py"
Cohesion: 0.13
Nodes (11): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+3 more)

### Community 15 - "test_core_data_quality.py"
Cohesion: 0.16
Nodes (9): read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors, _check_typography_contract(), _configured_font_names(), _font_families() (+1 more)

### Community 16 - "json"
Cohesion: 0.16
Nodes (9): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+1 more)

### Community 18 - "icon/generate.py"
Cohesion: 0.18
Nodes (8): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main()

### Community 20 - "design_system.py"
Cohesion: 0.15
Nodes (7): _detect_page_type(), format_master_md(), format_page_override_md(), _generate_intelligent_overrides(), persist_design_system(), safe_slug(), _write_persisted_file()

### Community 22 - "test_core.py"
Cohesion: 0.11
Nodes (3): TestBm25CoreBehavior, TestDiagnosticsContracts, TestTokenizer

### Community 23 - "test_tailwind_config_gen.py"
Cohesion: 0.21
Nodes (4): test_sync_parses_bundled_starter_template(), _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation()

### Community 24 - "cip/generate.py"
Cohesion: 0.19
Nodes (7): build_cip_prompt(), check_logo_required(), generate_cip_set(), generate_with_nano_banana(), load_env(), load_logo_image(), main()

### Community 25 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 27 - "extract-colors.cjs"
Cohesion: 0.20
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 28 - "_palette_is_dark"
Cohesion: 0.18
Nodes (4): _palette_is_dark(), _relative_luminance(), TestEndToEndCoherence, TestLuminance

### Community 30 - "_check_font_catalog"
Cohesion: 0.21
Nodes (9): TestGeneratedCatalogContract, _catalog_date(), _check_catalog_contract(), _check_catalog_summary(), _check_font_catalog(), _check_phosphor_catalog(), _imported_weights(), _load_catalog_json() (+1 more)

### Community 31 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 32 - "cip/core.py"
Cohesion: 0.20
Nodes (6): detect_domain(), get_cip_brief(), _load_csv(), search(), search_all(), _search_csv()

### Community 33 - "Find Skills"
Cohesion: 0.14
Nodes (13): Common Skill Categories, Find Skills, How to Help Users Find Skills, Step 1: Understand What They Need, Step 2: Check the Leaderboard First, Step 3: Search for Skills, Step 4: Verify Quality Before Recommending, Step 5: Present Options to the User (+5 more)

### Community 35 - "generate_design_system"
Cohesion: 0.15
Nodes (4): format_markdown(), generate_design_system(), format_output(), TestPersistence

### Community 37 - "logo/generate.py"
Cohesion: 0.21
Nodes (5): enhance_prompt(), generate_batch(), generate_logo(), load_env(), main()

### Community 39 - "_select_palette_for_mode"
Cohesion: 0.22
Nodes (4): _contrast_ratio(), _derive_dark_palette(), _select_palette_for_mode(), TestPaletteSelection

### Community 42 - "render-html.py"
Cohesion: 0.23
Nodes (4): generate_html(), get_deliverable_info(), get_image_base64(), main()

### Community 43 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 44 - "_style_is_dark_primary"
Cohesion: 0.21
Nodes (4): _query_wants_dark(), _resolve_color_mode(), _style_is_dark_primary(), TestModeResolution

### Community 45 - "test_text_layout_resilience.py"
Cohesion: 0.18
Nodes (3): read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 46 - "Plan de Implementación del MVP — Seguimiento Académico de Trabajos de Grado"
Cohesion: 0.17
Nodes (11): 1.1 Incluido en el MVP, 1.2 Exclusiones Explícitas (Fuera de Alcance), 1. Alcance y Fronteras del MVP, 2.1 Código a Preservar, 2.2 Refactorizaciones Mandatorias, 2. Estrategia de Refactorización y Evolución, 3. Arquitectura Modular Propuesta, 4. Plan de Ejecución por Hitos (+3 more)

### Community 47 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 48 - "embed-tokens.cjs"
Cohesion: 0.18
Nodes (8): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle

### Community 49 - "primitive"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 52 - "sync-brand-to-tokens.cjs"
Cohesion: 0.29
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 53 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 56 - "Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts"
Cohesion: 0.20
Nodes (9): 1. Resumen Ejecutivo de la Auditoría, 2.1 Configuración y Dependencias (`package.json`), 2.2 Estructura de Directorios Existente, 2. Inventario del Workspace y Stack Tecnológico, 3. Análisis de las Especificaciones y Fuentes de Verdad, 4. Hallazgos y Brechas Críticas Detectadas en el Código Existente, 5. Inspección de Habilidades (Skills) y Reglas, 6. Dictamen de Aprobación de Fase 0 (+1 more)

### Community 58 - "format_ascii_box"
Cohesion: 0.22
Nodes (4): ansi_ljust(), format_ascii_box(), hex_to_ansi(), section_header()

### Community 61 - "Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)"
Cohesion: 0.22
Nodes (8): 1. Alcance del Piloto Institucional (Cohorte 2026-I), 2. Pila Tecnológica (Stack), 3. Instalación y Ejecución Local, 4. Estructura del Repositorio, 5. Fronteras de Seguridad y Privacidad, Comandos de Desarrollo, Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts), Prerrequisitos

### Community 62 - "cip/search.py"
Cohesion: 0.32
Nodes (3): format_brief(), format_results(), main()

### Community 64 - "radius"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 68 - "Rol: Arquitecto de Software y Base de Datos — LG_Artifacts"
Cohesion: 0.25
Nodes (7): 1. Propósito y Responsabilidades del Rol, 2. Pila Tecnológica Homologada, 3. Diagrama de Arquitectura de Capas, 4. Registro de Decisiones de Arquitectura (ADR), ADR-001: Reducción Estricta a 6 Etapas Académicas, ADR-002: Aislamiento del Modo Demostración sin Exposición de Credenciales, Rol: Arquitecto de Software y Base de Datos — LG_Artifacts

### Community 69 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 70 - "Standard Workflow"
Cohesion: 0.29
Nodes (6): Anti-Rationalization Guardrails, Spec-Driven Development (SDD), Standard Workflow, Step 1: Draft the Specification, Step 2: Review & Validate, Step 3: Implement to Spec

### Community 72 - "Lógica de Negocio y Dominio Académico — LG_Artifacts"
Cohesion: 0.29
Nodes (6): 1. Visión General del Dominio, 2. Entidades Principales y Modelo de Datos, 3. Reglas de Negocio Inmutables, 4. Flujos Clave de Usuario, Flujo 1: Revisión y Aprobación de Etapa 1 (Gate 0), Lógica de Negocio y Dominio Académico — LG_Artifacts

### Community 73 - "3. Escenarios de Aceptación Críticos"
Cohesion: 0.29
Nodes (6): 1. Resumen del Hito, 3. Escenarios de Aceptación Críticos, Escenario 1: Bloqueo de Aprobación por Gate 0 Incompleto, Escenario 2: Habilitación de Dictamen Manual (Sin Auto-Aprobación), Escenario 3: Progreso Exacto en Base 6, Especificación del Flujo de Trabajo Académico — LG_Artifacts

### Community 74 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 75 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 76 - "Commands & Procedures"
Cohesion: 0.33
Nodes (5): 1. Search for Skills Non-Interactively, 2. Install a Skill Non-Interactively, 3. Verification & Cataloging Procedure, Commands & Procedures, Find and Install Agent Skills

### Community 77 - ".opencode/README.md"
Cohesion: 0.33
Nodes (3): 1. Modelo de Orquestación, 2. Protocolo de Hand-off y Puertas de Verificación, Orquestación de Agentes y Flujo Operativo — LG_Artifacts

### Community 78 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 79 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 80 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 81 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 82 - "Skills Management & Integration Policies"
Cohesion: 0.40
Nodes (4): 1. Skill Discovery Before Custom Implementation, 2. Non-Interactive CLI Execution, 3. Skill Cataloging & Post-Install Auditing, Skills Management & Integration Policies

### Community 83 - "Code Review & Quality Assurance"
Cohesion: 0.40
Nodes (4): Code Review & Quality Assurance, Review Output Format, Standardized Severity Tags, The 5-Axis Review Framework

### Community 84 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 85 - "Test-Driven Development (TDD)"
Cohesion: 0.40
Nodes (4): Anti-Rationalization Guardrails, Core Engineering Principles, Test-Driven Development (TDD), The Red-Green-Refactor Cycle

### Community 87 - "Arquitectura de Seguridad, Privacidad y RLS — Supabase"
Cohesion: 0.40
Nodes (4): 1. Fronteras Mandatorias de Seguridad del MVP, 2. Reglas de Integridad y Autorización en Base de Datos (R-01 a R-08), 3. Políticas de Row Level Security (RLS) Diseñadas para Fase Autenticada, Arquitectura de Seguridad, Privacidad y RLS — Supabase

### Community 88 - "Agent Registry"
Cohesion: 0.40
Nodes (4): 1. Registry Overview, 2. Active Agent Directory, 3. Sub-Agent Invocation Protocol, Agent Registry

### Community 89 - "Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts"
Cohesion: 0.40
Nodes (5): 1. Límites Técnicos y Dependencias Prohibidas, 2. Anti-Patrones de Arquitectura a Rechazar Activamente, 3. Seguridad y Exportación CSV, 4. Elementos Explícitamente Fuera de Alcance (Out of Scope), Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts

### Community 90 - "Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts"
Cohesion: 0.40
Nodes (4): 1. Propósito y Responsabilidades del Rol, 2. Tokens de Diseño Institucionales, 3. Verificación de Accesibilidad WCAG 2.2 AA, Rol: Líder de Diseño UX/UI y Accesibilidad — LG_Artifacts

### Community 91 - "2. Desglose de Fases y Tareas Técnicas"
Cohesion: 0.40
Nodes (5): 2. Desglose de Fases y Tareas Técnicas, Fase 0: Auditoría y Línea Base, Fase 1 y 2: Planificación, Dominio y Diseño, Fase 3: Implementación de Frontend Modular, Fase 4: Arquitectura de Base de Datos Supabase

### Community 92 - "Arquitectura de Base de Datos — Supabase / PostgreSQL"
Cohesion: 0.40
Nodes (4): 1. Estructura de Directorios, 2. Aplicación de Migraciones Locales con Supabase CLI, 3. Políticas de Seguridad y Aislamiento (RLS), Arquitectura de Base de Datos — Supabase / PostgreSQL

### Community 93 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 94 - "Ponytail: Anti-Overengineering Guidelines (Mode: full)"
Cohesion: 0.50
Nodes (3): Lazy, Never Negligent, Ponytail: Anti-Overengineering Guidelines (Mode: full), The Anti-Overengineering Priority Ladder

### Community 95 - "xl"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 96 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 97 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 98 - "Modelo de Datos Relacional — Supabase / PostgreSQL"
Cohesion: 0.50
Nodes (3): 1. Diagrama de Entidad-Relación (Mermaid), 2. Catálogo de las 12 Entidades Relacionales, Modelo de Datos Relacional — Supabase / PostgreSQL

### Community 99 - "Índice de Documentación del Proyecto — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Documentos Disponibles, 2. Mapa de Trazabilidad con las Especificaciones Originales, Índice de Documentación del Proyecto — LG_Artifacts

### Community 100 - ".opencode: Agentic Vibe Coding Framework"
Cohesion: 0.50
Nodes (4): 1. Directory Structure, 2. Framework Navigation & Lifecycle, 3. Populating the Templates, .opencode: Agentic Vibe Coding Framework

### Community 101 - "Rol: Ingeniero Full-Stack Frontend — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Propósito y Responsabilidades del Rol, 2. Directrices de Implementación, Rol: Ingeniero Full-Stack Frontend — LG_Artifacts

### Community 102 - "Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts"
Cohesion: 0.50
Nodes (3): 1. Propósito y Responsabilidades del Rol, 2. Checklist de Puertas de Calidad (Quality Gates), Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts

## Knowledge Gaps
- **5 isolated node(s):** `lucide-react`, `oxlint`, `tailwindcss`, `@types/react`, `@types/react-dom`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 721 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TailwindConfigGenerator` connect `TailwindConfigGenerator` to `.write_config`, `.validate_config`, `.add_colors`, `.test_node_check_parses_generated_config`, `.add_plugins`, `TestTailwindConfigGenerator`, `pathlib`, `test_tailwind_config_gen.py`, `._base_config`, `.test_full_configuration_typescript`, `.generate_config_string`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `lucide-react`, `oxlint`, `tailwindcss` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05701592002961866 - nodes in this community are weakly interconnected._
- **Why does `ShadcnInstaller` connect `ShadcnInstaller` to `pathlib`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `DesignSystemGenerator` (e.g. with `TestReasoningMatch` and `TestReasoningContract`) actually correct?**
  _`DesignSystemGenerator` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ShadcnInstaller` be split into smaller, more focused modules?**
  _Cohesion score 0.055178652193577565 - nodes in this community are weakly interconnected._