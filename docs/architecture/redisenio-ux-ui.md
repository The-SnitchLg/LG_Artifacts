# INFORME DE REDISEÑO UX/UI — PLATAFORMA DE SEGUIMIENTO ACADÉMICO LG_ARTIFACTS
**Versión 2.0: Arquitectura "Academic Flow" — Espacios de Trabajo Especializados por Rol**

---

## 1. Resumen Ejecutivo de la Intervención

En cumplimiento estricto del principio rector **"Evolucionar, nunca reconstruir"**, se consolidó el rediseño integral de la plataforma de seguimiento académico bajo la propuesta aprobada **Academic Flow 2.0**.

Esta arquitectura combina lo mejor de tres paradigmas de diseño de clase mundial:
1. **Framer (Artesanía Visual y Tipografía Editorial):** Paleta cálida basada en papel de archivo pergamino (`#FBF9F5`), acentos en marrón editorial (`#6E432F`), terracota sobrio (`#8E4928`), bordes sutiles de libro (`#E8E1D5`) y tipografía con variantes Georgia/serif (`font-editorial`) y números tabulares (`tabular-nums`).
2. **Kira Learning (Orientación Pedagógica Activa):** Navegación guiada orientada a objetivos claros con tarjetas de acción destacadas (*"Tu Siguiente Paso"*) que eliminan la incertidumbre del estudiante e indican al tutor qué entrega requiere atención prioritaria.
3. **Gumloop (Espacio de Trabajo Ergonómico y Paneles Contextuales):** Estructura de barra lateral persistente (`RoleSidebar`), cabecera de control minimalista (`TopbarCompact`) y panel lateral deslizable adaptable (`AdaptiveContextPanel`) para consultar especificaciones, bitácoras y dictámenes sin tapar la evidencia central.

---

## 2. Cumplimiento de Reglas Académicas y Restricciones de Negocio

Todas las reglas de negocio del MVP se mantienen 100% íntegras y verificadas:
1. **Exactamente 6 Etapas Académicas Obligatorias:**
   * Etapa 1: *Propuesta / Protocolo (Gate 0)*
   * Etapa 2: *Marco Teórico*
   * Etapa 3: *Metodología*
   * Etapa 4: *Recolección de Información*
   * Etapa 5: *Análisis y Resultados*
   * Etapa 6: *Documento Final y Sustentación*
2. **Cálculo Riguroso de Progreso:** Fórmula estricta `(etapasAprobadas / 6) * 100` con normalización matemática (0%, 17%, 33%, 50%, 67%, 83%, 100%).
3. **Protocolo Gate 0 (14 Criterios Obligatorios):** Verificación independiente requerida para la aprobación de la Etapa 1. Conforme a la regla institucional, **14/14 criterios nunca aprueban automáticamente** la etapa; la aprobación es siempre un acto explícito, documentado y motivado por el tutor.
4. **Guía Metodológica Fase 0 (17 Actividades):** Registro interactivo no vinculante a la compuerta Gate 0.
5. **Aislamiento del Dominio:** Se preservó intacto el código de `src/domain/` (`stageRules.js`, `progressCalculator.js`, `gate0Validator.js`, `csvExporter.js`) y `src/data/` (`pilotData.js`, `gate0Catalog.js`, `phase0Catalog.js`).
6. **Política de Lenguaje Estricta:** 100% de la interfaz de usuario, navegación, etiquetas, botones, diálogos, estados vacíos, tooltips y reportes en **Español (es)** profesional.

---

## 3. Arquitectura del Espacio de Trabajo Academic Flow 2.0

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ RoleSidebar (236px) │ TopbarCompact (61px) — Breadcrumb, Rol, Demo Chip, Info, CSV    │
│                     ├──────────────────────────────────────────────────────────────────┤
│ • Emblema LG        │ LIENZO DE TRABAJO ESPECIALIZADO SEGÚN ROL                        │
│ • Espacio por rol   │                                                                  │
│   - Estudiante      │ • Estudiante: StudentWorkspace                                   │
│   - Tutor           │   - Ficha de proyecto y track de 6 etapas (rail en móvil)       │
│   - Administrador   │   - Tarjeta "Tu Siguiente Paso" (Kira Learning)                  │
│ • Ayuda Contextual  │   - Evidencia actual + Próximo compromiso + Última observación   │
│ • Perfil Simulado   │                                                                  │
│                     │ • Tutor: TutorWorkspace (Bandeja Maestro-Detalle)                │
│                     │   - Columna izquierda: Cola de entregas con buscador             │
│                     │   - Columna derecha: Pestañas Evidencia, Criterios (Gate 0 14), │
│                     │     Observaciones, Historial + Barra fija de dictamen            │
│                     │                                                                  │
│                     │ • Administrador: AdminWorkspace                                  │
│                     │   - Franja métrica (15 proyectos, 3 tutores, % avance promedio)  │
│                     │   - Filtros por etapa activa y nivel de riesgo                   │
│                     │   - Tabla responsiva de la cohorte con acceso a ficha            │
├─────────────────────┴──────────────────────────────────────────────────────────────────┤
│ AdaptiveContextPanel (Cajón Lateral Deslizable de 448px)                               │
│ Acceso instantáneo a: Ficha Dublin Core, Criterios Gate 0, Guía Fase 0, Evidencias,    │
│ Bitácora y formularios de dictamen formal (Observar / Aprobar etapa con foco atrapado) │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Componentes Clave Creados e Integrados

