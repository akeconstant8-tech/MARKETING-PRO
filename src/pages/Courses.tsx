import { useMemo, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { BookOpen, FileText, Plus, Trash2, Upload, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useViewedChapters } from '../hooks/useViewedChapters';
import { addTeacherDoc, deleteTeacherDoc, updateTeacherDoc } from '../services/dataService';
import { deleteCourseAttachment, uploadCourseAttachment } from '../services/storageService';
import Button from '../components/Button';
import Skeleton from '../components/Skeleton';
import TiltCard from '../components/TiltCard';
import ChapterCard from '../components/ChapterCard';
import PdfFlipViewer from '../components/PdfFlipViewer';
import TeachingReader from '../components/TeachingReader';
import { tciChapters, TCI_COURSE_SUBTITLE, TCI_COURSE_TITLE } from '../data/tciCourse';
import type { Course, CourseAttachment, Subject } from '../types';
import './Courses.css';

export default function Courses() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: courses, loading: loadingCourses } = useTeacherCollection<Course>('courses', 'titre');
  const { viewed, markViewed } = useViewedChapters();

  const [showForm, setShowForm] = useState(false);
  const [titre, setTitre] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [chapitre, setChapitre] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [viewerAttachment, setViewerAttachment] = useState<{ url: string; title: string } | null>(null);
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const loading = loadingSubjects || loadingCourses;

  async function handleCreateCourse(e: FormEvent) {
    e.preventDefault();
    if (!user || !subjectId || !titre.trim()) return;
    const subject = subjectById.get(subjectId);
    setSaving(true);
    try {
      await addTeacherDoc('courses', {
        teacherId: user.uid,
        titre: titre.trim(),
        subjectId,
        classeId: subject?.classeId ?? '',
        chapitre: chapitre.trim() || null,
        attachments: [],
        createdAt: new Date().toISOString(),
      });
      showToast('success', 'Cours cree.');
      setTitre('');
      setSubjectId('');
      setChapitre('');
      setShowForm(false);
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la creation du cours.');
    } finally {
      setSaving(false);
    }
  }

  async function handleFileSelected(course: Course, file: File | undefined) {
    if (!file || !user) return;
    if (file.type !== 'application/pdf') {
      showToast('warning', 'Seuls les fichiers PDF sont acceptes pour le moment.');
      return;
    }
    setUploadingId(course.id);
    try {
      const attachment = await uploadCourseAttachment(user.uid, course.id, file);
      await updateTeacherDoc('courses', course.id, { attachments: [...(course.attachments ?? []), attachment] });
      showToast('success', 'Document ajoute.');
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de l'envoi. Verifiez que Firebase Storage est active pour ce projet.");
    } finally {
      setUploadingId(null);
    }
  }

  async function handleDeleteAttachment(course: Course, attachment: CourseAttachment) {
    if (!window.confirm(`Supprimer "${attachment.name}" ?`)) return;
    try {
      await deleteCourseAttachment(attachment.storagePath);
      await updateTeacherDoc('courses', course.id, {
        attachments: (course.attachments ?? []).filter((a) => a.storagePath !== attachment.storagePath),
      });
      showToast('success', 'Document supprime.');
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la suppression.');
    }
  }

  async function handleDeleteCourse(course: Course) {
    if (!window.confirm(`Supprimer le cours "${course.titre}" et tous ses documents ?`)) return;
    try {
      await Promise.all((course.attachments ?? []).map((a) => deleteCourseAttachment(a.storagePath).catch(() => {})));
      await deleteTeacherDoc('courses', course.id);
      showToast('success', 'Cours supprime.');
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la suppression.');
    }
  }

  return (
    <div className="courses-page fade-in-up">
      <div className="courses-header">
        <div>
          <h2 className="courses-title">Mes cours</h2>
          <p className="courses-subtitle">Creez vos cours et attachez vos supports de cours (PDF).</p>
        </div>
        <Button variant="primary" onClick={() => setShowForm((v) => !v)} disabled={subjects.length === 0}>
          <Plus size={18} />
          Nouveau cours
        </Button>
      </div>

      {showForm ? (
        <form className="courses-form fade-in-up" onSubmit={handleCreateCourse}>
          <div className="courses-form-row">
            <div className="courses-field">
              <label className="courses-label" htmlFor="course-titre">
                Titre du cours
              </label>
              <input
                id="course-titre"
                className="courses-input"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Ex : Les Incoterms 2020"
                required
              />
            </div>
            <div className="courses-field">
              <label className="courses-label" htmlFor="course-subject">
                Matiere
              </label>
              <select
                id="course-subject"
                className="courses-input"
                value={subjectId}
                onChange={(e) => setSubjectId(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choisir une matiere
                </option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="courses-field">
            <label className="courses-label" htmlFor="course-chapitre">
              Chapitre (optionnel)
            </label>
            <input
              id="course-chapitre"
              className="courses-input"
              value={chapitre}
              onChange={(e) => setChapitre(e.target.value)}
              placeholder="Ex : Chapitre 2 - Les Incoterms 2020"
            />
          </div>
          <div className="courses-form-actions">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" loading={saving} disabled={!titre.trim() || !subjectId}>
              Creer le cours
            </Button>
          </div>
        </form>
      ) : null}

      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {TCI_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{TCI_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {tciChapters.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>

      <h3 className="courses-section-heading">Mes cours</h3>

      {loading ? (
        <div className="courses-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="course-card">
              <Skeleton width="60%" height={16} />
              <div style={{ marginTop: 10 }}>
                <Skeleton width="40%" height={12} />
              </div>
              <div style={{ marginTop: 16 }}>
                <Skeleton height={32} radius="var(--radius-sm)" />
              </div>
            </div>
          ))}
        </div>
      ) : subjects.length === 0 ? (
        <p className="courses-empty">
          Importez d'abord votre structure pedagogique (filieres, classes, matieres) depuis Parametres.
        </p>
      ) : courses.length === 0 ? (
        <p className="courses-empty">Aucun cours pour le moment. Cliquez sur "Nouveau cours" pour commencer.</p>
      ) : (
        <div className="courses-grid">
          {courses.map((course, i) => {
            const subject = subjectById.get(course.subjectId);
            return (
              <TiltCard
                key={course.id}
                className="course-card fade-in-up"
                style={{ '--stagger-index': i } as CSSProperties}
                maxTilt={6}
              >
                <div className="course-card-header">
                  <div className="course-card-icon">
                    <BookOpen size={18} />
                  </div>
                  <button
                    className="course-card-delete"
                    onClick={() => handleDeleteCourse(course)}
                    aria-label="Supprimer le cours"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <h3 className="course-card-title">{course.titre}</h3>
                <p className="course-card-subject">{subject?.nom ?? 'Matiere inconnue'}</p>
                {course.chapitre ? <p className="course-card-chapter">{course.chapitre}</p> : null}

                {(course.attachments ?? []).length > 0 ? (
                  <div className="course-card-attachments">
                    {(course.attachments ?? []).map((a) => (
                      <div key={a.storagePath} className="course-attachment-row">
                        <button
                          className="course-attachment-open"
                          onClick={() => setViewerAttachment({ url: a.url, title: a.name })}
                        >
                          <FileText size={14} />
                          <span>{a.name}</span>
                        </button>
                        <button
                          className="course-attachment-remove"
                          onClick={() => handleDeleteAttachment(course, a)}
                          aria-label="Supprimer le document"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}

                <label className="course-upload-btn">
                  {uploadingId === course.id ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Upload size={14} />
                      Ajouter un PDF
                    </>
                  )}
                  <input
                    ref={(el) => {
                      fileInputRefs.current[course.id] = el;
                    }}
                    type="file"
                    accept="application/pdf"
                    hidden
                    disabled={uploadingId === course.id}
                    onChange={(e) => {
                      handleFileSelected(course, e.target.files?.[0]);
                      e.target.value = '';
                    }}
                  />
                </label>
              </TiltCard>
            );
          })}
        </div>
      )}

      {viewerAttachment ? (
        <PdfFlipViewer
          url={viewerAttachment.url}
          title={viewerAttachment.title}
          onClose={() => setViewerAttachment(null)}
        />
      ) : null}

      {readerIndex !== null ? (
        <TeachingReader startIndex={readerIndex} onClose={() => setReaderIndex(null)} />
      ) : null}
    </div>
  );
}
