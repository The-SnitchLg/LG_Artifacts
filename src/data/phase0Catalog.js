/**
 * Catalogo Canónico de las 17 Actividades de Fase 0 (Preparacion de Tesis)
 * Fuente: Plantilla_Fase_0_Tesis.xlsx y Matriz Maestra (Hoja 07_Fase0_17)
 */

export const PHASE0_ACTIVITIES = [
  {
    number: 1,
    sheet: '01_Idea_Inicial',
    name: 'Idea inicial',
    expectedResult: 'Idea de investigación formulada',
    mandatory: true,
    dependency: 'Inicio'
  },
  {
    number: 2,
    sheet: '02_Problema',
    name: 'Problema de investigación',
    expectedResult: 'Statement del problema v0.1',
    mandatory: true,
    dependency: 'Paso 1'
  },
  {
    number: 3,
    sheet: '03_Exploracion',
    name: 'Exploración preliminar',
    expectedResult: 'Mapa inicial del campo de estudio',
    mandatory: true,
    dependency: 'Paso 2'
  },
  {
    number: 4,
    sheet: '04_Pregunta',
    name: 'Pregunta de investigación',
    expectedResult: 'Pregunta principal validada',
    mandatory: true,
    dependency: 'Paso 3'
  },
  {
    number: 5,
    sheet: '05_Objetivos',
    name: 'Objetivos del estudio',
    expectedResult: 'Objetivo general y específicos alineados',
    mandatory: true,
    dependency: 'Paso 4'
  },
  {
    number: 6,
    sheet: '06_Delimitacion',
    name: 'Delimitación',
    expectedResult: 'Fronteras explícitas del estudio (temporal/geográfica/temática)',
    mandatory: true,
    dependency: 'Paso 5'
  },
  {
    number: 7,
    sheet: '07_Unidad_Analisis',
    name: 'Unidad de análisis',
    expectedResult: 'Unidad de análisis y población definida',
    mandatory: true,
    dependency: 'Paso 6'
  },
  {
    number: 8,
    sheet: '08_Mapa_Conceptual',
    name: 'Mapa conceptual preliminar',
    expectedResult: 'Conceptos y relaciones iniciales versionadas',
    mandatory: true,
    dependency: 'Paso 7'
  },
  {
    number: 9,
    sheet: '09_Categorias',
    name: 'Categorías / constructos preliminares',
    expectedResult: 'Sistema conceptual provisional y operacionalizado',
    mandatory: true,
    dependency: 'Paso 8'
  },
  {
    number: 10,
    sheet: '10_Keywords',
    name: 'Keywords y términos',
    expectedResult: 'Diccionario de términos de búsqueda y sinónimos',
    mandatory: true,
    dependency: 'Paso 9'
  },
  {
    number: 11,
    sheet: '11_Ecuaciones',
    name: 'Ecuaciones de búsqueda',
    expectedResult: 'Ecuaciones de búsqueda reproducibles y versionadas',
    mandatory: true,
    dependency: 'Paso 10'
  },
  {
    number: 12,
    sheet: '12_Fuentes',
    name: 'Fuentes de información',
    expectedResult: 'Bases de datos académicas justificadas (Scopus, WoS, SciELO)',
    mandatory: true,
    dependency: 'Paso 11'
  },
  {
    number: 13,
    sheet: '13_INC_EXC',
    name: 'Criterios de inclusión y exclusión',
    expectedResult: 'Criterios INC/EXC codificados formalmente',
    mandatory: true,
    dependency: 'Paso 12'
  },
  {
    number: 14,
    sheet: '14_Calidad',
    name: 'Criterios de calidad',
    expectedResult: 'Rúbrica de evaluación crítica Q-01 a Q-04',
    mandatory: true,
    dependency: 'Paso 13'
  },
  {
    number: 15,
    sheet: '15_Ficha_Extraccion',
    name: 'Ficha de extracción de datos',
    expectedResult: 'Plantilla de síntesis configurada y validada',
    mandatory: true,
    dependency: 'Paso 14'
  },
  {
    number: 16,
    sheet: '16_Bitacora',
    name: 'Bitácora de investigación',
    expectedResult: 'Registro de decisiones habilitado con memoria institucional',
    mandatory: true,
    dependency: 'Paso 15'
  },
  {
    number: 17,
    sheet: '17_Control_Versiones',
    name: 'Control de versiones',
    expectedResult: 'Esquema de versionado definido (baseline v0.1 archivado)',
    mandatory: true,
    dependency: 'Paso 16'
  }
];
