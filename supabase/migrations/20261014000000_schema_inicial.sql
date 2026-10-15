-- ====================================================================
-- MIGRACIÓN INICIAL: ESQUEMA DE BASE DE DATOS SUPABASE / POSTGRESQL
-- Plataforma de Seguimiento Académico de Trabajos de Grado (Piloto 2026-I)
-- Fecha: 14 de octubre de 2026
-- Cumplimiento: TRD, Backend Schema (Doc 05) y Reglas R-01 a R-08
-- ====================================================================

-- 0. Extensiones requeridas
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

-- ====================================================================
-- 1. TABLAS DEL MODELO RELACIONAL (12 ENTIDADES)
-- ====================================================================

-- 1.1 Perfil de Usuario (Estudiante, Tutor, Administrador)
create table if not exists public.perfil (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  nombre text not null check (length(trim(nombre)) between 2 and 150),
  correo text not null unique check (correo ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  rol text not null check (rol in ('estudiante', 'tutor', 'admin')),
  departamento text,
  activo boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 1.2 Cohorte Académica
create table if not exists public.cohorte (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique check (length(trim(codigo)) between 2 and 20),
  descripcion text,
  activo boolean not null default true,
  created_at timestamptz not null default now()
);

-- 1.3 Proyecto de Grado / Tesis
create table if not exists public.proyecto (
  id uuid primary key default gen_random_uuid(),
  institutional_id text not null unique check (length(trim(institutional_id)) between 4 and 50),
  titulo text not null check (length(trim(titulo)) between 5 and 500),
  cohorte_id uuid not null references public.cohorte(id) on delete restrict,
  linea_tematica text not null,
  departamento text not null,
  objetivo text,
  fecha_objetivo date,
  estado text not null default 'activo' check (estado in ('activo', 'pausado', 'concluido')),
  riesgo_academico text not null default 'Bajo' check (riesgo_academico in ('Bajo', 'Medio', 'Alto')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 1.4 Participante del Proyecto (Relación N:M Estudiante / Tutor)
create table if not exists public.proyecto_participante (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  profile_id uuid not null references public.perfil(id) on delete restrict,
  papel text not null check (papel in ('estudiante', 'tutor')),
  principal boolean not null default true,
  asignado_en timestamptz not null default now(),
  unique(project_id, profile_id)
);

-- 1.5 Etapas Académicas del Proyecto (Exactamente 6 etapas)
create table if not exists public.etapa (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  numero integer not null check (numero between 1 and 6),
  nombre text not null,
  status text not null default 'pendiente' check (status in ('pendiente', 'en_revision', 'observado', 'aprobado')),
  habilitada_en timestamptz not null default now(),
  aprobada_en timestamptz,
  aprobada_por uuid references public.perfil(id),
  version integer not null default 1,
  unique(project_id, numero)
);

-- 1.6 Pasos de Preparación Metodológica Fase 0 (17 pasos consecutivos)
create table if not exists public.paso_fase0 (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  numero integer not null check (numero between 1 and 17),
  nombre text not null,
  hoja_origen text not null,
  estado text not null default 'pendiente' check (estado in ('pendiente', 'completado')),
  contenido text,
  updated_at timestamptz not null default now(),
  unique(project_id, numero)
);

-- 1.7 Catálogo Global de Criterios Gate 0 (14 Criterios de Salida congelados)
create table if not exists public.criterio_gate0 (
  codigo text primary key check (codigo ~ '^G0-(0[1-9]|1[0-4])$'),
  descripcion text not null,
  hoja_evidencia text not null,
  categoria text not null,
  obligatorio boolean not null default true
);

-- 1.8 Evaluación de Criterios Gate 0 por Proyecto
create table if not exists public.evaluacion_gate0 (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  criterio_codigo text not null references public.criterio_gate0(codigo) on delete restrict,
  cumple boolean not null default false,
  observacion text,
  evaluado_por uuid references public.perfil(id),
  fecha timestamptz not null default now(),
  unique(project_id, criterio_codigo)
);

-- 1.9 Repositorio de Evidencias Versionadas
create table if not exists public.evidencia (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  etapa_id uuid not null references public.etapa(id) on delete restrict,
  numero_version text not null check (numero_version ~ '^v[0-9]+\.[0-9]+$'),
  storage_key text not null,
  nombre_original text not null,
  mime text not null,
  bytes bigint not null check (bytes > 0),
  uploaded_by uuid not null references public.perfil(id),
  created_at timestamptz not null default now()
);

-- 1.10 Comentarios y Decisiones de Asesoría (Historial inmutable)
create table if not exists public.comentario_decision (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  etapa_id uuid not null references public.etapa(id) on delete restrict,
  actor_id uuid not null references public.perfil(id),
  tipo text not null check (tipo in ('observacion', 'aprobacion', 'entrega')),
  texto text not null check (length(trim(texto)) > 0),
  estado_anterior text,
  estado_nuevo text,
  creado_en timestamptz not null default now()
);

-- 1.11 Compromisos y Acuerdos Académicos
create table if not exists public.compromiso (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.proyecto(id) on delete cascade,
  descripcion text not null check (length(trim(descripcion)) > 3),
  fecha_limite date not null,
  responsable text not null,
  estado text not null default 'pendiente' check (estado in ('pendiente', 'cumplido')),
  creado_en timestamptz not null default now()
);

-- 1.12 Bitácora de Auditoría de Seguridad y Eventos de Sistema
create table if not exists public.auditoria_evento (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.proyecto(id) on delete set null,
  entidad text not null,
  entidad_id uuid not null,
  accion text not null,
  actor_id uuid references public.perfil(id),
  antes jsonb,
  despues jsonb,
  ip_origen text,
  creado_en timestamptz not null default now()
);

-- ====================================================================
-- 2. ÍNDICES DE RENDIMIENTO Y OPTIMIZACIÓN
-- ====================================================================
create index if not exists idx_proyecto_cohorte on public.proyecto(cohorte_id);
create index if not exists idx_participante_project_profile on public.proyecto_participante(project_id, profile_id);
create index if not exists idx_etapa_project_numero on public.etapa(project_id, numero, status);
create index if not exists idx_evaluacion_gate0_project on public.evaluacion_gate0(project_id, criterio_codigo);
create index if not exists idx_evidencia_project_etapa on public.evidencia(project_id, etapa_id);
create index if not exists idx_comentario_project_fecha on public.comentario_decision(project_id, creado_en desc);
create index if not exists idx_auditoria_project_fecha on public.auditoria_evento(project_id, creado_en desc);

-- ====================================================================
-- 3. FUNCIONES Y TRIGGERS DE INTEGRIDAD Y AUDITORÍA
-- ====================================================================

-- 3.1 Trigger para actualizar updated_at automáticamente
create or replace function public.fn_actualizar_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_proyecto_updated_at
  before update on public.proyecto
  for each row execute function public.fn_actualizar_timestamp();

create trigger trg_perfil_updated_at
  before update on public.perfil
  for each row execute function public.fn_actualizar_timestamp();

-- 3.2 Trigger para auditar cambios de estado en etapas
create or replace function public.fn_auditar_cambio_etapa()
returns trigger as $$
begin
  if (old.status is distinct from new.status) then
    insert into public.auditoria_evento (
      project_id,
      entidad,
      entidad_id,
      accion,
      actor_id,
      antes,
      despues
    ) values (
      new.project_id,
      'etapa',
      new.id,
      'CAMBIO_ESTADO_ETAPA',
      new.aprobada_por,
      jsonb_build_object('numero', old.numero, 'status', old.status, 'version', old.version),
      jsonb_build_object('numero', new.numero, 'status', new.status, 'version', new.version, 'aprobada_en', new.aprobada_en)
    );
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_auditar_etapa
  after update on public.etapa
  for each row execute function public.fn_auditar_cambio_etapa();

-- ====================================================================
-- 4. SEGURIDAD Y PRIVACIDAD: ROW LEVEL SECURITY (RLS)
-- ====================================================================
-- Regla de Oro: Se activan RLS y se revoca acceso público/anónimo.
-- Ningún cliente anónimo puede leer ni escribir datos de proyectos académicos.

alter table public.perfil enable row level security;
alter table public.cohorte enable row level security;
alter table public.proyecto enable row level security;
alter table public.proyecto_participante enable row level security;
alter table public.etapa enable row level security;
alter table public.paso_fase0 enable row level security;
alter table public.criterio_gate0 enable row level security;
alter table public.evaluacion_gate0 enable row level security;
alter table public.evidencia enable row level security;
alter table public.comentario_decision enable row level security;
alter table public.compromiso enable row level security;
alter table public.auditoria_evento enable row level security;

-- Revocación de privilegios para anon en todas las tablas
revoke all on public.perfil from anon;
revoke all on public.cohorte from anon;
revoke all on public.proyecto from anon;
revoke all on public.proyecto_participante from anon;
revoke all on public.etapa from anon;
revoke all on public.paso_fase0 from anon;
revoke all on public.criterio_gate0 from anon;
revoke all on public.evaluacion_gate0 from anon;
revoke all on public.evidencia from anon;
revoke all on public.comentario_decision from anon;
revoke all on public.compromiso from anon;
revoke all on public.auditoria_evento from anon;

-- Políticas de seguridad base preparadas para la fase posterior de Auth:
-- (Solo usuarios autenticados con asignación explícita tendrán acceso)
create policy "Lectura de catálogo de criterios Gate 0"
  on public.criterio_gate0 for select
  to authenticated
  using (true);

create policy "Lectura de cohorte activa para autenticados"
  on public.cohorte for select
  to authenticated
  using (activo = true);
