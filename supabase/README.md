# Arquitectura de Base de Datos — Supabase / PostgreSQL

**Proyecto:** Plataforma de Seguimiento Académico de Trabajos de Grado (LG_Artifacts)  
**Entorno Objetivo:** Supabase (PostgreSQL 15+)  
**Versión:** 1.0 (Piloto 2026-I)  

---

## 1. Estructura de Directorios

```
supabase/
├── migrations/
│   └── 20261014000000_schema_inicial.sql   # DDL de 12 entidades, checks, triggers y RLS
├── seed.sql                                # Datos semilla reproducibles (15 proyectos, 18 usuarios)
└── README.md                               # Guía operativa y técnica
```

---

## 2. Aplicación de Migraciones Locales con Supabase CLI

Para inicializar o ejecutar las migraciones en un entorno de desarrollo local con el Supabase CLI:

```bash
# 1. Iniciar los contenedores locales de Supabase
supabase start

# 2. Aplicar las migraciones versionadas
supabase db reset

# 3. Verificar estado de las tablas y RLS
supabase db lint
```

---

## 3. Políticas de Seguridad y Aislamiento (RLS)

* **Principio de Mínimo Privilegio:** Se revoca el acceso a todos los roles anónimos (`REVOKE ALL FROM anon`).
* **Privacidad de Evidencias:** Los documentos académicos privados residen en buckets privados de Storage con URLs firmadas de vigencia corta (máximo 15 minutos).
* **Modo Demostración vs. Modo Operativo:** La interfaz web estática desplegada en GitHub Pages opera de forma aislada con fixtures locales sin conexión pública anónima a bases privadas de Supabase, protegiendo los datos institucionales por diseño.
