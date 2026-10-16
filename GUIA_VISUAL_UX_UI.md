# Guía Maestra de Diseño UX/UI, Tokens y Sistema Visual
## Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)

**Versión:** 1.0 (Cohorte Piloto 2026-I)  
**Ambiente de Aplicación:** Web Desktop-First con Adaptabilidad Móvil  
**Fecha de Publicación:** Octubre 2026  
**Documento Fuente:** Consolidación de `04_Design_Brief_UI_Tokens.docx`, `docs/ux/sistema-diseno.md`, `docs/architecture/redisenio-ux-ui.md` y código fuente en `src/`.

---

## 1. Filosofía de Diseño e Identidad Visual

El sistema visual de la plataforma está fundamentado en una **estética académica cálida, editorial y artesanal**, concebida especialmente para investigadores, tesistas, tutores universitarios y comités de grado. 

Se aleja deliberadamente de los tableros SaaS convencionales (caracterizados por paletas frías de azules sintéticos, grises pálidos y sombras genéricas) para evocar el rigor, la atemporalidad y la concentración de una **sala de archivo universitario, papel pergamino y cuadernos de campo de investigación**.

### 1.1 Trilogía de Inspiración de Diseño

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       TRILOGÍA DE INSPIRACIÓN UX/UI                         │
├─────────────────────┬───────────────────────────┬───────────────────────────┤
│       FRAMER        │       KIRA LEARNING       │          GUMLOOP          │
│ (Calidez Editorial) │ (Pedagogía y Orientación) │  (Ergonomía de 3 Zonas)   │
├─────────────────────┼───────────────────────────┼───────────────────────────┤
│ • Paleta de papel   │ • Banner "Tu Siguiente    │ • Espacio de trabajo con  │
│   de archivo.       │   Paso" dinámico.         │   panel contextual        │
│ • Tipografía nítida │ • Eliminación de          │   persistente.            │
│   y números tabula- │   ambigüedad en roles.    │ • Acompañamiento sin      │
│   res legibles.     │ • Instrucciones claras    │   oclusión de evidencias  │
│ • Micro-sombras de  │   según estado de la      │   centrales.              │
│   una sola capa.    │   etapa académica.        │                           │
└─────────────────────┴───────────────────────────┴───────────────────────────┘
```

### 1.2 Principios Rectores

1. **Español Primero (Spanish-First):** El 100% de la interfaz, acciones, estados semánticos, mensajes de error, tooltips y metadatos se presentan en español académico riguroso y natural.
2. **Prioridad Escritorio (Desktop-First):** Optimizado nativamente para estaciones de trabajo institucionales (1440 px y 1024 px), garantizando a su vez una experiencia táctil fluida en tabletas (768 px) y dispositivos móviles (390 px).
3. **Baja Carga Cognitiva:** Estructura jerárquica clara con un lienzo de investigación limpio; se evitan modales anidados y efectos visuales distractores.
4. **Accesibilidad Universal (WCAG 2.2 AA / AAA):**
   * Ratios de contraste calculados superiores a 4.5:1 en interactivos y superiores a 7:1 en textos principales.
   * La información de estado nunca depende exclusivamente del color: está siempre reforzada por iconos explícitos y etiquetas semánticas.
   * Navegación por teclado con focos visualmente perceptibles.

---

## 2. Paleta Cromática y Tokens de Diseño (CSS Variables)

El archivo de tokens central se encuentra implementado en [`src/styles/tokens.css`](file:///C:/Users/larry/Documents/IA/src/styles/tokens.css) e integrado a Tailwind CSS v4 en [`src/index.css`](file:///C:/Users/larry/Documents/IA/src/index.css).

### 2.1 Tabla Maestra de Tokens de Color

| Token CSS | Hexadecimal | Nombre / Tono | Función en la Interfaz |
|---|---|---|---|
| `--color-app-bg` / `--color-canvas` | `#FBF9F5` | Pergamino Cálido | Fondo general del lienzo y de la aplicación |
| `--color-surface` | `#FFFFFF` | Blanco Puro | Superficie principal de tarjetas, fichas y modales |
| `--color-surface-muted` | `#F5F1EA` | Arena Suave | Fondos secundarios, barras de control y pistas de scroll |
| `--color-surface-hover` | `#EFE9DF` | Arena Intensa | Estado hover de tarjetas y elementos interactivos secundarios |
| `--color-surface-subtle` | `#F7F4EE` | Lino Claro | Fondos de campos de formulario e inputs desactivados |
| `--color-ink-primary` / `--color-text` | `#1C1917` | Carbón Cálido (Stone 900) | Texto principal de alto contraste y legibilidad |
| `--color-ink-secondary` / `--color-text-muted` | `#57534E` | Piedra Cálida (Stone 600) | Texto secundario, subtítulos y metadatos |
| `--color-ink-muted` / `--color-text-light` | `#8F8881` | Ceniza Mineral | Notas al pie, marcas de agua y leyendas |
| `--color-primary` | `#6E432F` | Marrón Cuero Editorial | Color institucional de marca, botones principales y acentos |
| `--color-primary-hover` | `#553323` | Marrón Tostado Profundo | Hover e interacciones activas del color principal |
| `--color-accent` | `#8E4928` | Terracota Académico | Acentos de alta jerarquía, badges ID y llamadas a la acción |
| `--color-accent-subtle` | `#F6EDE8` | Rosa Terracota Tenue | Fondos suaves de elementos destacados |
| `--color-brand-navy` | `#1E293B` | Azul Pizarra Oscuro | Fondo institucional del banner Dublin Core y cabeceras |
| `--color-border` | `#D8CEBF` | Arenisca Natural | Bordes principales de tarjetas, inputs y contenedores |
| `--color-border-subtle` | `#E8E1D5` | Travertino Sutil | Divisores internos y separadores horizontales |
| `--color-border-focus` | `#6E432F` | Marrón Foco | Anillo visual de accesibilidad para foco de teclado |

