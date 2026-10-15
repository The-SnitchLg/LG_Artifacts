/**
 * Datos Semilla Ficticios para el Piloto Academico 2026-I
 * Capacidad: 15 Estudiantes, 15 Proyectos de Tesis y 3 Tutores Principales.
 * Todos los datos son completamente ficticios y no comprometen informacion privada.
 */

import { PHASE0_ACTIVITIES } from './phase0Catalog.js';
import { GATE0_CRITERIA } from './gate0Catalog.js';

export const TUTORS = [
  { id: 'TUT-01', name: 'Dr. Carlos Gutiérrez', email: 'carlos.gutierrez@universidad.edu.pe', department: 'Gestión y Sostenibilidad' },
  { id: 'TUT-02', name: 'Dra. Elena Ramos', email: 'elena.ramos@universidad.edu.pe', department: 'Tecnología e Inteligencia Artificial' },
  { id: 'TUT-03', name: 'Dra. Sofía Mendoza', email: 'sofia.mendoza@universidad.edu.pe', department: 'Salud Pública y Biotecnología' }
];

export const ADMIN_USER = {
  id: 'ADM-01',
  name: 'Dirección de Grados y Títulos',
  email: 'gradosytitulos@universidad.edu.pe',
  role: 'admin'
};

function buildDefaultStages(stageStates = []) {
  const definitions = [
    { id: 1, name: 'Propuesta / Protocolo (Gate 0)', description: 'Definición rigurosa del problema, 14 criterios de protocolo y viabilidad metodológica.' },
    { id: 2, name: 'Marco Teórico', description: 'Revisión sistemática de literatura y estado del arte indexado.' },
    { id: 3, name: 'Metodología', description: 'Diseño muestral, instrumentos validados y protocolo de recolección de campo.' },
    { id: 4, name: 'Recolección', description: 'Levantamiento empírico de datos primarios en campo.' },
    { id: 5, name: 'Análisis', description: 'Procesamiento estadístico multivariable y triangulación de hallazgos.' },
    { id: 6, name: 'Documento Final', description: 'Redacción académica completa de tesis y verificación antiplagio.' }
  ];

  return definitions.map((def, idx) => {
    const custom = stageStates[idx] || { status: 'pendiente', date: null };
    return {
      ...def,
      status: custom.status,
      date: custom.date || null
    };
  });
}

function buildDefaultGate0(checkedCount = 12) {
  return GATE0_CRITERIA.map((crit, idx) => ({
    ...crit,
    checked: idx < checkedCount
  }));
}

function buildDefaultPhase0(completedCount = 15) {
  return PHASE0_ACTIVITIES.map((act, idx) => ({
    ...act,
    completed: idx < completedCount
  }));
}

