import { useMemo } from 'react';
import { useTeacherCollection } from './useTeacherCollection';
import { computeAverage, computeSimpleAverage, normalizeNote } from '../utils/calculations';
import type { Grade, Student, Subject } from '../types';

const PASSING_AVERAGE = 10;

export interface StudentResult {
  student: Student;
  generalAverage: number;
}

interface SubjectStat {
  subject: Subject;
  average: number;
}

/**
 * Shared cohort-wide grade aggregation (moyenne generale, taux de reussite,
 * moyenne par matiere, etc.) used by both the Dashboard and the Performance
 * page so the formulas live in exactly one place.
 */
export function useCohortStats(classId?: string) {
  const { items: students, loading: loadingStudents } = useTeacherCollection<Student>('students', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: grades, loading: loadingGrades } = useTeacherCollection<Grade>('grades', 'studentId');

  const scopedStudents = useMemo(
    () => students.filter((s) => !classId || s.classeId === classId),
    [students, classId]
  );

  const gradesByStudent = useMemo(() => {
    const map = new Map<string, Grade[]>();
    for (const grade of grades) {
      map.set(grade.studentId, [...(map.get(grade.studentId) ?? []), grade]);
    }
    return map;
  }, [grades]);

  const results: StudentResult[] = useMemo(() => {
    return scopedStudents
      .map((student) => {
        const studentGrades = gradesByStudent.get(student.id) ?? [];
        const bySubject = new Map<string, { note: number; coefficient: number }[]>();
        for (const grade of studentGrades) {
          const normalized = { note: normalizeNote(grade.note, grade.noteMax), coefficient: grade.coefficient };
          bySubject.set(grade.subjectId, [...(bySubject.get(grade.subjectId) ?? []), normalized]);
        }
        const subjectAverages = Array.from(bySubject.entries())
          .map(([subjectId, items]) => ({
            subjectId,
            coefficient: subjects.find((s) => s.id === subjectId)?.coefficient ?? 1,
            average: computeAverage(items),
          }))
          .filter((entry): entry is { subjectId: string; coefficient: number; average: number } => entry.average !== null);

        const generalAverage = computeAverage(
          subjectAverages.map((entry) => ({ note: entry.average, coefficient: entry.coefficient }))
        );
        return generalAverage !== null ? { student, generalAverage } : null;
      })
      .filter((r): r is StudentResult => r !== null);
  }, [scopedStudents, gradesByStudent, subjects]);

  const studentAverages = useMemo(() => {
    const map = new Map<string, number>();
    for (const result of results) {
      map.set(result.student.id, result.generalAverage);
    }
    return map;
  }, [results]);

  const subjectStats: SubjectStat[] = useMemo(() => {
    return subjects
      .map((subject) => {
        const averages = scopedStudents
          .map((student) => {
            const studentGrades = (gradesByStudent.get(student.id) ?? []).filter((g) => g.subjectId === subject.id);
            if (studentGrades.length === 0) return null;
            return computeAverage(
              studentGrades.map((g) => ({ note: normalizeNote(g.note, g.noteMax), coefficient: g.coefficient }))
            );
          })
          .filter((v): v is number => v !== null);
        return { subject, average: computeSimpleAverage(averages) };
      })
      .filter((entry): entry is SubjectStat => entry.average !== null);
  }, [subjects, scopedStudents, gradesByStudent]);

  const generalAverage = computeSimpleAverage(results.map((r) => r.generalAverage));
  const successCount = results.filter((r) => r.generalAverage >= PASSING_AVERAGE).length;
  const successRate = results.length > 0 ? (successCount / results.length) * 100 : null;

  const strugglingStudents = [...results]
    .filter((r) => r.generalAverage < PASSING_AVERAGE)
    .sort((a, b) => a.generalAverage - b.generalAverage);

  const topStudents = [...results].sort((a, b) => b.generalAverage - a.generalAverage);

  return {
    loading: loadingStudents || loadingSubjects || loadingGrades,
    results,
    studentAverages,
    subjectStats,
    generalAverage,
    successRate,
    strugglingStudents,
    topStudents,
  };
}
