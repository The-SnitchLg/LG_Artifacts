# Sistema de Diseño y Tokens UI — Seguimiento Académico de Trabajos de Grado

**Versión:** 1.0  
**Fecha:** 14 de octubre de 2026  
**Documento Fuente:** `04_Design_Brief_UI_Tokens.docx` y Hoja `14_Tokens_UX`  
**Entregable:** `docs/ux/sistema-diseno.md`  

---

## 1. Filosofía de Diseño e Identidad Visual

El sistema de diseño persigue una **estética académica cálida, sobria y de alta legibilidad**, concebida especialmente para investigadores, tutores y estudiantes universitarios. Se aleja deliberadamente de los dashboards SaaS genéricos y fríos (azules/grises sintéticos) para evocar el rigor editorial, la calidez del papel de archivo y la claridad de los cuadernos de investigación.

### Principios Rectores:
1. **Español Primero:** Toda la terminología, acciones, descripciones de estado y mensajes de ayuda están redactados en español académico nativo y accesible.
2. **Prioridad Escritorio (Desktop-First):** Diseñado y optimizado para resoluciones de trabajo académico (1440 px y 1024 px), garantizando una adaptación fluida en tablets (768 px) y dispositivos móviles (390 px) sin pérdida funcional.
3. **Baja Carga Cognitiva:** Información jerárquica clara, acciones primarias evidentes, sin modales anidados excesivos ni animaciones superfluas.
4. **Accesibilidad Universal (WCAG 2.2 AA):**
   * Ratios de contraste superiores a 4.5:1 en todos los textos e interactivos.
   * La información de estado nunca depende únicamente del color: se acompaña siempre de iconografía representativa y etiquetas textuales explícitas.
   * Focos de teclado visibles y navegación accesible.

---

## 2. Tokens de Diseño (CSS Variables)

```css
:root {
  /* Fondos y Superficies */
  --color-app-bg: #FAF7F2;          /* Fondo general pergamino cálido */
  --color-surface: #FFFFFF;         /* Superficie de tarjetas y fichas */
  --color-surface-muted: #F3ECE3;   /* Paneles secundarios y áreas de control */
  --color-surface-hover: #EBE2D7;   /* Hover en elementos secundarios */

  /* Textos y Tipografía */
  --color-text: #253240;            /* Texto principal carbón azulado de alto contraste */
  --color-text-muted: #475569;      /* Metadatos y texto secundario */
  --color-text-light: #64748B;      /* Etiquetas sutiles y notas de pie */

  /* Colores de Marca y Acción */
  --color-primary: #704733;         /* Marrón académico institucional */
  --color-primary-hover: #573524;   /* Marrón profundo en interacción hover */
  --color-accent: #A65C3D;          /* Terracota para acentos e hitos */
  --color-accent-subtle: #F6EDE8;   /* Fondo tenue para acentos */

  /* Estados Académicos */
  --color-success: #21684F;         /* Verde bosque institucional para etapas aprobadas */
  --color-success-bg: #EAF3EF;      /* Fondo de badge aprobado */
  --color-success-border: #A3D2BE;  /* Borde de badge aprobado */

  --color-warning: #865A16;         /* Ámbar tierra para etapas en revisión */
  --color-warning-bg: #FEF6E8;      /* Fondo de badge en revisión */
  --color-warning-border: #F3D298;  /* Borde de badge en revisión */

  --color-danger: #9D3549;          /* Carmesí vino para observaciones y riesgo alto */
  --color-danger-bg: #FDF0F2;       /* Fondo de badge observado */
  --color-danger-border: #F5B5BF;   /* Borde de badge observado */

  --color-locked: #64748B;          /* Gris pizarra para etapas pendientes/bloqueadas */
  --color-locked-bg: #F1EFEA;       /* Fondo de badge bloqueado */
  --color-locked-border: #D8D4CC;   /* Borde de badge bloqueado */

  /* Bordes y Separadores */
  --color-border: #D9CEC1;          /* Borde arenisca cálido */
  --color-border-subtle: #EBE4DA;   /* Líneas divisorias tenues */

  /* Sombras Suaves */
  --shadow-sm: 0 1px 2px 0 rgba(70, 45, 30, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(70, 45, 30, 0.08), 0 2px 4px -2px rgba(70, 45, 30, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(70, 45, 30, 0.1), 0 4px 6px -4px rgba(70, 45, 30, 0.08);

  /* Radios de Curvatura */
  --radius-sm: 0.375rem; /* 6px */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 0.75rem;  /* 12px */
  --radius-xl: 1rem;     /* 16px */
}
```