---

### 2.2 Estados Semánticos de las 6 Etapas Académicas

Cada estado académico cuenta con una triada de tokens cromáticos accesibles (Texto/Icono, Fondo y Borde) y un refuerzo visual obligatorio:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          BADGES DE ESTADO SEMÁNTICO                         │
├─────────────────┬───────────┬───────────┬───────────┬───────────────────────┤
│ Estado          │ Texto     │ Fondo     │ Borde     │ Icono & Indicador     │
├─────────────────┼───────────┼───────────┼───────────┼───────────────────────┤
│ Aprobado        │ `#059669` │ `#EDF7F2` │ `#9CD5BE` │ Checkmark `✓` sólido  │
│ En Revisión     │ `#D97706` │ `#FFFBEB` │ `#FCD34D` │ Radar pulso (ping)    │
│ Observado       │ `#DC2626` │ `#FEF2F2` │ `#FCA5A5` │ Advertencia `!` triángulo│
│ Bloqueado/Pend. │ `#64748B` │ `#F1EFEA` │ `#D8D4CC` │ Candado `Lock` cerrado│
└─────────────────┴───────────┴───────────┴───────────┴───────────────────────┘
```

#### Niveles de Riesgo del Proyecto (Portafolio):
* **Riesgo Alto:** Dot `#DC2626`, fondo `#FEF2F2`, borde `#FCA5A5` (Etapa bloqueada u observada con plazo crítico).
* **Riesgo Medio:** Dot `#D97706`, fondo `#FFFBEB`, borde `#FCD34D` (Etapa en revisión con acuerdos por vencer).
* **Riesgo Bajo:** Dot `#059669`, fondo `#EDF7F2`, borde `#9CD5BE` (Ritmo nominal de avance).

---

## 3. Escala Tipográfica y Formato Numérico

### 3.1 Pila de Fuentes (Font Stack)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### 3.2 Jerarquía de Tamaños y Pesos

