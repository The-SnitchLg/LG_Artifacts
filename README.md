# Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)

Plataforma web académica para el seguimiento, supervisión y trazabilidad de trabajos de grado y tesis universitarias, basada en un ciclo riguroso de **6 etapas académicas**, la guía metodológica **Fase 0 (17 actividades)** y el protocolo de aseguramiento de calidad **Gate 0 (14 criterios)**.

Diseñada con un estándar visual cálido, intuitivo y accesible (WCAG 2.2 AA) optimizado para entornos de escritorio institucional y dispositivos móviles.

---

## 1. Alcance del Piloto Institucional (Cohorte 2026-I)

* **Capacidad:** 15 estudiantes investigadores, 15 proyectos de tesis y 3 tutores principales, más coordinación administrativa.
* **Roles del Sistema:**
  * **Estudiante:** Consulta de avance, documentación guiada de Fase 0, entrega de evidencias versionadas, subsanación de observaciones y revisión de compromisos.
  * **Tutor:** Supervisión de proyectos asignados, certificación de criterios Gate 0, emisión de observaciones técnicas con motivo obligatorio y dictamen formal de aprobación de etapas.
  * **Administrador:** Vista global de la cohorte, monitoreo de métricas, distribución de carga de asesoría y exportación consolidada.
* **Ciclo de 6 Etapas Académicas:**
  1. *Propuesta / Protocolo (Gate 0)*
  2. *Marco Teórico*
  3. *Metodología*
  4. *Recolección*
  5. *Análisis*
  6. *Documento Final*
* **Cálculo de Progreso:** `Progreso = (etapasAprobadas / 6) * 100` (valores normalizados: 0%, 17%, 33%, 50%, 67%, 83%, 100%).
* **Regla Mandatoria de Gate 0:** La conformidad de los 14 criterios de Gate 0 es un prerrequisito para habilitar la opción de aprobación del tutor, pero **nunca aprueba automáticamente** la etapa. El dictamen es siempre un acto explícito y registrado del tutor.

---

## 2. Pila Tecnológica (Stack)

* **Frontend:** React 19.2.8, React DOM, Vite 8.3.4.
* **Estilos y Tokens:** Tailwind CSS 4.3.3 con `@tailwindcss/vite` y variables CSS institucionales (`tokens.css`).
* **Calidad de Código y Linter:** Oxlint 1.81.0 con soporte de hooks de React y estándares de pureza.
* **Pruebas End-to-End y Accesibilidad:** Playwright 1.64.0 para pruebas de interacción y validación visual.
* **Backend y Persistencia:** Supabase / PostgreSQL 15+ (migraciones versionadas, 12 tablas relacionales, triggers de auditoría y RLS restrictivo).
* **Despliegue Continuo:** GitHub Pages vía GitHub Actions (`.github/workflows/deploy.yml`) con base relativa (`base: './'`).

---

## 3. Instalación y Ejecución Local

### Prerrequisitos
* Node.js v20 o superior.
* npm v10 o superior.

### Comandos de Desarrollo
```bash
# 1. Clonar el repositorio
git clone https://github.com/The-SnitchLg/LG_Artifacts.git
cd LG_Artifacts

# 2. Instalar dependencias exactas
npm ci

# 3. Iniciar el servidor de desarrollo local
npm run dev

# 4. Ejecutar el análisis estático de código (linter)
npm run lint

# 5. Compilar para producción
npm run build

# 6. Vista previa de la compilación de producción
npm run preview
```

---

## 4. Estructura del Repositorio

```
├── .agent/                  # Reglas de desarrollo (ponytail, graphify) y workflows
├── .github/workflows/       # Canal de despliegue automatizado a GitHub Pages
├── .opencode/               # Especificaciones, roles, contexto y orquestación
├── docs/                    # Documentación formal de arquitectura, UX y base de datos
│   ├── architecture/        # Auditoría inicial y decisiones técnicas
│   ├── implementation/      # Plan de implementación por hitos
│   ├── ux/                  # Sistema de diseño, paleta cálida y accesibilidad WCAG
│   └── database/            # Modelo de datos relacional y políticas de seguridad
├── src/
│   ├── data/                # Datos semilla de los 15 proyectos y catálogos Fase 0 / Gate 0
│   ├── domain/              # Lógica pura: máquina de estados, progreso y exportador CSV
│   ├── features/            # Componentes modulares por funcionalidad (UI)
│   │   ├── bitacora/        # Bitácora cronológica y compromisos académicos
│   │   ├── evidence/        # Gestión y versionado de archivos
│   │   ├── gate0/           # Auditoría interactiva de los 14 criterios de Gate 0
│   │   ├── navigation/      # Barra superior, selector de rol y banner de advertencia
│   │   ├── phase0/          # Guía metodológica de 17 actividades de Fase 0
│   │   ├── portfolio/       # Portafolio de proyectos para tutor y administrador
│   │   ├── projects/        # Cabecera de proyecto con metadatos Dublin Core
│   │   ├── review/          # Modal de dictamen y observaciones del tutor
│   │   └── stages/          # Stepper de 6 etapas y panel de detalle
│   ├── styles/              # Tokens CSS institucionales
│   ├── App.jsx              # Orquestador principal de estado y vistas
│   ├── index.css            # Importaciones de Tailwind y estilos globales
│   └── main.jsx             # Punto de entrada de React
├── supabase/                # Migraciones SQL, seed data y documentación de base de datos
│   ├── migrations/          # 20261014000000_schema_inicial.sql (12 entidades y RLS)
│   └── seed.sql             # Datos iniciales para pruebas en PostgreSQL
├── verify-app.mjs           # Script de pruebas automatizadas con Playwright
└── vite.config.js           # Configuración de Vite con base relativa para despliegue
```

---

## 5. Fronteras de Seguridad y Privacidad

1. **Modo Demostración Aislado:** La versión pública desplegada en GitHub Pages opera de forma estática y aislada utilizando datos ficticios en memoria para garantizar que ninguna información confidencial de investigaciones reales quede expuesta en internet.
2. **Sin Conexión Pública Anónima:** No se permite que un cliente anónimo acceda directamente a bases de datos operativas de proyectos sin autenticación formal.
3. **Persistencia Privada Futura:** La persistencia operativa en Supabase está preparada con Row Level Security (RLS) estricto y Storage privado para cuando se habilite el módulo de autenticación con credenciales institucionales.
