# Auditoría Inicial del Repositorio y Contexto Técnico — LG_Artifacts

**Fecha de ejecución:** 14 de octubre de 2026  
**Rama de trabajo:** `feat/seguimiento-academico-mvp`  
**Autor:** Antigravity Architect & Senior Engineering Team  
**Repositorio:** [The-SnitchLg/LG_Artifacts](https://github.com/The-SnitchLg/LG_Artifacts)  
**Entorno:** Node.js v20+, Vite 8.3.4, React 19.2.8, Tailwind CSS v4.3.3, Playwright v1.64.0  

---

## 1. Resumen Ejecutivo de la Auditoría

El proyecto base corresponde a un prototipo funcional de ficha de proyecto académico implementado en React + Vite + Tailwind CSS. El análisis de especificaciones contra el código fuente (`src/FichaProyecto.jsx`) evidencia una base de interfaz atractiva y operativa, pero con discrepancias críticas frente a las decisiones mandatorias del Product Owner, la Matriz Maestra 2026 y los documentos técnicos (PRD, TRD, App Flow, Design Brief, Backend Schema y Plan de Implementación).

El principio de trabajo adoptado es **EVOLUCIONAR, NO RECONSTRUIR**: preservar la estructura de componentes, acelerar mediante las utilidades existentes y refactorizar modularmente para subsanar los desvíos funcionales y técnicos.

---

## 2. Inventario del Workspace y Stack Tecnológico

### 2.1 Configuración y Dependencias (`package.json`)
* **React:** `19.2.8` y `react-dom: 19.2.8` (versión moderna).
* **Bundler & Dev Server:** `Vite 8.3.0` con `@vitejs/plugin-react: 6.1.1` y base relativa configurada (`base: './'`).
* **Estilos:** `tailwindcss: 4.3.3` con `@tailwindcss/vite: 4.3.3`. Importación vía `@import "tailwindcss";` en `src/index.css`.
* **Iconografía:** `lucide-react: 1.55.0` (además de SVGs en línea dentro del componente prototipo).
* **Linter & Calidad:** `oxlint: 1.81.0` con reglas para React y hooks en `.oxlintrc.json`.
* **Testing E2E / Visual:** `playwright: 1.64.0` con script de prueba `verify-app.mjs`.
* **Despliegue:** Flujo de GitHub Actions en `.github/workflows/deploy.yml` apuntando a GitHub Pages.

### 2.2 Estructura de Directorios Existente
```
C:\Users\larry\Documents\IA\
├── .agent/                  # Reglas (ponytail, graphify, skills) y workflows
├── .github/workflows/       # deploy.yml (GitHub Pages)
├── .opencode/               # Especificaciones, roles, contexto y orquestación
├── dist/                    # Build de producción previo (generado por Vite)
├── graphify-out/            # Grafo de conocimiento y dependencias (GRAPH_REPORT.md)
├── node_modules/            # Dependencias instaladas
├── public/                  # Favicon y assets estáticos
├── src/
│   ├── assets/              # hero.png, react.svg, vite.svg
│   ├── App.css
│   ├── App.jsx              # Punto de entrada de la UI
│   ├── FichaProyecto.jsx    # Componente monolítico existente (48 KB, 983 líneas)
│   ├── index.css            # Importación Tailwind y estilos globales de body
│   └── main.jsx             # Montaje de React DOM
├── index.html               # Plantilla HTML raíz
├── package.json
├── package-lock.json
├── verify-app.mjs           # Script de verificación visual con Playwright
└── vite.config.js           # Configuración de Vite con base relativa
```

---

## 3. Análisis de las Especificaciones y Fuentes de Verdad

Se analizaron integralmente los 7 documentos maestros ubicados en `C:\Users\larry\Documents\T1`:

1. **`Matriz_Maestra_Actualizada_Seguimiento_Academico_2026.xlsx`** (26 hojas: alcance, requisitos, roles, 6 etapas, 17 actividades Fase 0, 14 criterios Gate 0, modelo Supabase, reglas de negocio, tokens UX y QA).
2. **`01_PRD_Seguimiento_Academico.docx`**: Requisitos del producto para piloto de 15 estudiantes, 15 proyectos y 3 tutores.
3. **`02_TRD_Arquitectura_Seguimiento.docx`**: Arquitectura React + Vite + Tailwind, separación de modo DEMO y OPERATIVO, seguridad por diseño.
4. **`03_Flujos_UX_User_Journey.docx`**: Flujos para Estudiante, Tutor y Administrador; transiciones y excepciones.
5. **`04_Design_Brief_UI_Tokens.docx`**: Paleta cálida institucional, tipografía, accesibilidad WCAG 2.2 AA y escritorio prioritario.
6. **`05_Backend_Data_Schema_Supabase.docx`**: 12 entidades relacionales, reglas de integridad R-01 a R-08, Storage privado y RLS estricto.
7. **`06_Plan_Implementacion_Antigravity.docx`**: Plan de ejecución vertical por fases, criterios de calidad y verificación continua.

---

## 4. Hallazgos y Brechas Críticas Detectadas en el Código Existente

| Elemento / Regla | Estado en Prototipo Existente | Requisito Oficial Mandatorio | Brecha / Acción Requerida |
|---|---|---|---|
| **Número de Etapas** | 7 etapas (incluía "Sustentación") | **Exactamente 6 etapas** académicas (Sustentación está fuera de alcance) | Eliminar etapa 7. El denominador de progreso debe ser 6. |
| **Cálculo de Progreso** | `(approvedStages / 7) * 100` | **`Progress = (approvedStages / 6) * 100`** | Actualizar fórmula en dominio y UI: 0%, 17%, 33%, 50%, 67%, 83%, 100%. |
| **Idioma de la Interfaz** | Mezcla de inglés y español ("View: Student", "Export to Excel", "Target Defense Date") | **100% Español nativo académico** en toda la interfaz y exportaciones | Traducir y homogeneizar todos los textos, etiquetas y descripciones a español. |
| **Fase 0 Preparatoria** | Ausente en el flujo interactivo | **17 actividades consecutivas** de preparación metodológica | Crear componente y modelo para las 17 actividades guiadas de Fase 0. |
| **Gate 0 Protocolo** | 14 criterios redactados en inglés | **14 criterios oficiales en español** vinculados a Fase 0 | Actualizar a los 14 criterios canónicos de la Matriz Maestra (`08_Gate0_14`). |
| **Aprobación de Gate 0** | El prototipo asumía auto-aprobación con 14/14 | **14/14 habilita decisión del tutor, nunca auto-aprueba** | Desacoplar cumplimiento de criterios de la acción de dictamen del tutor. |
| **Roles de Usuario** | 2 roles simulados (`tutor`, `student`) | **3 roles:** Estudiante, Tutor y Administrador de Plataforma | Incorporar rol Administrador y vistas diferenciadas para cada rol. |
| **Capacidad del Piloto** | 1 solo proyecto harcodeado | **15 estudiantes, 15 proyectos y 3 tutores** (Cohorte 2026-I) | Crear fixture estructurado de 15 proyectos con buscador/filtro y portafolios. |
| **Tokens Visuales** | Colores fríos Tailwind estándar (`bg-slate-50`, `bg-indigo-600`) | **Tokens cálidos institucionales** (`#FAF7F2`, `#704733`, `#F3ECE3`, `#253240`) | Implementar variables CSS de tokens de diseño del Design Brief. |
| **Exportación CSV** | Texto sin neutralización de fórmulas | **UTF-8 BOM y mitigación de inyección CSV** (`=`, `+`, `-`, `@`) | Sanitizar celdas en el generador de CSV para prevenir ejecución de macros. |
| **Backend Supabase** | Inexistente en el repositorio | **Migraciones SQL versionadas, RLS estricto y seed reproducible** | Crear carpeta `supabase/` con migraciones DDL, seed data y documentación. |
| **Modularidad** | 1 archivo monolítico de 983 líneas (`FichaProyecto.jsx`) | Arquitectura modular en `src/domain/`, `src/features/`, `src/data/` | Modularizar manteniendo componentes reutilizables sin sobreingeniería. |

---

## 5. Inspección de Habilidades (Skills) y Reglas

Se identificaron en `.agent/`:
* **`ponytail`:** Principio de simplicidad, evitar sobreingeniería y no crear abstracciones prematuras.
* **`graphify`:** Mapeo de dependencias de código y grafo de conocimiento.
* **`spec-driven-development`:** Desarrollo guiado por especificaciones y contratos formales.
* **`test-driven-development`:** Pruebas unitarias de dominio previas a la integración.
* **`code-review-and-quality`:** Criterios de revisión de código y aseguramiento de calidad.

Todas estas habilidades se incorporan como marco de trabajo disciplinario.

---

## 6. Dictamen de Aprobación de Fase 0

* ✅ Contexto de documentación analizado al 100%.
* ✅ Contradicciones y brechas catalogadas.
* ✅ Rama de trabajo aislada creada (`feat/seguimiento-academico-mvp`).
* ✅ Build y linter iniciales validados exitosamente.
* ➡️ Se autoriza el avance a la **Fase 1: Plan de Implementación y Alcance del MVP**.