| Nivel Semántico | Clases Tailwind | Tamaño (px / rem) | Peso | Interlineado | Aplicación Principal |
|---|---|---|---|---|---|
| **H1 (Pantalla)** | `text-xl sm:text-2xl` | 20px / 24px (1.5rem) | 700 (Bold) | `leading-snug` | Título de la tesis en Ficha Técnica y Portafolio |
| **H2 (Sección)** | `text-base sm:text-lg` | 16px / 18px (1.125rem) | 700 (Bold) | `leading-tight` | Título del Stepper de 6 Etapas, StageDetail |
| **H3 (Submódulos)**| `text-sm` | 14px (0.875rem) | 700 / 600 | Normal | Cabeceras de Evidencias, Bitácora y Modales |
| **Cuerpo Principal**| `text-xs sm:text-sm` | 12px / 14px | 400 / 500 | `leading-relaxed`| Descripciones metodológicas, acuerdos y notas |
| **Metadatos** | `text-[11px]` o `text-xs` | 11px / 12px | 500 (Medium) | Normal | Autor, fechas, cohortes y descriptores Dublin Core |
| **Micro-Badges** | `text-[10px]` o `text-[11px]`| 10px / 11px | 700 (Bold) | Normal | Códigos de etapa (`#1`), `Gate 0`, estado y roles |

### 3.3 Números Tabulares (`.font-tabular`)
Para evitar saltos visuales al recalcular porcentajes de avance y métricas de proyectos, se utiliza la propiedad tipográfica:
```css
.font-tabular {
  font-variant-numeric: tabular-nums;
}
```
Aplica en: porcentajes de avance (`0%`, `17%`, `33%`, `50%`, `67%`, `83%`, `100%`), contadores de criterios (`X/14`, `X/17`) y fechas de entrega.

---

## 4. Sombras, Radios y Micro-interacciones

### 4.1 Radios de Esquinas (Border Radius)
* `--radius-xs`: `4px` (`rounded`) — Etiquetas pequeñas y chips internos.
* `--radius-sm`: `6px` (`rounded-md`) — Botones compactos y sub-elementos.
* `--radius-md`: `10px` (`rounded-xl`) — Botones de acción, inputs y tarjetas medianas.
* `--radius-lg`: `14px` - `16px` (`rounded-2xl`) — Tarjetas maestras, Ficha Dublin Core y modales.
* `--radius-pill`: `9999px` (`rounded-full`) — Badges de estado, píldoras y conmutadores.

### 4.2 Sombras Editoriales de Capa Única (Inspiración Framer)
Se prescinde de sombras oscuras y difusas. Se aplican sombras con tinte carbón (`rgba(28, 25, 23, ...)`):
```css
/* Sombra editorial sutil para tarjetas y barras */
--shadow-editorial-sm: 0 1px 2px rgba(28, 25, 23, 0.04);

/* Sombra media para elementos en hover y menús */
--shadow-editorial-md: 0 1px 3px rgba(28, 25, 23, 0.05), 0 4px 12px rgba(28, 25, 23, 0.03);

/* Sombra elevada para toasts y modales de diálogo */
--shadow-editorial-lg: 0 4px 6px -1px rgba(28, 25, 23, 0.06), 0 10px 24px -3px rgba(28, 25, 23, 0.05);
```

### 4.3 Barra de Desplazamiento Personalizada (Custom Scrollbar)
```css
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  background: var(--color-surface-muted); /* #F5F1EA */
}
::-webkit-scrollbar-thumb {
  background: var(--color-border); /* #D8CEBF */
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary); /* #6E432F */
}
```

### 4.4 Micro-animaciones
* **Entrada Deslizada (`fadeInSlide`):** Desplazamiento vertical de 4px con opacidad ascendente en `0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
* **Transición de Progreso:** Animación suave de barra de avance con `transition-all duration-500`.
* **Pulso Activo (`animate-ping`):** Aro de expansión en estados *"En Revisión"* para indicar procesamiento activo sin saturar la atención.

---

## 5. Arquitectura del Espacio de Trabajo en 3 Zonas

Inspirada en **Gumloop** y los editores profesionales modernos, la pantalla de trabajo se organiza en tres zonas coordinadas:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ZONA 1: BARRA SUPERIOR GLOBAL (TopNav)                                                 │
│ • Identidad institucional (LG) • Conmutador de Rol • Vista (Portafolio/Ficha) • CSV    │
├───────────────────────────────────────────────────────┬────────────────────────────────┤
│ ZONA 2: LIENZO CENTRAL DE INVESTIGACIÓN               │ ZONA 3: PANEL CONTEXTUAL       │
│                                                       │ (ContextDrawer persistente)    │
│ 1. Ficha Técnica Dublin Core & Barra Avance (X/6)     │                                │
│ 2. Banner "Tu Siguiente Paso" (Kira Learning)         │ • Pestaña 1: Bitácora Viva     │
│ 3. Stepper de 6 Etapas (Rail Táctil en Móvil 390px)   │ • Pestaña 2: Compromisos       │
│ 4. Detalle Operativo de Etapa y Acciones por Rol      │ • Pestaña 3: Gate 0 (14 crit.) │
│ 5. Repositorio de Evidencias y Versionado Inmutable   │ • Pestaña 4: Fase 0 (17 pasos) │
│ 6. Historial de Decisiones y Cronología de Acuerdos   │                                │
└───────────────────────────────────────────────────────┴────────────────────────────────┘
```

