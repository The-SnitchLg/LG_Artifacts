# INFORME DE REDISEÑO UX/UI — PLATAFORMA DE SEGUIMIENTO ACADÉMICO LG_ARTIFACTS
**Fase 2: Ejecución, Arquitectura de 3 Zonas e Implementación Frontend**

---

## 1. Resumen Ejecutivo de la Intervención

En cumplimiento de la directriz **"Evolucionar, nunca reconstruir"**, se ejecutó la modernización visual y de experiencia de usuario de la plataforma de seguimiento académico, adoptando la **Alternativa B: Espacio de Trabajo en 3 Zonas**, que fusiona:
* **Calidez y Artesanía Editorial (Framer):** Paleta de papel de archivo (`#FBF9F5`), texto en carbón cálido (`#1C1917`), bordes orgánicos sutiles y micro-sombras de una sola capa.
* **Orientación Pedagógica Activa (Kira Learning):** Inclusión del componente `NextStepBanner` que comunica con claridad inmediata al estudiante y tutor la acción requerida.
* **Espacio de Trabajo en 3 Zonas (Gumloop):** Incorporación del `ContextDrawer` lateral como acompañamiento continuo (Bitácora, Compromisos, Gate 0 y Fase 0) sin ocluir el lienzo de trabajo central.

---

## 2. Cumplimiento de Restricciones y Reglas de Negocio

Todas las reglas de negocio del MVP se preservaron intactas:
1. **6 Etapas Académicas Obligatorias:**
   * Etapa 1: Propuesta / Protocolo
   * Etapa 2: Marco Teórico
   * Etapa 3: Metodología
   * Etapa 4: Recolección
   * Etapa 5: Análisis
   * Etapa 6: Documento Final
2. **Cálculo de Avance:** Fórmula estricta `(etapas aprobadas / 6) * 100`.
3. **Control Gate 0 (14 Criterios):** Validación independiente. Los 14 criterios conformes habilitan la aprobación técnica pero **no aprueban automáticamente la etapa**.
4. **Guía Metodológica Fase 0 (17 Pasos):** Registro y seguimiento interactivo.
5. **Aislamiento de Lógica:** Cero alteraciones en `src/domain/` ni en los esquemas de datos de `src/data/`.
6. **Política de Lenguaje:** 100% de la interfaz, botones, tooltips y mensajes en español nativo.

---

## 3. Arquitectura del Espacio de Trabajo en 3 Zonas

```
┌────────────────────────────────────────────────────────────────────────┐
│ TOPNAV: Marca + Selector de Rol Simulado + Vista + Exportar CSV        │
├─────────────────────────────────────────┬──────────────────────────────┤
│ ZONA 2: LIENZO CENTRAL DE INVESTIGACIÓN │ ZONA 3: PANEL CONTEXTUAL     │
│                                         │ (Acompañamiento Persistente) │
│ • Ficha Dublin Core y Avance Global     │                              │
│ • Banner "Tu Siguiente Paso" (Kira)     │ • Bitácora Viva              │
│ • Stepper de 6 Etapas (Rail móvil 390px)│ • Compromisos Pactados       │
│ • Detalle de Etapa y Acciones por Rol   │ • Criterios Gate 0 (14)      │
│ • Repositorio de Evidencias y Versiones │ • Actividades Fase 0 (17)    │
│ • Historial de Decisiones y Trazabilidad│                              │
└─────────────────────────────────────────┴──────────────────────────────┘
```

* **Escritorio Amplio (≥1280px / 1440px):** La Zona 2 y la Zona 3 se despliegan en paralelo. El tutor puede verificar los 14 criterios de Gate 0 en el panel derecho mientras lee las evidencias en el lienzo central.
* **Tabletas y Móviles (<1280px / 390px):** La Zona 3 se convierte en un *Slide-over Drawer* accesible mediante el botón *"Acompañamiento"* del `TopNav`, preservando el 100% de la pantalla para el contenido principal.

---

## 4. Inventario de Componentes Creados y Modificados

### Componentes Creados
* `src/components/StatusBadge.jsx`: Insignia de estado semántica accesible (WCAG 2.2 AA) para etapas y niveles de riesgo.
* `src/components/NextStepBanner.jsx`: Directriz visual de tareas personalizada para Estudiante, Tutor y Administrador.
* `src/components/ContextDrawer.jsx`: Panel lateral deslizable / embebido de 4 pestañas para la Zona 3.

### Componentes Modificados
* `src/styles/tokens.css` e `index.css`: Extensión de variables de color de papel de archivo, tipografía con números tabulares (`tabular-nums`) y sombras suaves.
* `src/features/navigation/TopNav.jsx`: Rediseño editorial descongestionado con disparador de panel contextual.
* `src/features/stages/StageStepper.jsx`: Rail horizontal táctil para móvil (390px) que elimina el quiebre de etiquetas.
* `src/features/projects/ProjectHeader.jsx`: Tarjeta Dublin Core de alta elegancia con barra de progreso de 6 etapas.
* `src/features/portfolio/ProjectPortfolio.jsx`: Cuadrícula de tarjetas de investigación con métricas agregadas y filtros visuales.
* `src/features/stages/StageDetail.jsx`: Área de trabajo con llamadas claras de acción.
* `src/features/evidence/EvidenceManager.jsx`: Lista limpia de versiones y descarga inmutable.
* `src/features/review/TutorReviewModal.jsx`: Diálogo con pestañas claras para "Observar" o "Aprobar".
* `src/features/bitacora/BitacoraSection.jsx`: Tabla de acuerdos y timeline de decisiones inmutables.
* `src/features/gate0/Gate0Modal.jsx` y `Phase0Modal.jsx`: Modales actualizados con diseño institucional.
* `src/App.jsx`: Orquestación del layout en 3 zonas con compatibilidad completa de estado.

---

## 5. Resultados de Verificación y Pruebas Multi-Dispositivo

| Prueba | Herramienta | Resultado | Observaciones |
| :--- | :--- | :--- | :--- |
| **Linting de Calidad** | Oxlint (`npx oxlint src`) | **0 Errores, 0 Warnings** | Código limpio y conforme a estándares. |
| **Pruebas de Dominio** | Vitest (`npm test`) | **4/4 Pasadas (100% OK)** | Avance `(aprobadas/6)*100`, máquina de estados, Gate 0 y sanitización CSV validadas. |
| **Compilación de Producción** | Vite (`npm run build`) | **Exitoso (486 ms)** | Bundle optimizado en `dist/` sin errores de assets. |
| **Pruebas E2E y Visuales** | Playwright (`verify-app.mjs`) | **Exitoso (100% OK)** | Cero errores de consola, 15 proyectos en portafolio, 14 criterios Gate 0, 17 pasos Fase 0. |
| **Resolución 1440px** | Playwright Viewport | **Exitoso** | Espacio en 3 zonas visible simultáneamente (`screenshot_workspace_3zones.png`). |
| **Resolución 1024px** | Playwright Viewport | **Exitoso** | Adaptación fluida con Drawer deslizable (`screenshot_tablet_1024.png`). |
| **Resolución 768px** | Playwright Viewport | **Exitoso** | Formato tableta vertical balanceado (`screenshot_tablet_768.png`). |
| **Resolución 390px** | Playwright Viewport | **Exitoso** | Rail horizontal táctil en stepper sin desbordamiento de pantalla (`screenshot_mobile_390.png`). |
