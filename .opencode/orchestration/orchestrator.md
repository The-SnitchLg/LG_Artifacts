# Orquestación de Agentes y Flujo Operativo — LG_Artifacts

## 1. Modelo de Orquestación
El desarrollo autónomo en Antigravity sigue un flujo secuencial disciplinado basado en especificaciones formales, aseguramiento continuo y verificación antes de entrega.

```mermaid
flowchart TD
    AUDIT["0. Auditoría y Preflight (Architect)"] --> PLAN["1. Plan de Implementación (Architect)"]
    PLAN --> DESIGN["2. Tokens y Sistema de Diseño (Designer)"]
    DESIGN --> DEV["3. Implementación Frontend y Dominio (Developer)"]
    DEV --> DB["4. Migraciones y Seguridad Supabase (DB Architect)"]
    DB --> QA["5. Pruebas Unitarias, Lint y E2E (Reviewer)"]
    QA --> DOC["6. Documentación y Sincronización OpenCode"]
    DOC --> COMMIT["7. Control de Versiones Git y Reporte"]
```

## 2. Protocolo de Hand-off y Puertas de Verificación
1. **Paso 0 a Paso 1:** No se escribe código nuevo sin documentar las brechas en `auditoria-inicial.md`.
2. **Paso 1 a Paso 3:** No se implementa UI sin haber definido las funciones puras de dominio y los contratos de datos.
3. **Paso 3 a Paso 5:** Todo cambio de frontend debe pasar por `oxlint` y `vite build` antes de darse por completado.
4. **Paso 5 a Paso 7:** Las pruebas de Playwright deben validar la ausencia de errores en la consola del navegador y la correcta interacción de componentes.
