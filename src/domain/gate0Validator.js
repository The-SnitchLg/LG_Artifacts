/**
 * Validador de Auditoria Gate 0 (14 Criterios Oficiales)
 * Regla de negocio: 14/14 conformes habilita decision manual del tutor; NUNCA auto-aprueba.
 */

export function validateGate0(gate0Items = []) {
  const total = 14;
  const completedItems = gate0Items.filter(item => item.checked);
  const completedCount = completedItems.length;
  const missingItems = gate0Items.filter(item => !item.checked);
  const isFullyCompliant = completedCount === total;

  return {
    total,
    completedCount,
    isFullyCompliant,
    missingCount: total - completedCount,
    missingItems,
    compliancePercentage: Math.round((completedCount / total) * 100),
    statusMessage: isFullyCompliant
      ? '14/14 criterios conformes. Protocolo listo para dictamen explícito del tutor.'
      : `Pendiente: ${total - completedCount} criterio(s) por verificar.`
  };
}
