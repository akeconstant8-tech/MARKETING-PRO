export interface SearchResult {
  id: string;
  label: string;
  kind: 'Etudiant' | 'Classe' | 'Matiere' | 'Cours';
  to: string;
}

interface Sources {
  students: Array<{ id: string; prenom: string; nom: string }>;
  classes: Array<{ id: string; nom: string }>;
  subjects: Array<{ id: string; nom: string }>;
  courses: Array<{ id: string; titre: string }>;
}

/** Recherche insensible à la casse dans les étudiants, classes, matières et cours. */
export function searchEntities(rawTerm: string, { students, classes, subjects, courses }: Sources, limit = 8): SearchResult[] {
  const term = rawTerm.trim().toLowerCase();
  if (!term) return [];

  const results: SearchResult[] = [];
  for (const s of students) {
    if (`${s.prenom} ${s.nom}`.toLowerCase().includes(term)) {
      results.push({ id: `student-${s.id}`, label: `${s.prenom} ${s.nom}`, kind: 'Etudiant', to: '/students' });
    }
  }
  for (const c of classes) {
    if (c.nom.toLowerCase().includes(term)) results.push({ id: `class-${c.id}`, label: c.nom, kind: 'Classe', to: '/classes' });
  }
  for (const s of subjects) {
    if (s.nom.toLowerCase().includes(term)) results.push({ id: `subject-${s.id}`, label: s.nom, kind: 'Matiere', to: '/subjects' });
  }
  for (const c of courses) {
    if (c.titre.toLowerCase().includes(term)) results.push({ id: `course-${c.id}`, label: c.titre, kind: 'Cours', to: '/courses' });
  }
  return results.slice(0, limit);
}
