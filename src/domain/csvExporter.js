/**
 * Exportador de Ficha y Bitacora a Formato CSV Compatible con Excel
 * Cumple con QA-19 y CA-09:
 * 1. Codificacion UTF-8 BOM (\uFEFF) para visualizacion nativa de tildes en Excel.
 * 2. Mitigacion de inyeccion de formulas: neutraliza campos que inician con =, +, -, @ anteponiendo apostrofe.
 */

export function sanitizeCSVValue(val) {
  if (val === null || val === undefined) return '""';
  let str = String(val).trim();
  
  // Mitigacion de formula injection
  if (/^[=+\-@]/.test(str)) {
    str = `'${str}`;
  }
  
  // Escapar comillas dobles internas
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
}

export function exportProjectToCSV(project) {
  let csv = '\uFEFF'; // UTF-8 BOM

  // 1. Cabecera y Metadatos Institucionales (Dublin Core)
  csv += 'FICHA INSTITUCIONAL DE SEGUIMIENTO ACADÉMICO DE TRABAJOS DE GRADO\n';
  csv += 'Estándar Metodológico Fase 0 & Auditoría de Calidad Gate 0 (6 Etapas)\n\n';

  csv += `Código del Proyecto,${sanitizeCSVValue(project.id || project.institutionalId)}\n`;
  csv += `Título de la Investigación,${sanitizeCSVValue(project.title)}\n`;
  csv += `Estudiante Investigador,${sanitizeCSVValue(project.student)}\n`;
  csv += `Tutor / Asesor Principal,${sanitizeCSVValue(project.tutor)}\n`;
  csv += `Cohorte Académica,${sanitizeCSVValue(project.cohort)}\n`;
  csv += `Línea Temática,${sanitizeCSVValue(project.thematicLine)}\n`;
  csv += `Facultad / Departamento,${sanitizeCSVValue(project.department)}\n`;
  csv += `Fecha Objetivo de Conclusión,${sanitizeCSVValue(project.targetDate || project.targetDefenseDate)}\n`;
  csv += `Nivel de Riesgo Académico,${sanitizeCSVValue(project.riskLevel || 'Bajo')}\n`;
  
  const approvedStages = (project.stages || []).filter(s => s.status === 'aprobado').length;
  const progressPct = Math.round((approvedStages / 6) * 100);
  csv += `Progreso Global del Trabajo,${sanitizeCSVValue(`${progressPct}% (${approvedStages}/6 etapas aprobadas)`)}\n\n`;

  // 2. Tabla de las 6 Etapas
  csv += '--- MATRIZ DE ETAPAS DEL TRABAJO DE GRADO (6 ETAPAS) ---\n';
  csv += 'Nº Etapa,Nombre de Etapa,Estado Actual,Fecha de Aprobación,Descripción Académica\n';
  (project.stages || []).forEach(stage => {
    csv += `${stage.id},${sanitizeCSVValue(stage.name)},${sanitizeCSVValue(stage.status)},${sanitizeCSVValue(stage.date || 'Pendiente')},${sanitizeCSVValue(stage.description)}\n`;
  });
  csv += '\n';

  // 3. Tabla de Auditoría Gate 0 (14 Criterios)
  csv += '--- PROTOCOLO DE AUDITORÍA GATE 0 (14 CRITERIOS DE SALIDA) ---\n';
  csv += 'Código,Criterio Evaluado,Categoría,Estado de Verificación\n';
  (project.gate0Items || []).forEach(item => {
    csv += `${sanitizeCSVValue(item.id)},${sanitizeCSVValue(item.label)},${sanitizeCSVValue(item.category)},${sanitizeCSVValue(item.checked ? 'CONFORME' : 'PENDIENTE')}\n`;
  });
  const gate0Completed = (project.gate0Items || []).filter(i => i.checked).length;
  csv += `Dictamen Gate 0,${sanitizeCSVValue(gate0Completed === 14 ? '14/14 Criterios Verificados (Listo para Aprobación)' : `${gate0Completed}/14 Criterios - Observaciones Pendientes`)}\n\n`;

  // 4. Tabla de las 17 Actividades de Fase 0
  csv += '--- GUÍA METODOLÓGICA FASE 0 (17 ACTIVIDADES CONSECUTIVAS) ---\n';
  csv += 'Paso Nº,Actividad Metodológica,Resultado Esperado,Estado\n';
  (project.phase0Steps || []).forEach(step => {
    csv += `${step.number},${sanitizeCSVValue(step.name)},${sanitizeCSVValue(step.expectedResult)},${sanitizeCSVValue(step.completed ? 'COMPLETADO' : 'PENDIENTE')}\n`;
  });
  csv += '\n';

  // 5. Bitácora de Trazabilidad y Decisiones
  csv += '--- BITÁCORA Y TRAZABILIDAD ACADÉMICA ---\n';
  csv += 'ID,Fecha y Hora,Autor,Acción Realizada,Observaciones / Acuerdos,Hito Asociado,Fecha Límite\n';
  (project.decisionLog || []).forEach(log => {
    csv += `${log.id},${sanitizeCSVValue(log.timestamp)},${sanitizeCSVValue(log.author)},${sanitizeCSVValue(log.action)},${sanitizeCSVValue(log.notes)},${sanitizeCSVValue(log.milestone || '-')},${sanitizeCSVValue(log.deadline || '-')}\n`;
  });
  csv += '\n';

  // 6. Compromisos y Acuerdos
  csv += '--- COMPROMISOS Y ACUERDOS ACADÉMICOS ---\n';
  csv += 'ID,Descripción del Compromiso,Responsable,Fecha Límite,Estado\n';
  (project.commitments || []).forEach(c => {
    csv += `${c.id},${sanitizeCSVValue(c.description)},${sanitizeCSVValue(c.responsible)},${sanitizeCSVValue(c.dueDate)},${sanitizeCSVValue(c.status)}\n`;
  });

  return csv;
}

export function downloadCSV(filename, csvContent) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