| Componente | Archivo | Responsabilidad |
| :--- | :--- | :--- |
| **`RoleSidebar`** | `src/components/layout/RoleSidebar.jsx` | Barra lateral de navegación fija (desktop) y cajón off-canvas con backdrop táctil (móvil) con conteo de pendientes de revisión y perfil de rol. |
| **`TopbarCompact`** | `src/components/layout/TopbarCompact.jsx` | Cabecera minimalista con menú hamburguesa, breadcrumb dinámico, chip de demostración responsivo, botón de ficha académica, exportación CSV y selector de rol. |
| **`AdaptiveContextPanel`** | `src/components/layout/AdaptiveContextPanel.jsx` | Panel contextual deslizable tipo drawer con trampa de foco y tecla Escape, gestionando Gate 0 (14 ítems), Fase 0 (17 pasos), bitácora y dictámenes. |
| **`StudentWorkspace`** | `src/features/student/StudentWorkspace.jsx` | Espacio de trabajo centrado en el estudiante: track interactivo de 6 etapas, tarjeta de siguiente paso, última observación, evidencia actual y compromisos. |
| **`TutorWorkspace`** | `src/features/tutor/TutorWorkspace.jsx` | Bandeja maestro-detalle para tutores con búsqueda instantánea, visor de evidencia, checklist de 14 criterios de Gate 0 y acciones de aprobación u observación. |
| **`AdminWorkspace`** | `src/features/admin/AdminWorkspace.jsx` | Panel de supervisión de cohorte con franja de indicadores clave, filtros dinámicos por etapa y riesgo, y tabla responsiva (card en móvil/tableta, grid en desktop). |
| **`StatusBadge`** | `src/components/StatusBadge.jsx` | Pastillas semánticas de estado con contraste validado WCAG 2.2 AA (Verde `#146C4F` en `#EDF7F2`, Ámbar `#8A4B08` en `#FFFBEB`, Rojo `#B42318` en `#FEF2F2`, Pizarra `#475569` en `#F1EFEA`). |

---

## 5. Resultados de Verificación y Pruebas Multi-Dispositivo

La suite automatizada de Playwright (`verify-app.mjs`) y el pipeline de calidad confirmaron el 100% de cumplimiento:

| Dimensión | Herramienta | Resultado | Detalle |
| :--- | :--- | :--- | :--- |
| **Linter Estático** | Oxlint (`npx oxlint src`) | **0 Errores, 0 Warnings** | 30 archivos analizados con reglas de pureza de React Compiler. |
| **Pruebas de Dominio** | Vitest (`npm test`) | **4/4 Suites (100% OK)** | Avance sobre 6 etapas, máquina de estados, Gate 0 y sanitización CSV con UTF-8 BOM. |
| **Compilación Vite** | Vite (`npm run build`) | **Exitoso (693 ms)** | Bundle optimizado en `dist/` sin advertencias de dependencias. |
| **Escritorio (1440x900)** | Playwright E2E | **Exitoso (Sin overflow)** | Capturas generadas: `desktop_tutor_1440.png`, `desktop_student_1440.png`, `desktop_admin_1440.png`. |
| **Tableta Paisaje (1024x768)** | Playwright E2E | **Exitoso (Sin overflow)** | `tablet_1024.png` con layout proporcional y navegación compacta. |
| **Tableta Retrato (768x1024)** | Playwright E2E | **Exitoso (Sin overflow)** | `tablet_768.png` con adaptación de tabla a tarjetas y sin desbordamiento. |
| **Móvil (390x844)** | Playwright E2E | **Exitoso (Sin overflow)** | `mobile_390.png` y `mobile_390_nav_open.png` con menú táctil y banner de etapa. |
| **Consola del Navegador** | Listener de consola | **0 Errores** | Cero errores de JavaScript o advertencias en tiempo de ejecución. |
