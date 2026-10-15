-- ====================================================================
-- SEED DATA REPRODUCIBLE PARA EL PILOTO ACADÉMICO 2026-I
-- Capacidad: 15 Estudiantes, 15 Proyectos, 3 Tutores, 1 Administrador
-- Cumple con Doc 05 y Matriz Maestra de Datos
-- ====================================================================

-- 1. Catálogo Fijo de Criterios Gate 0 (14 Criterios)
insert into public.criterio_gate0 (codigo, descripcion, hoja_evidencia, categoria, obligatorio) values
('G0-01', 'Existe una pregunta de investigación concreta y validada.', '04_Pregunta', 'Fundamentación', true),
('G0-02', 'Objetivo general y objetivos específicos están plenamente alineados.', '05_Objetivos', 'Fundamentación', true),
('G0-03', 'El alcance está explícitamente delimitado (temporal, geográfico, temático).', '06_Delimitacion', 'Fundamentación', true),
('G0-04', 'La unidad de análisis y la población objeto de estudio están definidas.', '07_Unidad_Analisis', 'Fundamentación', true),
('G0-05', 'Existe un mapa conceptual preliminar estructurado y referenciado.', '08_Mapa_Conceptual', 'Marco Conceptual', true),
('G0-06', 'Existen categorías y constructos teóricos preliminares operacionalizados.', '09_Categorias', 'Marco Conceptual', true),
('G0-07', 'Existe un diccionario estructurado de palabras clave (keywords y sinónimos).', '10_Keywords', 'Estrategia de Búsqueda', true),
('G0-08', 'Existen ecuaciones de búsqueda reproducibles y versionadas por base de datos.', '11_Ecuaciones', 'Estrategia de Búsqueda', true),
('G0-09', 'Las fuentes académicas y bases de datos están justificadas (Scopus, WoS, SciELO).', '12_Fuentes', 'Estrategia de Búsqueda', true),
('G0-10', 'Existen criterios formales de inclusión y exclusión (INC/EXC) aplicables.', '13_INC_EXC', 'Tamizaje y Filtros', true),
('G0-11', 'Existe una rúbrica formal de evaluación de calidad metodológica (Q-01 a Q-04).', '14_Calidad', 'Evaluación Crítica', true),
('G0-12', 'Existe una ficha de extracción de datos con consistencia inter-variable.', '15_Ficha_Extraccion', 'Síntesis', true),
('G0-13', 'Existe una bitácora activa de decisiones con trazabilidad y memoria institucional.', '16_Bitacora', 'Gobernanza', true),
('G0-14', 'Existe un esquema de control de versiones establecido (baseline v0.1 archivado).', '17_Control_Versiones', 'Gobernanza', true)
on conflict (codigo) do nothing;

-- 2. Cohorte Académica Activa
insert into public.cohorte (id, codigo, descripcion, activo) values
('c0000000-0000-0000-0000-000000002026', '2026-I', 'Cohorte Piloto de Grados y Tesis 2026 - Semestre I', true)
on conflict (codigo) do nothing;

-- 3. Perfiles del Piloto (3 Tutores + 1 Administrador)
insert into public.perfil (id, nombre, correo, rol, departamento, activo) values
('a0000000-0000-0000-0000-000000000001', 'Dirección de Grados y Títulos', 'gradosytitulos@universidad.edu.pe', 'admin', 'Vicerrectorado Académico', true),
('t0000000-0000-0000-0000-000000000001', 'Dr. Carlos Gutiérrez', 'carlos.gutierrez@universidad.edu.pe', 'tutor', 'Facultad de Ciencias Empresariales y Gestión', true),
('t0000000-0000-0000-0000-000000000002', 'Dra. Elena Ramos', 'elena.ramos@universidad.edu.pe', 'tutor', 'Facultad de Ingeniería de Sistemas', true),
('t0000000-0000-0000-0000-000000000003', 'Dra. Sofía Mendoza', 'sofia.mendoza@universidad.edu.pe', 'tutor', 'Facultad de Ciencias de la Salud', true)
on conflict (correo) do nothing;

