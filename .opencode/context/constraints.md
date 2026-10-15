# Restricciones Técnicas y Anti-Patrones ("Qué NO Hacer") — LG_Artifacts

## 1. Límites Técnicos y Dependencias Prohibidas
* **Principio de Simplicidad (Ponytail):** No incorporar librerías pesadas de estado global (Redux, MobX, Zustand), ni microservicios, bases de datos vectoriales, colas distribuidas o cachés externas. El tamaño y objetivo del piloto no las justifican.
* **Prohibido Reinstalar Dependencias Existentes:** Trabajar con el stack ya configurado (React 19, Vite, Tailwind CSS v4, Oxlint, Playwright).
* **Idioma 100% Español:** Queda estrictamente prohibido introducir etiquetas, botones, descripciones o mensajes en inglés en la interfaz de usuario, exportaciones o documentación.

## 2. Anti-Patrones de Arquitectura a Rechazar Activamente
1. **No Reconstruir:** No eliminar componentes funcionales ni reemplazar la estructura del proyecto por scaffolds vacíos.
2. **No Mezclar Simulación con Autorización Real:** El selector de roles en frontend es únicamente una herramienta de demostración; nunca debe presentarse como un sistema de seguridad ni utilizarse para emitir llamadas con privilegios administrativos sin autenticación.
3. **No Auto-Aprobar Etapas:** Jamás programar una transición que apruebe automáticamente la Etapa 1 al llegar a 14/14 en Gate 0. La decisión del tutor es un acto deliberado e independiente.
4. **No Denominador 7:** No calcular el avance con denominador 7. La etapa 7 (Sustentación) está excluida.
5. **No Conexión Anónima a Datos Privados:** Prohibido conectar el navegador web en GitHub Pages a tablas de proyectos reales con credenciales anónimas o llaves `service_role`.

## 3. Seguridad y Exportación CSV
* **Mitigación de Inyección de Fórmulas CSV:** Cualquier campo que inicie con `=`, `+`, `-`, `@` debe ser neutralizado anteponiendo un apóstrofe `'` para prevenir la ejecución de macros maliciosas en Microsoft Excel.
* **Codificación UTF-8 BOM:** Toda exportación CSV debe incluir el byte order mark `\uFEFF` para garantizar la correcta visualización de caracteres con tilde y eñes en Windows/Excel.

## 4. Elementos Explícitamente Fuera de Alcance (Out of Scope)
* [x] Repositorio institucional masivo de documentos.
* [x] Motor de búsqueda académica bibliográfica.
* [x] Sustentación oral ante jurados calificadores.
* [x] Roles de jurado evaluador.
* [x] Autenticación real en producción (login con email y contraseña).
* [x] Compartición pública no restringida de documentos académicos.
