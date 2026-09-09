interface WeightedValue {
  note: number;
  coefficient: number;
}

/** Moyenne = Sum(Note x Coefficient) / Sum(Coefficients) */
export function computeAverage(items: WeightedValue[]): number | null {
  if (items.length === 0) return null;

  const totalCoefficient = items.reduce((sum, item) => sum + item.coefficient, 0);
  if (totalCoefficient === 0) return null;

  const weightedSum = items.reduce((sum, item) => sum + item.note * item.coefficient, 0);
  return weightedSum / totalCoefficient;
}

/** Simple (unweighted) mean — used for a single evaluation's class average. */
export function computeSimpleAverage(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

const STANDARD_SCALE = 20;

/**
 * Evaluations can use different scales (a quiz /10, an exam /20). Grades must
 * be normalized to a common scale before being combined, otherwise a raw
 * weighted average silently mixes incompatible numbers.
 */
export function normalizeNote(note: number, noteMax: number): number {
  if (noteMax === 0) return 0;
  return (note / noteMax) * STANDARD_SCALE;
}