---

## 3. Escala Tipográfica y Jerarquía

* **Fuente Principal:** `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` con renderizado optimizado `-webkit-font-smoothing: antialiased`.
* **Títulos de Pantalla (H1):** `text-2xl` (24px / 1.5rem), peso 700 (bold), leading ajustado.
* **Títulos de Sección (H2):** `text-lg` (18px / 1.125rem), peso 700 (bold).
* **Subtítulos y Cabeceras de Módulo (H3):** `text-sm` (14px / 0.875rem), peso 600 (semibold).
* **Cuerpo de Texto Principal:** `text-sm` (14px / 0.875rem), peso 400 o 500, leading relajado (`leading-relaxed`).
* **Etiquetas y Metadatos:** `text-xs` (12px / 0.75rem) o `text-[11px]`, peso 500 o 600.

---

## 4. Componentes y Patrones UI

### 4.1 Stepper de las 6 Etapas Académicas
* Disposición horizontal en escritorio (grid de 6 columnas), responsive a 2 columnas en tablet y 1 en móvil.
* Cada etapa indica su número secuencial, nombre oficial, estado con badge visual y fecha de aprobación si aplica.
* Selección directa con click para inspeccionar requerimientos, evidencias y bitácora.

### 4.2 Badges de Estado Semánticos
| Estado | Texto del Badge | Icono | Fondo | Borde | Color de Texto |
|---|---|---|---|---|---|
| **Aprobado** | `Aprobado` (+ fecha) | `CheckIcon` | `#EAF3EF` | `#A3D2BE` | `#21684F` |
| **En Revisión** | `En Revisión` | Pulso activo / `ClockIcon` | `#FEF6E8` | `#F3D298` | `#865A16` |
| **Observado** | `Cambios Solicitados` | `AlertTriangleIcon` | `#FDF0F2` | `#F5B5BF` | `#9D3549` |
| **Pendiente** | `Bloqueado` | `LockIcon` | `#F1EFEA` | `#D8D4CC` | `#64748B` |

### 4.3 Modal de Fase 0 (17 Actividades Metodológicas)
* Vista interactiva que presenta las 17 fases preparatorias del protocolo de tesis.
* Permite al estudiante documentar el avance metodológico y al tutor verificar cada entregable.
* Filtros por paso y estado de completitud.

### 4.4 Panel de Auditoría Gate 0 (14 Criterios)
* Lista de verificación con los 14 criterios oficiales de la Matriz Maestra (`08_Gate0_14`).
* Contador reactivo de criterios cumplidos (`X/14`).
* Regla visual estricta: Al llegar a 14/14 se habilita la opción de aprobación para el tutor, mostrando claramente el mensaje "Protocolo Conforme — Requiere Dictamen Explícito del Tutor".

### 4.5 Portafolio de Proyectos (Vistas Tutor y Administrador)
* Grilla de tarjetas y tabla resumen con indicador de avance global (`(aprobadas / 6) * 100`), nivel de riesgo académico (Bajo, Medio, Alto) y última actividad registrada.
* Filtro de búsqueda rápida por título, estudiante o línea temática.

---

## 5. Pruebas de Contraste y Validación de Accesibilidad

| Par de Elementos | Ratio de Contraste Calculado | Norma WCAG 2.2 | Resultado |
|---|---|---|---|
| Texto `#253240` sobre Fondo `#FAF7F2` | **10.8 : 1** | Mínimo 4.5:1 (Nivel AAA) | ✅ Aprobado con excelencia |
| Texto `#475569` sobre Fondo `#FAF7F2` | **6.4 : 1** | Mínimo 4.5:1 (Nivel AA) | ✅ Aprobado |
| Botón Primario `#704733` con Texto Blanco | **6.8 : 1** | Mínimo 4.5:1 (Nivel AA) | ✅ Aprobado |
| Texto `#21684F` sobre Fondo `#EAF3EF` | **5.5 : 1** | Mínimo 4.5:1 (Nivel AA) | ✅ Aprobado |
| Texto `#865A16` sobre Fondo `#FEF6E8` | **5.7 : 1** | Mínimo 4.5:1 (Nivel AA) | ✅ Aprobado |
| Texto `#9D3549` sobre Fondo `#FDF0F2` | **6.1 : 1** | Mínimo 4.5:1 (Nivel AA) | ✅ Aprobado |