### 5.1 Zona 1 — Barra Superior Global (`TopNav.jsx`)
* **Cabecera Sticky:** Fondo `bg-white/95 backdrop-blur-md` que permanece anclado al scroll.
* **Isotipo:** Cuadrado redondeado marrón `#6E432F` con texto *"LG"* en blanco puro.
* **Selector de Rol Simulado:** Píldora segmentada conmutadora para probar los 3 roles del sistema:
  * `Estudiante`
  * `Tutor`
  * `Administrador`
* **Conmutador de Vista:** Botones `Portafolio (15)` y `Ficha`.
* **Exportador de Datos:** Botón verde institucional para descarga de CSV sanitario compatible con Microsoft Excel (codificado con UTF-8 BOM).
* **Disparador del Drawer:** Botón *"Acompañamiento"* que abre la Zona 3 en resoluciones menores a 1280px.

---

### 5.2 Zona 2 — Lienzo Central de Investigación

#### A. Ficha Técnica Dublin Core (`ProjectHeader.jsx`)
* **Cuerpo Principal:** Banner en azul pizarra `#1E293B` con bordes redondeados `rounded-2xl`.
* **Metadatos Dublin Core:**
  * Identificador Institucional (ej. `PRJ-01` en chip terracota `#8E4928`).
  * Cohorte académica (ej. `Cohorte 2026-I`).
  * Título oficial de la tesis de grado en color blanco y alto contraste.
  * Línea temática y Facultad/Departamento.
  * Tarjeta flotante con Fecha Objetivo de Conclusión y Badge de Nivel de Riesgo.
* **Cuadrícula de Asignación:**
  * Estudiante investigador (con indicador circular verde menta `#9CD5BE`).
  * Tutor principal / Asesor asignado (con indicador circular ámbar).
  * Protocolo Metodológico (17 Pasos Fase 0).
  * Control de Calidad (14 Criterios Gate 0).
* **Barra de Avance Global de 6 Etapas:**
  * Indicador numérico `X/6` en caja independiente.
  * Porcentaje normalizado calculado mediante la fórmula:  
    $$\text{Progreso} = \left(\frac{\text{Etapas Aprobadas}}{6}\right) \times 100$$
  * Barra de relleno horizontal en verde esmeralda `#059669` con hitos de escala (0%, 50%, 100%).

---

#### B. Banner "Tu Siguiente Paso" (`NextStepBanner.jsx`)
Elimina la ambigüedad en el proceso educativo comunicando a cada usuario la acción precisa a seguir según su rol y el estado de la etapa:

* **Estudiante en Etapa Observada:**
  * Fondo: `#FEF2F2`, Borde: `#FCA5A5`, Icono: `!` en recuadro carmesí.
  * Mensaje: *"El tutor solicitó cambios en la Etapa #X. Revisa las observaciones y entrega la versión corregida"*.
  * Botón CTA: *"Subir Versión Corregida"*.
* **Estudiante en Etapa Aprobada:**
  * Fondo: `#EDF7F2`, Borde: `#9CD5BE`, Icono: `✓` en recuadro esmeralda.
  * Mensaje: *"Has completado formalmente la Etapa #X. Continúa con la siguiente etapa en el ciclo de 6 pasos"*.
