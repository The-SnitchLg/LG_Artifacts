# Lógica de Negocio y Dominio Académico — LG_Artifacts

## 1. Visión General del Dominio
La plataforma gestiona el ciclo integral de seguimiento académico de trabajos de grado y tesis universitarias para el piloto de la **Cohorte 2026-I** (15 estudiantes, 15 proyectos y 3 tutores principales). Sustituye la dependencia de hojas de cálculo monolíticas por un sistema trazable, guiado y transparente.

## 2. Entidades Principales y Modelo de Datos

| Entidad | Descripción | Atributos Clave | Relaciones |
| :--- | :--- | :--- | :--- |
| `Proyecto` | Unidad académica de investigación | `id`, `institutionalId`, `titulo`, `cohorte`, `lineaTematica`, `riesgo` | Pertenece a una `Cohorte`, tiene N:M `Perfiles` |
| `Perfil` | Usuario institucional del sistema | `id`, `nombre`, `correo`, `rol` ('estudiante', 'tutor', 'admin') | Asignado a `Proyectos` |
| `Etapa` | Fases del ciclo académico (exactamente 6) | `id` (1..6), `nombre`, `status` ('pendiente', 'en_revision', 'observado', 'aprobado'), `fecha` | Pertenece a `Proyecto` (1:6) |
| `Paso_Fase0` | 17 actividades metodológicas de preparación | `numero` (1..17), `nombre`, `hojaOrigen`, `completado` | Pertenece a `Proyecto` (1:17) |
| `Criterio_Gate0` | 14 criterios de salida de protocolo | `codigo` ('G0-01'..'G0-14'), `label`, `categoria`, `obligatorio` | Catálogo global inmutable |
| `Evaluacion_Gate0` | Dictamen de criterio por proyecto | `id`, `criterio_codigo`, `checked`, `observacion` | `Proyecto` 1:14 `Criterio_Gate0` |
| `Evidencia` | Documentos entregados y versionados | `id`, `version` ('v1.0', 'v1.1'), `filename`, `stageId`, `size` | Pertenece a `Etapa` |
| `Bitacora_Log` | Registro inmutable de trazabilidad | `id`, `timestamp`, `author`, `action`, `notes`, `milestone`, `deadline` | Pertenece a `Proyecto` |
| `Compromiso` | Acuerdo de entrega con fecha límite | `id`, `descripcion`, `responsable`, `dueDate`, `status` | Pertenece a `Proyecto` |

## 3. Reglas de Negocio Inmutables

1. **Cálculo de Progreso Académico:** `Progreso = (etapasAprobadas / 6) * 100`. El denominador es estrictamente 6. La etapa 7 (Sustentación) está fuera de alcance del MVP.
2. **Autoridad de Aprobación:** Solo el tutor asignado tiene la potestad de aprobar formalmente las etapas 1 a 6.
3. **Regla de Oro de Gate 0:** Cumplir 14/14 criterios en Gate 0 es un requisito para habilitar el botón de dictamen del tutor, pero **nunca aprueba automáticamente la etapa**. El dictamen del tutor es una acción manual y explícita.
4. **Secuencia de Etapas:** Las etapas 2 a 6 solo pueden aprobarse si la etapa inmediatamente anterior se encuentra formalmente aprobada. No se permite saltar etapas.
5. **Observaciones Obligatorias:** Cambiar una etapa a estado `observado` exige que el tutor registre una observación con texto no vacío.
6. **Conservación de Versiones:** La entrega de correcciones por parte del estudiante nunca sobrescribe evidencias anteriores; se genera una nueva versión inmutable (`v1.0`, `v1.1`, etc.).

## 4. Flujos Clave de Usuario

### Flujo 1: Revisión y Aprobación de Etapa 1 (Gate 0)
1. **Disparador:** El estudiante completa la formulación de su protocolo y carga la evidencia inicial.
2. **Precondición:** Etapa 1 en estado `en_revision`.
3. **Pasos:**
   - El estudiante y tutor trabajan las 17 actividades metodológicas de Fase 0.
   - El tutor audita los 14 criterios de Gate 0 marcando conformidad en el checklist.
   - Al alcanzar 14/14 criterios conformes, se activa la opción de aprobación en la ficha del tutor.
   - El tutor emite el dictamen formal de aprobación con notas y fecha.
4. **Postcondición:** Etapa 1 pasa a `aprobado`, el progreso sube a 17%, y la Etapa 2 se habilita automáticamente en estado `en_revision`.
