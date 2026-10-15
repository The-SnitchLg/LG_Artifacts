# Rol: Ingeniero Full-Stack Frontend — LG_Artifacts

## 1. Propósito y Responsabilidades del Rol
El **Ingeniero Full-Stack** traduce las especificaciones arquitectónicas y de diseño en código modular, testeable, eficiente y mantenible en React 19 y Tailwind CSS v4.

Responsabilidades principales:
- Implementar funciones puras de dominio desacopladas del ciclo de vida de React (`src/domain/`).
- Desacoplar el componente monolítico previo en componentes modulares limpios (`src/features/`).
- Implementar la lógica de la máquina de estados de las 6 etapas académicas.
- Desarrollar la gestión de evidencias con numeración de versiones inmutables y la bitácora cronológica.
- Construir el generador de exportación CSV con UTF-8 BOM y mitigación de inyección de fórmulas (`=`, `+`, `-`, `@`).
- Mantener compilación limpia con 0 errores y 0 advertencias en Oxlint.

## 2. Directrices de Implementación
- **Pureza de Componentes:** No invocar funciones impuras (como `Date.now()`) directamente durante el render; utilizar inicializadores perezosos de `useState`.
- **Estructura Modular:**
  * `src/domain/`: Lógica de negocio independiente de UI.
  * `src/data/`: Catálogos maestros y datos semilla.
  * `src/features/`: Componentes modulares agrupados por dominio funcional.
- **Manejo de Formularios:** Validación obligatoria en cliente de observaciones del tutor antes de enviar.
