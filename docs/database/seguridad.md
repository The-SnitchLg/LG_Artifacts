# Arquitectura de Seguridad, Privacidad y RLS — Supabase

**Versión:** 1.0  
**Fecha:** 14 de octubre de 2026  
**Documento Fuente:** `05_Backend_Data_Schema_Supabase.docx` y Hoja `13_Reglas_BD`  
**Entregable:** `docs/database/seguridad.md`  

---

## 1. Fronteras Mandatorias de Seguridad del MVP

1. **Autenticación en Fase Posterior:** La autenticación en producción con usuarios reales (email y contraseña institucional) está explícitamente fuera del alcance del MVP actual.
2. **Aislamiento del Entorno de Demostración:**
   * La aplicación estática de demostración opera **exclusivamente con datos ficticios** en memoria del cliente.
   * **Bajo ninguna circunstancia** se conectará un cliente web público y anónimo a bases de datos con información académica real o privada.
   * El selector de roles en la interfaz es una herramienta de simulación UX y **no otorga privilegios de servidor**.
3. **Protección de Credenciales:** Nunca se exponen al navegador claves de servicio (`service_role`), tokens administrativos ni variables de entorno privilegiadas.

---

## 2. Reglas de Integridad y Autorización en Base de Datos (R-01 a R-08)

| Regla | Enunciado y Restricción Técnica | Mecanismo de Control |
|---|---|---|
| **R-01** | Ningún proyecto se publica sin tener asignado un estudiante y un tutor principal. | Restricción en `proyecto_participante` y validación de publicación. |
| **R-02** | Las etapas 2 a 6 no pueden aprobarse si la etapa previa no está en estado `aprobado`. | Constraint relacional y función transaccional de aprobación. |
| **R-03** | Aprobar la Etapa 1 exige 17 pasos trabajados, 14/14 criterios Gate 0 conformes y aprobación explícita del tutor autenticado. | Verificación de `evaluacion_gate0` y `paso_fase0` antes del cambio de estado. |
| **R-04** | La aprobación de etapa y el evento de auditoría se ejecutan en una única transacción atómica; si una falla, ambas se cancelan. | Bloque `BEGIN ... COMMIT` transaccional en función RPC de PostgreSQL. |
| **R-05** | El estado `observado` solo se asigna con un comentario de motivo no vacío; la nueva entrega conserva todas las versiones anteriores. | Check `length(trim(texto)) > 0` en `comentario_decision` e inmutabilidad en `evidencia`. |
| **R-06** | Ninguna mutación desde cliente puede modificar `auditoria_evento` ni reasignar tutores sin permisos administrativos. | Revocación de permisos `UPDATE` y `DELETE` para clientes; inserción solo vía triggers. |
| **R-07** | El administrador puede gestionar la plataforma pero no puede alterar silenciosamente dictámenes académicos. | Registro inmutable de eventos con identificación de actor y roles no suplantables. |
| **R-08** | Los documentos residen en Storage privado; la entrega de archivos requiere URLs firmadas con vigencia máxima de 15 minutos. | Bucket privado `public = false` y políticas RLS en `storage.objects`. |

---

## 3. Políticas de Row Level Security (RLS) Diseñadas para Fase Autenticada

```sql
-- Ejemplo de política futura: El estudiante solo consulta su propio proyecto
create policy "Estudiante consulta su propio proyecto"
  on public.proyecto for select
  to authenticated
  using (
    exists (
      select 1 from public.proyecto_participante pp
      join public.perfil p on p.id = pp.profile_id
      where pp.project_id = public.proyecto.id
        and p.auth_user_id = auth.uid()
        and pp.papel = 'estudiante'
    )
  );

-- Ejemplo de política futura: El tutor solo aprueba proyectos que tiene asignados
create policy "Tutor dictamina proyecto asignado"
  on public.etapa for update
  to authenticated
  using (
    exists (
      select 1 from public.proyecto_participante pp
      join public.perfil p on p.id = pp.profile_id
      where pp.project_id = public.etapa.project_id
        and p.auth_user_id = auth.uid()
        and pp.papel = 'tutor'
    )
  );
```
