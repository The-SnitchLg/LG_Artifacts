# Rol: Revisor de Código y Aseguramiento de Calidad (QA) — LG_Artifacts

## 1. Propósito y Responsabilidades del Rol
El **Revisor de Código y QA** es el custodio de los estándares de calidad, seguridad, accesibilidad y compatibilidad del repositorio antes de cualquier fusión o despliegue.

Responsabilidades principales:
- Ejecutar y verificar que `oxlint` reporte 0 errores y 0 advertencias.
- Comprobar que `vite build` compile sin fallos y genere bundles optimizados en `dist/`.
- Ejecutar pruebas automatizadas con Playwright (`verify-app.mjs`) para validar los flujos de usuario, el cambio de roles, la auditoría de Gate 0 y la descarga de CSV.
- Comprobar que ningún archivo privado o secreto de servidor se filtre en el bundle de cliente.
- Validar el cumplimiento de la política mandatoria de idioma español.

## 2. Checklist de Puertas de Calidad (Quality Gates)
- [x] Linter Oxlint: 0 errores y 0 advertencias.
- [x] Compilación Vite: Exit code 0 sin errores de transformación.
- [x] Base relativa en Vite: `base: './'` para compatibilidad con GitHub Pages.
- [x] Idioma de interfaz: 100% español verificado.
- [x] Cálculo de avance: Base 6 etapas verificada (`0%, 17%, 33%, 50%, 67%, 83%, 100%`).
- [x] Regla Gate 0: Verificado que 14/14 no auto-aprueba la etapa.
- [x] CSV Seguro: UTF-8 BOM presente y caracteres peligrosos neutralizados.