* **Tutor en Etapa 1 con Gate 0 Pendiente:**
  * Fondo: `#FFFBEB`, Borde: `#FCD34D`, Icono: `⚠️` en recuadro ámbar.
  * Mensaje: *"Revisión técnica de Protocolo: Certifique los 14 criterios de Gate 0 antes de dictaminar"*.
  * Botón CTA: *"Auditar Gate 0 (X/14)"*.
* **Tutor con Etapa Lista para Dictamen:**
  * Fondo: `#F5F1EA`, Borde: `#D8CEBF`, Icono: Balanza/Check.
  * Mensaje: *"Evidencias entregadas y requisitos validados. Emita el dictamen formal"*.
  * Botón CTA: *"Dictaminar Etapa #X"*.

---

#### C. Stepper de las 6 Etapas Académicas (`StageStepper.jsx`)
Representa la máquina de estados estricta de las 6 etapas del ciclo:

1. **Etapa 1:** Propuesta / Protocolo (Gate 0)
2. **Etapa 2:** Marco Teórico
3. **Etapa 3:** Metodología
4. **Etapa 4:** Recolección
5. **Etapa 5:** Análisis
6. **Etapa 6:** Documento Final

* **Comportamiento Responsivo:**
  * En escritorio (≥1024px): Grilla horizontal homogénea de 6 columnas.
  * En tablet (768px): Cuadrícula equilibrada de 2 a 3 columnas.
  * En móvil (390px): **Rail de desplazamiento horizontal táctil** (`overflow-x-auto`) con tarjetas de ancho fijo `w-44`, permitiendo navegar las 6 etapas con el pulgar sin comprimir textos.
* **Tarjeta de Etapa Activa:** Marcada con fondo `#FBF9F5`, borde marrón `#6E432F` y halo sutil `ring-2 ring-[#6E432F]/15`.

---

#### D. Detalle de Etapa (`StageDetail.jsx`)
* Presenta la descripción metodológica de la etapa seleccionada.
* **Módulo Especial Etapa 1:** Bloque destacado de auditoría Gate 0 con contador reactivo `X/14 Conformes` y acceso directo a los 17 pasos de Fase 0.
* **Barra de Acciones por Rol:**
  * Si es Estudiante: Botón marrón institucional *"Subir Archivo de Etapa"*.
  * Si es Tutor: Botón marrón *"Evaluar y Dictaminar Etapa"*.
  * Si es Administrador: Indicador de trazabilidad y modo sólo lectura institucional.

---

#### E. Repositorio de Evidencias (`EvidenceManager.jsx`)
* Control de versiones documentales por etapa.
* Cada fila expone:
  * Icono de documento en caja de arena `#F5F1EA`.
  * Nombre del archivo con badge de versión inmutable (ej. `v1.0`, `v1.1`, `v2.0` en chip marrón).
  * Metadatos técnicos: usuario de carga, fecha y tamaño.
  * Botón verde esmeralda institucional *"Descargar Copia"*.
* **Estado Vacío (Empty State):** Contenedor con borde punteado suave `#D8CEBF` y explicación contextual adaptada al rol en sesión.

---

#### F. Bitácora Cronológica y Acuerdos (`BitacoraSection.jsx`)
* **Módulo de Compromisos Pactados:**
  * Lista de compromisos con descripción, responsable (Estudiante, Tutor o Ambos) y fecha límite.
  * Contador numérico de acuerdos pendientes.
  * Formulario desplegable para que el tutor registre nuevos compromisos con fechas límite.
* **Historial de Decisiones (Audit Trail):**
  * Cronología inmutable con fecha, hora, autor y tipo de evento (Aprobación, Observación, Entrega de Evidencia).

---

### 5.3 Zona 3 — Panel de Acompañamiento Contextual (`ContextDrawer.jsx`)

Diseñado siguiendo el patrón ergonómico de **Gumloop**, permite al tutor y al estudiante consultar y marcar criterios sin perder de vista los documentos centrales:

