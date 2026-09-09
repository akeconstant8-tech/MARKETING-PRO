import { useMemo, useState } from 'react';
import { FileText, FolderOpen } from 'lucide-react';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import PdfFlipViewer from '../components/PdfFlipViewer';
import type { Course, CourseAttachment, Subject } from '../types';
import './Resources.css';

interface ResourceRow {
  attachment: CourseAttachment;
  courseTitle: string;
  subjectName: string;
}

export default function Resources() {
  const { items: courses, loading: loadingCourses } = useTeacherCollection<Course>('courses', 'titre');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const [filterSubjectId, setFilterSubjectId] = useState('all');
  const [viewer, setViewer] = useState<{ url: string; title: string } | null>(null);

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const loading = loadingCourses || loadingSubjects;

  const rows: ResourceRow[] = useMemo(() => {
    const list: ResourceRow[] = [];
    for (const course of courses) {
      if (filterSubjectId !== 'all' && course.subjectId !== filterSubjectId) continue;
      for (const attachment of course.attachments ?? []) {
        list.push({
          attachment,
          courseTitle: course.titre,
          subjectName: subjectById.get(course.subjectId)?.nom ?? 'Matiere inconnue',
        });
      }
    }
    return list;
  }, [courses, subjectById, filterSubjectId]);

  const subjectsWithCourses = useMemo(
    () => subjects.filter((s) => courses.some((c) => c.subjectId === s.id && (c.attachments ?? []).length > 0)),
    [subjects, courses]
  );

  function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  }

  return (
    <div className="resources-page fade-in-up">
      <div className="resources-header">
        <div>
          <h2 className="resources-title">Ma bibliotheque</h2>
          <p className="resources-subtitle">Tous les documents attaches a vos cours, au meme endroit.</p>
        </div>
      </div>

      {subjectsWithCourses.length > 0 ? (
        <div className="resources-filters">
          <button
            className={`resources-filter-chip ${filterSubjectId === 'all' ? 'resources-filter-chip-active' : ''}`}
            onClick={() => setFilterSubjectId('all')}
          >
            Toutes les matieres
          </button>
          {subjectsWithCourses.map((s) => (
            <button
              key={s.id}
              className={`resources-filter-chip ${filterSubjectId === s.id ? 'resources-filter-chip-active' : ''}`}
              onClick={() => setFilterSubjectId(s.id)}
            >
              {s.nom}
            </button>
          ))}
        </div>
      ) : null}

      {loading ? (
        <p className="resources-empty">Chargement...</p>
      ) : rows.length === 0 ? (
        <div className="resources-empty-state">
          <FolderOpen size={32} color="var(--color-text-secondary)" />
          <p>
            Aucun document pour le moment. Ajoutez des PDF a vos cours depuis la page{' '}
            <strong>Mes cours</strong> — ils apparaitront automatiquement ici.
          </p>
        </div>
      ) : (
        <div className="resources-list">
          {rows.map((row, i) => (
            <button
              key={row.attachment.storagePath}
              className="resources-row fade-in-up"
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => setViewer({ url: row.attachment.url, title: row.attachment.name })}
            >
              <div className="resources-row-icon">
                <FileText size={18} />
              </div>
              <div className="resources-row-info">
                <span className="resources-row-name">{row.attachment.name}</span>
                <span className="resources-row-meta">
                  {row.subjectName} · {row.courseTitle} · {formatSize(row.attachment.size)}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {viewer ? <PdfFlipViewer url={viewer.url} title={viewer.title} onClose={() => setViewer(null)} /> : null}
    </div>
  );
}
