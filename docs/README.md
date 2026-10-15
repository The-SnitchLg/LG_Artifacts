# Índice de Documentación del Proyecto — LG_Artifacts

Bienvenido a la documentación técnica y funcional de la Plataforma de Seguimiento Académico de Trabajos de Grado.

Todos los documentos reflejan las especificaciones de la **Matriz Maestra 2026** y los documentos técnicos rectores.

---

## 1. Documentos Disponibles

* [Auditoría Inicial de Arquitectura](file:///C:/Users/larry/Documents/IA/docs/architecture/auditoria-inicial.md)
  * Diagnóstico del repositorio base, inventario de dependencias y discrepancias identificadas.
* [Plan de Implementación del MVP](file:///C:/Users/larry/Documents/IA/docs/implementation/plan.md)
  * Fronteras del MVP, refactorizaciones, hitos de desarrollo y matriz de criterios de aceptación (QA).
* [Sistema de Diseño y Tokens UI](file:///C:/Users/larry/Documents/IA/docs/ux/sistema-diseno.md)
  * Paleta de colores cálida institucional, jerarquía tipográfica, componentes y pruebas de contraste WCAG 2.2 AA.
* [Modelo de Datos Relacional](file:///C:/Users/larry/Documents/IA/docs/database/modelo-datos.md)
  * Diagrama de entidad-relación (Mermaid), catálogo de las 12 entidades y restricciones de integridad.
* [Arquitectura de Seguridad y Privacidad](file:///C:/Users/larry/Documents/IA/docs/database/seguridad.md)
  * Reglas de integridad R-01 a R-08, políticas de Row Level Security (RLS) y aislamiento del entorno de demostración.
* [Guía de Base de Datos Supabase](file:///C:/Users/larry/Documents/IA/supabase/README.md)
  * Instrucciones para ejecutar migraciones locales y probar la base de datos con Supabase CLI.

---

## 2. Mapa de Trazabilidad con las Especificaciones Originales

| Documento del Repositorio | Documento Fuente Original (`C:\Users\larry\Documents\T1`) |
|---|---|
| `docs/architecture/auditoria-inicial.md` | `02_TRD_Arquitectura_Seguimiento.docx` & Hoja `21_Auditoria_Repo` |
| `docs/implementation/plan.md` | `01_PRD_Seguimiento_Academico.docx` & `06_Plan_Implementacion_Antigravity.docx` |
| `docs/ux/sistema-diseno.md` | `04_Design_Brief_UI_Tokens.docx` & Hoja `14_Tokens_UX` |
| `docs/database/modelo-datos.md` | `05_Backend_Data_Schema_Supabase.docx` & Hoja `12_Modelo_Supabase` |
| `docs/database/seguridad.md` | `05_Backend_Data_Schema_Supabase.docx` & Hoja `13_Reglas_BD` |
| `src/data/phase0Catalog.js` | Hoja `07_Fase0_17` & `Plantilla_Fase_0_Tesis.xlsx` |
| `src/data/gate0Catalog.js` | Hoja `08_Gate0_14` & `Plantilla_Fase_0_Tesis.xlsx` |