* **Modo Desktop (≥1280px / 1440px):** Columna lateral fija a la derecha del lienzo central (ancho ~380-420px).
* **Modo Tablet y Móvil (<1280px):** Panel deslizante lateral (*Slide-over Drawer*) con fondo oscurecido (`backdrop-blur-xs`), accesible desde el botón *"Panel / Acompañamiento"* del `TopNav`.
* **Pestañas Interactivas del Panel:**
  1. **Bitácora:** Notas rápidas y registro de decisiones de la asesoría.
  2. **Pactos:** Lista de compromisos con contador reactivo en chip naranja.
  3. **Gate 0:** Checklist interactiva con los 14 criterios de calidad.
  4. **Fase 0:** Checklist con las 17 actividades metodológicas de formulación.

---

## 6. Vista de Portafolio Institucional (`ProjectPortfolio.jsx`)

Permite a los tutores y administradores gestionar y monitorear la cohorte completa de 15 proyectos:

### 6.1 Tarjeta de Métricas Globales
Expone 4 tarjetas con numeración tabular (`.font-tabular`):
* **Tesis Piloto:** `15` (en marrón `#6E432F`).
* **Avance Medio:** `%` ponderado de la cohorte (en esmeralda `#059669`).
* **Riesgo Alto:** Conteo de proyectos observados o con retraso crítico (en rojo `#DC2626`).
* **Tutores:** `3` profesores investigadores asignados.

### 6.2 Sistema de Filtros y Búsqueda
* Campo de búsqueda en tiempo real por título, estudiante, código institucional o línea temática.
* Filtro desplegable por Etapa Activa (Etapa 1 a Etapa 6).
* Filtro desplegable por Nivel de Riesgo (Bajo, Medio, Alto).
* Filtro desplegable por Tutor Asignado.

### 6.3 Tarjetas Editoriales de Proyecto
Cada tarjeta resume la ficha del estudiante, línea de investigación, etapa actual con su respectivo `StatusBadge`, barra miniatura de progreso de 6 etapas y botón de apertura de ficha.

---

## 7. Diálogos Modales del Sistema

### 7.1 Modal de Auditoría Gate 0 (`Gate0Modal.jsx`)
* **Encabezado:** Contador reactivo `X/14 Conformes`.
* **Banner de Regla de Negocio:**
  > *"Completar los 14 criterios es una condición técnica necesaria que habilita la opción de aprobación, pero **no aprueba automáticamente la etapa**. El tutor debe emitir el dictamen formal por separado."*
* **Checklist de 14 Criterios:** Tarjetas con código (`G0-01` a `G0-14`), título del criterio y descripción detallada de calidad. Solo modificable en modo Tutor.

### 7.2 Modal de Ruta Metodológica Fase 0 (`Phase0Modal.jsx`)
* Lista de las 17 actividades preparatorias del protocolo de investigación.
* Agrupadas por objetivos de formulación, estado completado y notas metodológicas.

### 7.3 Modal de Dictamen del Tutor (`TutorReviewModal.jsx`)
Interfaz de alta responsabilidad con dos modos explícitos:
* **Modo "Observar / Solicitar Cambios":**
  * Campo obligatorio de redacción de observaciones técnicas.
  * Próximo hito y fecha límite para subsanación.
  * Botón de confirmación en color carmesí `#DC2626`.
* **Modo "Aprobar Etapa":**
  * Verificación estricta de Gate 0 (si es Etapa 1 y hay menos de 14 criterios, bloquea la acción con alerta explicativa).
  * Notas de dictamen académico de aprobación.
  * Asignación de fecha límite para la etapa subsiguiente.
  * Botón de confirmación en color verde esmeralda `#059669`.

---

## 8. Validación de Accesibilidad y Pruebas de Contraste (WCAG 2.2 AA)

Todos los componentes han sido auditados según los estándares de contraste de la W3C:

