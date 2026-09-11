/** Appreciation thresholds for a /20 average. Edit this table only to change
 * the wording or the cutoffs — every print document reads from here. The
 * teacher can still override the generated text by hand before printing;
 * this table only supplies the starting suggestion. */
export const APPRECIATION_SCALE: { min: number; max: number; label: string }[] = [
  { min: 0, max: 5, label: 'Tres insuffisant' },
  { min: 5, max: 10, label: 'Insuffisant' },
  { min: 10, max: 12, label: 'Passable' },
  { min: 12, max: 14, label: 'Assez bien' },
  { min: 14, max: 16, label: 'Bien' },
  { min: 16, max: 18, label: 'Tres bien' },
  { min: 18, max: 20, label: 'Excellent' },
];

export function getAppreciation(average: number): string {
  const tier = APPRECIATION_SCALE.find((t, i) => average >= t.min && (average < t.max || i === APPRECIATION_SCALE.length - 1));
  return tier?.label ?? '';
}
