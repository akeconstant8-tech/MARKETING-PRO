import { useMemo } from 'react';
import { useTeacherCollection } from './useTeacherCollection';
import { computeAverage, normalizeNote } from '../utils/calculations';
import type { Grade, Student, Subject } from '../types';

export interface BulletinSubjectRow {
  subject: Subject;
  notes: { note: number; noteMax: number }[];
  average: number | null;
}

export interface BulletinStudent {
  student: Student;
  subjectRows: BulletinSubjectRow[];
  generalAverage: number | null;
}

/**
 * Per-student, per-subject average for a class — the shape a bulletin needs
 * and useCohortStats.ts doesn't provide (it only exposes one aggregated
 * average per student). Built on the exact same primitives
 * (computeAverage/normalizeNote) so results always match the rest of the
 * app; useCohortStats.ts itself is untouched. Reads the class's real
 * Subject documents (and their real, possibly teacher-edited coefficients),
 * not the static preconfigured group list.
 */
export function useBulletinData(classeId: string | null) {
  const { items: students, loading: loadingStudents } = useTeacherCollection<Student>('students', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: grades, loading: loadingGrades } = useTeacherCollection<Grade>('grades', 'studentId');
  const loading = loadingStudents || loadingSubjects || loadingGrades;

  const classStudents = useMemo(
    () =>
      students
        .filter((s) => s.classeId === classeId)
        .sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)),
    [students, classeId]
  );

  const classSubjects = useMemo(() => subjects.filter((s) => s.classeId === classeId), [subjects, classeId]);

  const gradesByStudent = useMemo(() => {
    const map = new Map<string, Grade[]>();
    for (const g of grades) {
      map.set(g.studentId, [...(map.get(g.studentId) ?? []), g]);
    }
    return map;
  }, [grades]);

  const bulletins: BulletinStudent[] = useMemo(() => {
    return classStudents.map((student) => {
      const studentGrades = gradesByStudent.get(student.id) ?? [];

      const subjectRows: BulletinSubjectRow[] = classSubjects.map((subject) => {
        const subjectGrades = studentGrades.filter((g) => g.subjectId === subject.id);
        const average = computeAverage(
          subjectGrades.map((g) => ({ note: normalizeNote(g.note, g.noteMax), coefficient: g.coefficient }))
        );
        return {
          subject,
          notes: subjectGrades.map((g) => ({ note: g.note, noteMax: g.noteMax })),
          average,
        };
      });

      const generalAverage = computeAverage(
        subjectRows
          .filter((r) => r.average !== null)
          .map((r) => ({ note: r.average as number, coefficient: r.subject.coefficient }))
      );

      return { student, subjectRows, generalAverage };
    });
  }, [classStudents, classSubjects, gradesByStudent]);

  return { loading, classSubjects, bulletins };
}