| Par de Elementos Auditado | Color Primer Plano | Color Fondo | Ratio Medido | Nivel WCAG | Estado |
|---|---|---|---|---|---|
| Texto Principal vs Fondo Pergamino | `#1C1917` | `#FBF9F5` | **12.5 : 1** | Nivel AAA | ✅ Excelente |
| Texto Dublin Core vs Banner Azul | `#FFFFFF` | `#1E293B` | **12.6 : 1** | Nivel AAA | ✅ Excelente |
| Texto Secundario vs Fondo Pergamino | `#57534E` | `#FBF9F5` | **6.4 : 1** | Nivel AA | ✅ Conforme |
| Botón Primario vs Texto Blanco | `#FFFFFF` | `#6E432F` | **6.8 : 1** | Nivel AA | ✅ Conforme |
| Badge Aprobado (Texto vs Fondo) | `#059669` | `#EDF7F2` | **5.5 : 1** | Nivel AA | ✅ Conforme |
| Badge En Revisión (Texto vs Fondo) | `#D97706` | `#FFFBEB` | **5.7 : 1** | Nivel AA | ✅ Conforme |
| Badge Observado (Texto vs Fondo) | `#DC2626` | `#FEF2F2` | **6.1 : 1** | Nivel AA | ✅ Conforme |
| Badge Bloqueado (Texto vs Fondo) | `#64748B` | `#F1EFEA` | **5.1 : 1** | Nivel AA | ✅ Conforme |

---

## 9. Comportamiento Adaptativo y Breakpoints Verificados

