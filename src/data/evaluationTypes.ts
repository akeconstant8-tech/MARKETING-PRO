import type { EvaluationType } from '../types';

/** Shared between Evaluations.tsx (creation form) and Grades.tsx (grade
 * entry) so the label/color/default note base for a given type is defined
 * in exactly one place. */
export const EVALUATION_TYPE_LABELS: Record<EvaluationType, string> = {
  devoir: 'Devoir',
  interrogation: 'Interrogation',
  examen: 'Examen',
  controle_continu: 'Controle continu',
  projet: 'Projet',
  expose: 'Expose',
  etude_de_cas: 'Etude de cas',
  evaluation_niveau: 'Evaluation de niveau',
  bts_blanc: 'BTS Blanc',
};

export const EVALUATION_TYPE_TONES: Record<EvaluationType, string> = {
  devoir: 'blue',
  interrogation: 'orange',
  examen: 'red',
  controle_continu: 'purple',
  projet: 'teal',
  expose: 'green',
  etude_de_cas: 'indigo',
  evaluation_niveau: 'blue',
  bts_blanc: 'red',
};

/** Fixed notation base for these three types (5/10 = 10/20, per the
 * teacher's grading policy) — other types keep a freely editable noteMax. */
export const EVALUATION_TYPE_DEFAULT_NOTE_MAX: Partial<Record<EvaluationType, number>> = {
  interrogation: 10,
  evaluation_niveau: 20,
  bts_blanc: 20,
};
