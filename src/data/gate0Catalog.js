/**
 * Catalogo Canónico de los 14 Criterios de Calidad Gate 0
 * Fuente: Plantilla_Fase_0_Tesis.xlsx y Matriz Maestra (Hoja 08_Gate0_14)
 */

export const GATE0_CRITERIA = [
  {
    id: 'G0-01',
    label: 'Existe una pregunta de investigación concreta y validada.',
    evidenceSheet: '04_Pregunta',
    category: 'Fundamentación',
    suggestedCheck: 'Pregunta registrada y revisada con el tutor',
    fallbackAction: 'Reformular pregunta de investigación',
    mandatory: true
  },
  {
    id: 'G0-02',
    label: 'Objetivo general y objetivos específicos están plenamente alineados.',
    evidenceSheet: '05_Objetivos',
    category: 'Fundamentación',
    suggestedCheck: 'Matriz OG/OE y consistencia metodológica',
    fallbackAction: 'Revisar jerarquía y verbos de objetivos',
    mandatory: true
  },
  {
    id: 'G0-03',
    label: 'El alcance está explícitamente delimitado (temporal, geográfico, temático).',
    evidenceSheet: '06_Delimitacion',
    category: 'Fundamentación',
    suggestedCheck: 'Definición de fronteras operativas del estudio',
    fallbackAction: 'Cerrar fronteras del alcance',
    mandatory: true
  },
  {
    id: 'G0-04',
    label: 'La unidad de análisis y la población objeto de estudio están definidas.',
    evidenceSheet: '07_Unidad_Analisis',
    category: 'Fundamentación',
    suggestedCheck: 'Definición de unidad, nivel y población meta',
    fallbackAction: 'Definir nivel y unidad de observación',
    mandatory: true
  },
  {
    id: 'G0-05',
    label: 'Existe un mapa conceptual preliminar estructurado y referenciado.',
    evidenceSheet: '08_Mapa_Conceptual',
    category: 'Marco Conceptual',
    suggestedCheck: 'Mapa conceptual sintético versionado',
    fallbackAction: 'Completar relaciones conceptuales clave',
    mandatory: true
  },
  {
    id: 'G0-06',
    label: 'Existen categorías y constructos teóricos preliminares operacionalizados.',
    evidenceSheet: '09_Categorias',
    category: 'Marco Conceptual',
    suggestedCheck: 'Diccionario preliminar de constructos y dimensiones',
    fallbackAction: 'Construir sistema conceptual provisional',
    mandatory: true
  },
  {
    id: 'G0-07',
    label: 'Existe un diccionario estructurado de palabras clave (keywords y sinónimos).',
    evidenceSheet: '10_Keywords',
    category: 'Estrategia de Búsqueda',
    suggestedCheck: 'Tabla de keywords, operadores booleanos y tesauros',
    fallbackAction: 'Ampliar términos y descriptores normalizados',
    mandatory: true
  },
  {
    id: 'G0-08',
    label: 'Existen ecuaciones de búsqueda reproducibles y versionadas por base de datos.',
    evidenceSheet: '11_Ecuaciones',
    category: 'Estrategia de Búsqueda',
    suggestedCheck: 'Cadenas de búsqueda formalizadas por base indexada',
    fallbackAction: 'Diseñar y versionar ecuaciones booleanas',
    mandatory: true
  },
  {
    id: 'G0-09',
    label: 'Las fuentes académicas y bases de datos están justificadas (Scopus, WoS, SciELO).',
    evidenceSheet: '12_Fuentes',
    category: 'Estrategia de Búsqueda',
    suggestedCheck: 'Relación de bases primarias y cobertura temática',
    fallbackAction: 'Justificar relevancia de bases seleccionadas',
    mandatory: true
  },
  {
    id: 'G0-10',
    label: 'Existen criterios formales de inclusión y exclusión (INC/EXC) aplicables.',
    evidenceSheet: '13_INC_EXC',
    category: 'Tamizaje y Filtros',
    suggestedCheck: 'Criterios INC/EXC formalizados con límites explícitos',
    fallbackAction: 'Precisar filtros de inclusión y exclusión',
    mandatory: true
  },
  {
    id: 'G0-11',
    label: 'Existe una rúbrica formal de evaluación de calidad metodológica (Q-01 a Q-04).',
    evidenceSheet: '14_Calidad',
    category: 'Evaluación Crítica',
    suggestedCheck: 'Rúbrica de evaluación crítica ponderada',
    fallbackAction: 'Definir baremos de calidad metodológica',
    mandatory: true
  },
  {
    id: 'G0-12',
    label: 'Existe una ficha de extracción de datos con consistencia inter-variable.',
    evidenceSheet: '15_Ficha_Extraccion',
    category: 'Síntesis',
    suggestedCheck: 'Plantilla de matriz de extracción configurada',
    fallbackAction: 'Configurar campos de la matriz de síntesis',
    mandatory: true
  },
  {
    id: 'G0-13',
    label: 'Existe una bitácora activa de decisiones con trazabilidad y memoria institucional.',
    evidenceSheet: '16_Bitacora',
    category: 'Gobernanza',
    suggestedCheck: 'Registro de decisiones inicializado con acuerdos clave',
    fallbackAction: 'Activar bitácora y asentar primeras decisiones',
    mandatory: true
  },
  {
    id: 'G0-14',
    label: 'Existe un esquema de control de versiones establecido (baseline v0.1 archivado).',
    evidenceSheet: '17_Control_Versiones',
    category: 'Gobernanza',
    suggestedCheck: 'Repositorio base v0.1 archivado y política de control de cambios',
    fallbackAction: 'Fijar versión de arranque v0.1 del proyecto',
    mandatory: true
  }
];