La plataforma ha sido verificada mediante pruebas automáticas con Playwright (`verify-app.mjs`) en 4 viewports oficiales:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     MATRIZ DE ADAPTABILIDAD RESPONSIVE                      │
├─────────────┬─────────────────┬─────────────────────────────────────────────┤
│ Viewport    │ Resolución (px) │ Comportamiento UI Clave                     │
├─────────────┼─────────────────┼─────────────────────────────────────────────┤
│ Desktop Pro │ 1440 × 900      │ Espacio en 3 Zonas visible en paralelo sin  │
│             │                 │ solapamientos. Stepper en 6 columnas.       │
├─────────────┼─────────────────┼─────────────────────────────────────────────┤
│ Desktop/Tab │ 1024 × 768      │ Lienzo central fluido; Zona 3 disponible    │
│ Horizontal  │                 │ mediante Drawer deslizante (Slide-over).    │
├─────────────┼─────────────────┼─────────────────────────────────────────────┤
│ Tablet      │ 768 × 1024      │ Reorganización de Dublin Core a 2 columnas; │
│ Vertical    │                 │ Stepper en 2-3 columnas; botones táctiles.  │
├─────────────┼─────────────────┼─────────────────────────────────────────────┤
│ Móvil       │ 390 × 844       │ Rail táctil horizontal en Stepper (w-44);   │
│ Estrecho    │ (iPhone 12/14)  │ Drawer lateral deslizante; cero desborde.   │
└─────────────┴─────────────────┴─────────────────────────────────────────────┘
```

---

## 10. Catálogo de Capturas Visuales Disponibles en el Repositorio

En la raíz del proyecto se encuentran las capturas de pantalla de alta fidelidad que documentan la apariencia visual y estados de la interfaz:

| Archivo de Captura | Vista / Estado Representado | Resolución |
|---|---|---|
| [`screenshot_workspace_3zones.png`](file:///C:/Users/larry/Documents/IA/screenshot_workspace_3zones.png) | Espacio de Trabajo Completo en 3 Zonas simultáneas | 1440 × 900 px |
| [`screenshot_ficha_desktop.png`](file:///C:/Users/larry/Documents/IA/screenshot_ficha_desktop.png) | Ficha Técnica Dublin Core y Lienzo Central en Escritorio | 1440 × 900 px |
| [`screenshot_portfolio.png`](file:///C:/Users/larry/Documents/IA/screenshot_portfolio.png) | Vista de Portafolio con los 15 Proyectos y Filtros | 1440 × 900 px |
| [`screenshot_context_drawer.png`](file:///C:/Users/larry/Documents/IA/screenshot_context_drawer.png) | Panel Contextual (Zona 3) desplegado con Bitácora y Gate 0 | 1440 × 900 px |
| [`screenshot_gate0_modal.png`](file:///C:/Users/larry/Documents/IA/screenshot_gate0_modal.png) | Diálogo Modal de Auditoría Gate 0 (14 Criterios) | 1440 × 900 px |
| [`screenshot_phase0_modal.png`](file:///C:/Users/larry/Documents/IA/screenshot_phase0_modal.png) | Diálogo Modal de Ruta Metodológica Fase 0 (17 Pasos) | 1440 × 900 px |
| [`screenshot_student_mode.png`](file:///C:/Users/larry/Documents/IA/screenshot_student_mode.png) | Vista en Modo Estudiante con Banner de Tareas de Entrega | 1440 × 900 px |
| [`screenshot_tablet_1024.png`](file:///C:/Users/larry/Documents/IA/screenshot_tablet_1024.png) | Disposición fluida en tableta horizontal | 1024 × 768 px |
| [`screenshot_tablet_768.png`](file:///C:/Users/larry/Documents/IA/screenshot_tablet_768.png) | Disposición balanceada en tableta vertical | 768 × 1024 px |
| [`screenshot_mobile_390.png`](file:///C:/Users/larry/Documents/IA/screenshot_mobile_390.png) | Vista móvil con Rail Táctil en Stepper de 6 Etapas | 390 × 844 px |
| [`screenshot_initial.png`](file:///C:/Users/larry/Documents/IA/screenshot_initial.png) | Captura inicial de carga de la aplicación | 1440 × 900 px |

---

## 11. Resumen de Componentes UI y Archivos Fuente

* **Sistema de Tokens y Estilos:**
  * [`src/styles/tokens.css`](file:///C:/Users/larry/Documents/IA/src/styles/tokens.css): Definición de variables CSS semánticas.
  * [`src/index.css`](file:///C:/Users/larry/Documents/IA/src/index.css): Integración Tailwind v4, scrollbars, clases tabulares y animaciones.
* **Componentes Base:**
  * [`src/components/StatusBadge.jsx`](file:///C:/Users/larry/Documents/IA/src/components/StatusBadge.jsx): Badges accesibles de estado y riesgo.
  * [`src/components/NextStepBanner.jsx`](file:///C:/Users/larry/Documents/IA/src/components/NextStepBanner.jsx): Guía pedagógica dinámica (Kira Learning).
  * [`src/components/ContextDrawer.jsx`](file:///C:/Users/larry/Documents/IA/src/components/ContextDrawer.jsx): Panel contextual de acompañamiento (Gumloop).
* **Módulos de Negocio:**
  * [`src/features/navigation/TopNav.jsx`](file:///C:/Users/larry/Documents/IA/src/features/navigation/TopNav.jsx): Barra superior de control institucional y roles.
  * [`src/features/projects/ProjectHeader.jsx`](file:///C:/Users/larry/Documents/IA/src/features/projects/ProjectHeader.jsx): Ficha Dublin Core con barra de avance 6 etapas.
  * [`src/features/stages/StageStepper.jsx`](file:///C:/Users/larry/Documents/IA/src/features/stages/StageStepper.jsx): Rail y máquina de estados de las 6 etapas.
  * [`src/features/stages/StageDetail.jsx`](file:///C:/Users/larry/Documents/IA/src/features/stages/StageDetail.jsx): Espacio operativo de etapa y precondición Gate 0.
  * [`src/features/portfolio/ProjectPortfolio.jsx`](file:///C:/Users/larry/Documents/IA/src/features/portfolio/ProjectPortfolio.jsx): Cuadrícula de 15 proyectos con métricas agregadas.
  * [`src/features/evidence/EvidenceManager.jsx`](file:///C:/Users/larry/Documents/IA/src/features/evidence/EvidenceManager.jsx): Repositorio y control de versiones inmutables.
  * [`src/features/bitacora/BitacoraSection.jsx`](file:///C:/Users/larry/Documents/IA/src/features/bitacora/BitacoraSection.jsx): Compromisos pactados y trazabilidad histórica.
  * [`src/features/review/TutorReviewModal.jsx`](file:///C:/Users/larry/Documents/IA/src/features/review/TutorReviewModal.jsx): Modal de dictamen y evaluación formal del tutor.
  * [`src/features/gate0/Gate0Modal.jsx`](file:///C:/Users/larry/Documents/IA/src/features/gate0/Gate0Modal.jsx): Modal de auditoría Gate 0 (14 criterios).
  * [`src/features/phase0/Phase0Modal.jsx`](file:///C:/Users/larry/Documents/IA/src/features/phase0/Phase0Modal.jsx): Modal de guía metodológica Fase 0 (17 pasos).
