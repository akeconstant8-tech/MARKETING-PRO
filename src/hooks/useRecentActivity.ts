import { useMemo } from 'react';
import { useTeacherCollection } from './useTeacherCollection';
import type { Class, Course, Filiere, Subject } from '../types';

export interface ActivityItem {
  id: string;
  date: Date;
  action: string;
  element: string;
}

/** Every row here comes from a real `createdAt`/`uploadedAt` timestamp
 * already written to Firestore — nothing here is synthesized. Records
 * written before these fields existed simply don't appear, which is
 * correct: there is no real timestamp to show for them. */
export function useRecentActivity(limit = 5) {
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: courses, loading: loadingCourses } = useTeacherCollection<Course>('courses', 'titre');

  const loading = loadingFilieres || loadingClasses || loadingSubjects || loadingCourses;

  const items = useMemo(() => {
    const list: ActivityItem[] = [];

    for (const f of filieres) {
      if (!f.createdAt) continue;
      list.push({ id: `filiere-${f.id}`, date: new Date(f.createdAt), action: 'Filiere ajoutee', element: f.nom });
    }
    for (const c of classes) {
      if (!c.createdAt) continue;
      list.push({ id: `classe-${c.id}`, date: new Date(c.createdAt), action: 'Classe ajoutee', element: c.nom });
    }
    for (const s of subjects) {
      if (!s.createdAt) continue;
      list.push({ id: `subject-${s.id}`, date: new Date(s.createdAt), action: 'Matiere ajoutee', element: s.nom });
    }
    for (const c of courses) {
      if (c.createdAt) {
        list.push({ id: `course-${c.id}`, date: new Date(c.createdAt), action: 'Cours cree', element: c.titre });
      }
      for (const a of c.attachments ?? []) {
        list.push({
          id: `attachment-${a.storagePath}`,
          date: new Date(a.uploadedAt),
          action: 'Document ajoute',
          element: a.name,
        });
      }
    }

    return list
      .filter((item) => !Number.isNaN(item.date.getTime()))
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
  }, [filieres, classes, subjects, courses, limit]);

  return { items, loading };
}