-- 4. Perfiles de los 15 Estudiantes
insert into public.perfil (id, nombre, correo, rol, departamento, activo) values
('e0000000-0000-0000-0000-000000000001', 'Mateo R.', 'mateo.r@universidad.edu.pe', 'estudiante', 'Ciencias Empresariales', true),
('e0000000-0000-0000-0000-000000000002', 'Lucía Valenzuela', 'lucia.valenzuela@universidad.edu.pe', 'estudiante', 'Ingeniería de Sistemas', true),
('e0000000-0000-0000-0000-000000000003', 'Jorge Benavides', 'jorge.benavides@universidad.edu.pe', 'estudiante', 'Ciencias de la Salud', true),
('e0000000-0000-0000-0000-000000000004', 'Camila Quispe', 'camila.quispe@universidad.edu.pe', 'estudiante', 'Ciencias Empresariales', true),
('e0000000-0000-0000-0000-000000000005', 'Diego Fernando Morales', 'diego.morales@universidad.edu.pe', 'estudiante', 'Ingeniería de Sistemas', true),
('e0000000-0000-0000-0000-000000000006', 'Andrea Castillo', 'andrea.castillo@universidad.edu.pe', 'estudiante', 'Ciencias de la Salud', true),
('e0000000-0000-0000-0000-000000000007', 'Gabriel Navarro', 'gabriel.navarro@universidad.edu.pe', 'estudiante', 'Ciencias Empresariales', true),
('e0000000-0000-0000-0000-000000000008', 'Mariana Silva', 'mariana.silva@universidad.edu.pe', 'estudiante', 'Ingeniería de Sistemas', true),
('e0000000-0000-0000-0000-000000000009', 'Renato Cárdenas', 'renato.cardenas@universidad.edu.pe', 'estudiante', 'Ciencias de la Salud', true),
('e0000000-0000-0000-0000-000000000010', 'Valeria Montero', 'valeria.montero@universidad.edu.pe', 'estudiante', 'Ciencias Empresariales', true),
('e0000000-0000-0000-0000-000000000011', 'Álvaro Paredes', 'alvaro.paredes@universidad.edu.pe', 'estudiante', 'Ingeniería de Sistemas', true),
('e0000000-0000-0000-0000-000000000012', 'Patricia Zúñiga', 'patricia.zuniga@universidad.edu.pe', 'estudiante', 'Ciencias de la Salud', true),
('e0000000-0000-0000-0000-000000000013', 'Rodrigo Espinoza', 'rodrigo.espinoza@universidad.edu.pe', 'estudiante', 'Ciencias Empresariales', true),
('e0000000-0000-0000-0000-000000000014', 'Natalia Huamán', 'natalia.huaman@universidad.edu.pe', 'estudiante', 'Ingeniería de Sistemas', true),
('e0000000-0000-0000-0000-000000000015', 'Sebastián Salazar', 'sebastian.salazar@universidad.edu.pe', 'estudiante', 'Ciencias de la Salud', true)
on conflict (correo) do nothing;

-- 5. Proyecto 01 de Muestra (Impacto de la Economía Circular en MIPYMES)
insert into public.proyecto (
  id, institutional_id, titulo, cohorte_id, linea_tematica, departamento, objetivo, fecha_objetivo, estado, riesgo_academico
) values (
  'p0000000-0000-0000-0000-000000000001',
  'THS-2026-CS-042',
  'Impacto de la Economía Circular en la Competitividad de MIPYMES Industriales',
  'c0000000-0000-0000-0000-000000002026',
  'Sostenibilidad y Competitividad',
  'Facultad de Ciencias Empresariales y Gestión',
  'Analizar la correlación entre la adopción de prácticas de economía circular y el incremento de competitividad en MIPYMES.',
  '2026-11-15',
  'activo',
  'Bajo'
) on conflict (institutional_id) do nothing;

-- Asignación de participantes para Proyecto 01
insert into public.proyecto_participante (project_id, profile_id, papel, principal) values
('p0000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000001', 'estudiante', true),
('p0000000-0000-0000-0000-000000000001', 't0000000-0000-0000-0000-000000000001', 'tutor', true)
on conflict (project_id, profile_id) do nothing;

-- Las 6 etapas del Proyecto 01
insert into public.etapa (project_id, numero, nombre, status) values
('p0000000-0000-0000-0000-000000000001', 1, 'Propuesta / Protocolo (Gate 0)', 'en_revision'),
('p0000000-0000-0000-0000-000000000001', 2, 'Marco Teórico', 'pendiente'),
('p0000000-0000-0000-0000-000000000001', 3, 'Metodología', 'pendiente'),
('p0000000-0000-0000-0000-000000000001', 4, 'Recolección', 'pendiente'),
('p0000000-0000-0000-0000-000000000001', 5, 'Análisis', 'pendiente'),
('p0000000-0000-0000-0000-000000000001', 6, 'Documento Final', 'pendiente')
on conflict (project_id, numero) do nothing;