export const PILOT_PROJECTS = [
  {
    id: 'PRJ-01',
    institutionalId: 'THS-2026-CS-042',
    title: 'Impacto de la Economía Circular en la Competitividad de MIPYMES Industriales',
    cohort: '2026-I',
    thematicLine: 'Sostenibilidad y Competitividad',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    student: 'Mateo R.',
    studentEmail: 'mateo.r@universidad.edu.pe',
    tutor: 'Dr. Carlos Gutiérrez',
    tutorId: 'TUT-01',
    targetDate: '15 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(12), // G0-13 y G0-14 pendientes
    phase0Steps: buildDefaultPhase0(15),
    evidences: [
      { id: 'EV-01', version: 'v1.1', filename: 'Protocolo_Economia_Circular_v1.1.pdf', stageId: 1, uploadedBy: 'Mateo R.', date: '2026-10-12', size: '2.4 MB' },
      { id: 'EV-02', version: 'v1.0', filename: 'Protocolo_Economia_Circular_v0.1_base.pdf', stageId: 1, uploadedBy: 'Mateo R.', date: '2026-10-05', size: '1.8 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '12/10/2026 16:45',
        author: 'Dr. Carlos Gutiérrez (Tutor)',
        action: 'Retroalimentación de Protocolo',
        notes: 'Se revisó la matriz de operacionalización de variables. Se solicita subsanar los criterios G0-13 (bitácora activa) y G0-14 (control de versiones base).',
        milestone: 'Subsanación de G0-13 y G0-14 para dictamen de Gate 0',
        deadline: '20/10/2026'
      },
      {
        id: 2,
        timestamp: '05/10/2026 10:15',
        author: 'Mateo R. (Estudiante)',
        action: 'Entrega de Avance v0.1',
        notes: 'Carga de propuesta de investigación preliminar, diccionario de términos estructurado y ecuaciones de búsqueda para Scopus y SciELO.',
        milestone: 'Evaluación de protocolo por tutor',
        deadline: '12/10/2026'
      }
    ],
    commitments: [
      { id: 'C-01', description: 'Subsanar criterios de gobernanza G0-13 y G0-14 en el protocolo', responsible: 'Mateo R.', dueDate: '2026-10-20', status: 'pendiente' },
      { id: 'C-02', description: 'Revisión final de ecuaciones de búsqueda en Scopus', responsible: 'Dr. Carlos Gutiérrez', dueDate: '2026-10-22', status: 'cumplido' }
    ]
  },
  {
    id: 'PRJ-02',
    institutionalId: 'THS-2026-IA-015',
    title: 'Modelos de Lenguaje Masivos en la Detección Temprana de Sesgos de Selección',
    cohort: '2026-I',
    thematicLine: 'Inteligencia Artificial y Ética Computacional',
    department: 'Facultad de Ingeniería de Sistemas',
    student: 'Lucía Valenzuela',
    studentEmail: 'lucia.valenzuela@universidad.edu.pe',
    tutor: 'Dra. Elena Ramos',
    tutorId: 'TUT-02',
    targetDate: '30 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-09-15' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-03', version: 'v2.0', filename: 'Marco_Teorico_Sesgos_LLM_v2.0.pdf', stageId: 2, uploadedBy: 'Lucía Valenzuela', date: '2026-10-10', size: '3.8 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '15/09/2026 11:30',
        author: 'Dra. Elena Ramos (Tutor)',
        action: 'Aprobación Formal: Etapa 1',
        notes: 'Protocolo aprobado con los 14 criterios de Gate 0 conformes. Habilitada Etapa 2 Marco Teórico.',
        milestone: 'Elaboración de Marco Teórico y Mapeo Sistemático',
        deadline: '15/10/2026'
      }
    ],
    commitments: [
      { id: 'C-03', description: 'Entregar primer borrador de la taxonomía de sesgos', responsible: 'Lucía Valenzuela', dueDate: '2026-10-25', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-03',
    institutionalId: 'THS-2026-SP-008',
    title: 'Factores Socioculturales Asociados a la Adherencia Terapéutica en Pacientes Rurales',
    cohort: '2026-I',
    thematicLine: 'Salud Comunitaria y Epidemiología',
    department: 'Facultad de Ciencias de la Salud',
    student: 'Jorge Benavides',
    studentEmail: 'jorge.benavides@universidad.edu.pe',
    tutor: 'Dra. Sofía Mendoza',
    tutorId: 'TUT-03',
    targetDate: '10 de diciembre de 2026',
    riskLevel: 'Medio',
    stages: buildDefaultStages([
      { status: 'observado', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(10),
    phase0Steps: buildDefaultPhase0(12),
    evidences: [
      { id: 'EV-04', version: 'v1.0', filename: 'Protocolo_Salud_Rural_v1.0.pdf', stageId: 1, uploadedBy: 'Jorge Benavides', date: '2026-10-08', size: '1.9 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '11/10/2026 09:20',
        author: 'Dra. Sofía Mendoza (Tutor)',
        action: 'Observación Registrada: Propuesta / Protocolo',
        notes: 'Es imprescindible reformular la delimitación geográfica y la escala de muestreo estratificado para las comunidades altoandinas seleccionadas.',
        milestone: 'Subsanación de delimitación y consentimiento informado',
        deadline: '24/10/2026'
      }
    ],
    commitments: [
      { id: 'C-04', description: 'Ajustar cálculo muestral con soporte de bioestadística', responsible: 'Jorge Benavides', dueDate: '2026-10-24', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-04',
    institutionalId: 'THS-2026-CS-043',
    title: 'Logística Inversa y Huella de Carbono en Cadenas de Suministro del Sector Retail',
    cohort: '2026-I',
    thematicLine: 'Operaciones y Cadena de Suministro',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    student: 'Camila Quispe',
    studentEmail: 'camila.quispe@universidad.edu.pe',
    tutor: 'Dr. Carlos Gutiérrez',
    tutorId: 'TUT-01',
    targetDate: '15 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-08-30' },
      { status: 'aprobado', date: '2026-09-30' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-05', version: 'v1.2', filename: 'Diseno_Metodologico_Logistica_v1.2.pdf', stageId: 3, uploadedBy: 'Camila Quispe', date: '2026-10-11', size: '2.1 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '30/09/2026 14:00',
        author: 'Dr. Carlos Gutiérrez (Tutor)',
        action: 'Aprobación Formal: Marco Teórico',
        notes: 'Marco teórico aprobado con 85 fuentes indexadas analizadas. Se habilita etapa de Metodología.',
        milestone: 'Validación de instrumentos de medición de huella de carbono',
        deadline: '20/10/2026'
      }
    ],
    commitments: [
      { id: 'C-05', description: 'Validación por juicio de 3 expertos de la encuesta logística', responsible: 'Camila Quispe', dueDate: '2026-10-25', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-05',
    institutionalId: 'THS-2026-IA-016',
    title: 'Visión Computacional Aplicada a la Clasificación de Residuos Sólidos Urbanos',
    cohort: '2026-I',
    thematicLine: 'Inteligencia Artificial y Sostenibilidad',
    department: 'Facultad de Ingeniería de Sistemas',
    student: 'Diego Fernando Morales',
    studentEmail: 'diego.morales@universidad.edu.pe',
    tutor: 'Dra. Elena Ramos',
    tutorId: 'TUT-02',
    targetDate: '05 de diciembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-06', version: 'v1.0', filename: 'Protocolo_Vision_Residuos_v1.0.pdf', stageId: 1, uploadedBy: 'Diego Fernando Morales', date: '2026-10-13', size: '4.2 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '13/10/2026 17:00',
        author: 'Diego Fernando Morales (Estudiante)',
        action: 'Carga de Protocolo Completo',
        notes: 'Entrega formal de protocolo con 14 criterios de Gate 0 validados y conjunto de datos de prueba preseleccionado.',
        milestone: 'Dictamen de Gate 0 por tutora',
        deadline: '18/10/2026'
      }
    ],
    commitments: [
      { id: 'C-06', description: 'Dictamen formal y revisión de arquitectura YOLOv8 adaptada', responsible: 'Dra. Elena Ramos', dueDate: '2026-10-18', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-06',
    institutionalId: 'THS-2026-SP-009',
    title: 'Prevalencia del Síndrome de Burnout en Personal de Enfermería de Unidades de Cuidados Intensivos',
    cohort: '2026-I',
    thematicLine: 'Salud Ocupacional',
    department: 'Facultad de Ciencias de la Salud',
    student: 'Andrea Castillo',
    studentEmail: 'andrea.castillo@universidad.edu.pe',
    tutor: 'Dra. Sofía Mendoza',
    tutorId: 'TUT-03',
    targetDate: '15 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-08-15' },
      { status: 'aprobado', date: '2026-09-10' },
      { status: 'aprobado', date: '2026-10-01' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-07', version: 'v1.0', filename: 'Base_Datos_Recoleccion_MBI_v1.0.xlsx', stageId: 4, uploadedBy: 'Andrea Castillo', date: '2026-10-12', size: '1.2 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '01/10/2026 10:00',
        author: 'Dra. Sofía Mendoza (Tutor)',
        action: 'Aprobación Formal: Metodología',
        notes: 'Protocolo de bioética y aplicación del inventario MBI aprobados. Habilitada fase de Recolección de campo.',
        milestone: 'Finalización de encuestas en los 3 hospitales seleccionados',
        deadline: '20/10/2026'
      }
    ],
    commitments: [
      { id: 'C-07', description: 'Cierre del levantamiento de 120 encuestas hospitalarias', responsible: 'Andrea Castillo', dueDate: '2026-10-22', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-07',
    institutionalId: 'THS-2026-CS-044',
    title: 'Transformación Digital y Resiliencia Financiera en Microfinancieras Populares',
    cohort: '2026-I',
    thematicLine: 'Finanzas Inclusivas y Tecnología',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    student: 'Gabriel Navarro',
    studentEmail: 'gabriel.navarro@universidad.edu.pe',
    tutor: 'Dr. Carlos Gutiérrez',
    tutorId: 'TUT-01',
    targetDate: '28 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(13),
    phase0Steps: buildDefaultPhase0(16),
    evidences: [
      { id: 'EV-08', version: 'v1.0', filename: 'Propuesta_Microfinanzas_v1.0.pdf', stageId: 1, uploadedBy: 'Gabriel Navarro', date: '2026-10-09', size: '2.5 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '09/10/2026 15:30',
        author: 'Gabriel Navarro (Estudiante)',
        action: 'Carga de Propuesta Inicial',
        notes: 'Avance con 13 criterios conformes; completando rúbrica Q-04 para revisión de tutor.',
        milestone: 'Subsanación de control de versiones',
        deadline: '19/10/2026'
      }
    ],
    commitments: [
      { id: 'C-08', description: 'Incorporar repositorio base en GitHub para control de cambios', responsible: 'Gabriel Navarro', dueDate: '2026-10-19', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-08',
    institutionalId: 'THS-2026-IA-017',
    title: 'Optimización de Rutas de Transporte Público Basada en Grafos Temporales y Tráfico en Tiempo Real',
    cohort: '2026-I',
    thematicLine: 'Ciudades Inteligentes y Movilidad',
    department: 'Facultad de Ingeniería de Sistemas',
    student: 'Mariana Silva',
    studentEmail: 'mariana.silva@universidad.edu.pe',
    tutor: 'Dra. Elena Ramos',
    tutorId: 'TUT-02',
    targetDate: '10 de diciembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-09-01' },
      { status: 'aprobado', date: '2026-10-05' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-09', version: 'v1.0', filename: 'Metodologia_Grafos_Temporales_v1.0.pdf', stageId: 3, uploadedBy: 'Mariana Silva', date: '2026-10-10', size: '3.1 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '05/10/2026 11:00',
        author: 'Dra. Elena Ramos (Tutor)',
        action: 'Aprobación Formal: Marco Teórico',
        notes: 'Excelente revisión bibliográfica sobre algoritmos de caminos mínimos dinámicos.',
        milestone: 'Definición de dataset abierto de telemetría GPS',
        deadline: '25/10/2026'
      }
    ],
    commitments: [
      { id: 'C-09', description: 'Validar ingesta de datos GTFS con el consorcio de transporte', responsible: 'Mariana Silva', dueDate: '2026-10-25', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-09',
    institutionalId: 'THS-2026-SP-010',
    title: 'Evaluación del Estado Nutricional y Rendimiento Cognitivo en Escolares de Zonas Periurbanas',
    cohort: '2026-I',
    thematicLine: 'Nutrición y Salud Infantil',
    department: 'Facultad de Ciencias de la Salud',
    student: 'Renato Cárdenas',
    studentEmail: 'renato.cardenas@universidad.edu.pe',
    tutor: 'Dra. Sofía Mendoza',
    tutorId: 'TUT-03',
    targetDate: '18 de diciembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(11),
    phase0Steps: buildDefaultPhase0(14),
    evidences: [
      { id: 'EV-10', version: 'v1.0', filename: 'Protocolo_Nutricion_Escolar_v1.0.pdf', stageId: 1, uploadedBy: 'Renato Cárdenas', date: '2026-10-11', size: '1.7 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '11/10/2026 12:15',
        author: 'Renato Cárdenas (Estudiante)',
        action: 'Carga de Protocolo Inicial',
        notes: 'Protocolo preliminar presentado para revisión de criterios antropométricos.',
        milestone: 'Alineación de objetivos con tutor',
        deadline: '20/10/2026'
      }
    ],
    commitments: [
      { id: 'C-10', description: 'Ajustar consentimiento informado según normativa del comité de ética', responsible: 'Renato Cárdenas', dueDate: '2026-10-20', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-10',
    institutionalId: 'THS-2026-CS-045',
    title: 'Cultura Organizacional e Innovación Abierta en Startups de Base Tecnológica',
    cohort: '2026-I',
    thematicLine: 'Gestión de la Innovación',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    student: 'Valeria Montero',
    studentEmail: 'valeria.montero@universidad.edu.pe',
    tutor: 'Dr. Carlos Gutiérrez',
    tutorId: 'TUT-01',
    targetDate: '22 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-08-20' },
      { status: 'aprobado', date: '2026-09-18' },
      { status: 'aprobado', date: '2026-10-02' },
      { status: 'aprobado', date: '2026-10-12' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-11', version: 'v1.0', filename: 'Resultados_Empiricos_Startups_v1.0.pdf', stageId: 5, uploadedBy: 'Valeria Montero', date: '2026-10-13', size: '3.4 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '12/10/2026 16:00',
        author: 'Dr. Carlos Gutiérrez (Tutor)',
        action: 'Aprobación Formal: Recolección',
        notes: 'Se completaron las 45 entrevistas a fundadores de startups. Se autoriza inicio de etapa de Análisis.',
        milestone: 'Codificación temática de entrevistas cualitativas',
        deadline: '26/10/2026'
      }
    ],
    commitments: [
      { id: 'C-11', description: 'Entregar matriz de triangulación de datos cualitativos', responsible: 'Valeria Montero', dueDate: '2026-10-26', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-11',
    institutionalId: 'THS-2026-IA-018',
    title: 'Ciberseguridad y Detección de Amenazas en Entornos IoT Industriales Mediante Aprendizaje Federado',
    cohort: '2026-I',
    thematicLine: 'Seguridad de la Información y Redes',
    department: 'Facultad de Ingeniería de Sistemas',
    student: 'Álvaro Paredes',
    studentEmail: 'alvaro.paredes@universidad.edu.pe',
    tutor: 'Dra. Elena Ramos',
    tutorId: 'TUT-02',
    targetDate: '15 de diciembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-09-08' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-12', version: 'v1.0', filename: 'Marco_Teorico_Federated_Learning_v1.0.pdf', stageId: 2, uploadedBy: 'Álvaro Paredes', date: '2026-10-09', size: '2.8 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '08/09/2026 15:00',
        author: 'Dra. Elena Ramos (Tutor)',
        action: 'Aprobación Formal: Propuesta / Protocolo',
        notes: 'Protocolo de investigación validado con aprobación de alcance metodológico.',
        milestone: 'Revisión sistemática de arquitecturas de federated learning',
        deadline: '20/10/2026'
      }
    ],
    commitments: [
      { id: 'C-12', description: 'Presentar comparación de frameworks Flower y PySyft', responsible: 'Álvaro Paredes', dueDate: '2026-10-20', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-12',
    institutionalId: 'THS-2026-SP-011',
    title: 'Efectividad de la Telemedicina en el Seguimiento de Pacientes con Hipertensión Arterial Primaria',
    cohort: '2026-I',
    thematicLine: 'Salud Digital y Cronicidad',
    department: 'Facultad de Ciencias de la Salud',
    student: 'Patricia Zúñiga',
    studentEmail: 'patricia.zuniga@universidad.edu.pe',
    tutor: 'Dra. Sofía Mendoza',
    tutorId: 'TUT-03',
    targetDate: '20 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-08-25' },
      { status: 'aprobado', date: '2026-09-22' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-13', version: 'v1.1', filename: 'Protocolo_Clinico_Telemedicina_v1.1.pdf', stageId: 3, uploadedBy: 'Patricia Zúñiga', date: '2026-10-07', size: '2.2 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '22/09/2026 10:30',
        author: 'Dra. Sofía Mendoza (Tutor)',
        action: 'Aprobación Formal: Marco Teórico',
        notes: 'Revisión bibliográfica completada satisfactoriamente con 70 referencias indexadas.',
        milestone: 'Protocolo de intervención piloto con 60 pacientes hipertensos',
        deadline: '22/10/2026'
      }
    ],
    commitments: [
      { id: 'C-13', description: 'Aprobación formal del comité de ética del centro médico asociado', responsible: 'Patricia Zúñiga', dueDate: '2026-10-22', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-13',
    institutionalId: 'THS-2026-CS-046',
    title: 'Factores Determinantes de la Adopción de Comercio Electrónico B2B en Empresas Exportadoras',
    cohort: '2026-I',
    thematicLine: 'Comercio Internacional y Negocios Digitales',
    department: 'Facultad de Ciencias Empresariales y Gestión',
    student: 'Rodrigo Espinoza',
    studentEmail: 'rodrigo.espinoza@universidad.edu.pe',
    tutor: 'Dr. Carlos Gutiérrez',
    tutorId: 'TUT-01',
    targetDate: '30 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-09-12' },
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-14', version: 'v1.0', filename: 'Borrador_Marco_Teorico_B2B_v1.0.pdf', stageId: 2, uploadedBy: 'Rodrigo Espinoza', date: '2026-10-10', size: '2.9 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '12/09/2026 17:00',
        author: 'Dr. Carlos Gutiérrez (Tutor)',
        action: 'Aprobación Formal: Protocolo Gate 0',
        notes: 'Protocolo aprobado con los 14 criterios de Gate 0 conformes.',
        milestone: 'Elaboración del marco teórico y modelo TOE',
        deadline: '24/10/2026'
      }
    ],
    commitments: [
      { id: 'C-14', description: 'Desarrollar el marco conceptual del modelo TOE (Tecnología, Organización y Entorno)', responsible: 'Rodrigo Espinoza', dueDate: '2026-10-24', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-14',
    institutionalId: 'THS-2026-IA-019',
    title: 'Detección Automatizada de Noticias Falsas en Redes Sociales Mediante Modelos Multimodales',
    cohort: '2026-I',
    thematicLine: 'Procesamiento de Lenguaje Natural y Redes Sociales',
    department: 'Facultad de Ingeniería de Sistemas',
    student: 'Natalia Huamán',
    studentEmail: 'natalia.huaman@universidad.edu.pe',
    tutor: 'Dra. Elena Ramos',
    tutorId: 'TUT-02',
    targetDate: '12 de diciembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'en_revision', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null },
      { status: 'pendiente', date: null }
    ]),
    gate0Items: buildDefaultGate0(12),
    phase0Steps: buildDefaultPhase0(15),
    evidences: [
      { id: 'EV-15', version: 'v1.0', filename: 'Protocolo_FakeNews_Multimodal_v1.0.pdf', stageId: 1, uploadedBy: 'Natalia Huamán', date: '2026-10-09', size: '3.6 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '09/10/2026 18:00',
        author: 'Natalia Huamán (Estudiante)',
        action: 'Carga de Protocolo Inicial',
        notes: 'Carga de propuesta preliminar con justificación de corpus bilingüe español-inglés.',
        milestone: 'Revisión de criterios de inclusión de bases de datos',
        deadline: '21/10/2026'
      }
    ],
    commitments: [
      { id: 'C-15', description: 'Completar tabla de verificación de sesgo en dataset de prueba', responsible: 'Natalia Huamán', dueDate: '2026-10-21', status: 'pendiente' }
    ]
  },
  {
    id: 'PRJ-15',
    institutionalId: 'THS-2026-SP-012',
    title: 'Calidad de Vida Relacionada con la Salud en Adultos Mayores con Enfermedad Renal Crónica',
    cohort: '2026-I',
    thematicLine: 'Epidemiología Clínica y Calidad de Vida',
    department: 'Facultad de Ciencias de la Salud',
    student: 'Sebastián Salazar',
    studentEmail: 'sebastian.salazar@universidad.edu.pe',
    tutor: 'Dra. Sofía Mendoza',
    tutorId: 'TUT-03',
    targetDate: '28 de noviembre de 2026',
    riskLevel: 'Bajo',
    stages: buildDefaultStages([
      { status: 'aprobado', date: '2026-08-10' },
      { status: 'aprobado', date: '2026-09-05' },
      { status: 'aprobado', date: '2026-09-28' },
      { status: 'aprobado', date: '2026-10-10' },
      { status: 'aprobado', date: '2026-10-14' },
      { status: 'en_revision', date: null }
    ]),
    gate0Items: buildDefaultGate0(14),
    phase0Steps: buildDefaultPhase0(17),
    evidences: [
      { id: 'EV-16', version: 'v1.0', filename: 'Borrador_Documento_Final_v1.0.pdf', stageId: 6, uploadedBy: 'Sebastián Salazar', date: '2026-10-14', size: '5.1 MB' }
    ],
    decisionLog: [
      {
        id: 1,
        timestamp: '14/10/2026 15:00',
        author: 'Dra. Sofía Mendoza (Tutor)',
        action: 'Aprobación Formal: Análisis',
        notes: 'Análisis estadístico multivariable y curvas de sobrevida aprobadas. Habilitada entrega del Documento Final.',
        milestone: 'Revisión final de redacción y reporte de similitud Turnitin',
        deadline: '30/10/2026'
      }
    ],
    commitments: [
      { id: 'C-16', description: 'Revisión editorial completa y control antiplagio (<10%)', responsible: 'Sebastián Salazar', dueDate: '2026-10-30', status: 'pendiente' }
    ]
  }
];
