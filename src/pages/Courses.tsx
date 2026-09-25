import { useMemo, useRef, useState, type FormEvent } from 'react';
import { BookOpen, FileText, GraduationCap, LayoutGrid, List, Plus, Search, Trash2, Upload, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useViewedChapters } from '../hooks/useViewedChapters';
import { useEstablishment } from '../context/EstablishmentContext';
import { addTeacherDoc, deleteTeacherDoc, updateTeacherDoc } from '../services/dataService';
import { deleteCourseAttachment, uploadCourseAttachment } from '../services/storageService';
import Button from '../components/Button';
import Skeleton from '../components/Skeleton';
import ChapterCard from '../components/ChapterCard';
import TeachingCourseCard from '../components/TeachingCourseCard';
import PdfFlipViewer from '../components/PdfFlipViewer';
import TeachingReader from '../components/TeachingReader';
import CourseReader from '../components/CourseReader';
import { tciChapters, TCI_COURSE_SUBTITLE_1, TCI_COURSE_SUBTITLE_2, TCI_COURSE_TITLE } from '../data/tciCourse';
import { getChapterVisual } from '../data/chapterVisuals';
import { miChapters, MI_COURSE_SUBTITLE, MI_COURSE_TITLE } from '../data/miCourse';
import { getMiChapterVisual } from '../data/miChapterVisuals';
import { marketingChapters, MARKETING_COURSE_SUBTITLE, MARKETING_COURSE_TITLE } from '../data/marketingCourse';
import { getMarketingChapterVisual } from '../data/marketingChapterVisuals';
import { marketing2Chapters, MARKETING2_COURSE_SUBTITLE, MARKETING2_COURSE_TITLE } from '../data/marketing2Course';
import { getMarketing2ChapterVisual } from '../data/marketing2ChapterVisuals';
import { fcmeChapters, FCME_COURSE_SUBTITLE, FCME_COURSE_TITLE } from '../data/fcmeCourse';
import { getFcmeChapterVisual } from '../data/fcmeChapterVisuals';
import { fcme2Chapters, FCME2_COURSE_SUBTITLE, FCME2_COURSE_TITLE } from '../data/fcme2Course';
import { getFcme2ChapterVisual } from '../data/fcme2ChapterVisuals';
import landingMarketingImage from '../assets/images/landing/landing-marketing.jpg';
import type { Course, CourseAttachment, Subject } from '../types';
import './Courses.css';
import './CoursesToolbar.css';

function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

export default function Courses() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: courses, loading: loadingCourses } = useTeacherCollection<Course>('courses', 'titre');
  const { viewed, markViewed } = useViewedChapters();
  const [teachingLevel, setTeachingLevel] = useState<1 | 2>(1);
  const [yearTab, setYearTab] = useState<'all' | 1 | 2>('all');
  const [search, setSearch] = useState('');
  const [sortMode, setSortMode] = useState<'default' | 'title' | 'unviewed'>('default');
  const [statusFilter, setStatusFilter] = useState<'all' | 'viewed' | 'unviewed'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Un onglet d'année impose le niveau du cours TCI ; « Tous » laisse son propre sélecteur.
  const tciLevel = yearTab === 'all' ? teachingLevel : yearTab;
  const visibleTciChapters = useMemo(() => tciChapters.filter((c) => c.level === tciLevel), [tciLevel]);
  const [miReaderIndex, setMiReaderIndex] = useState<number | null>(null);
  const [mktReaderIndex, setMktReaderIndex] = useState<number | null>(null);
  const [fcmeReaderIndex, setFcmeReaderIndex] = useState<number | null>(null);
  const [fcme2ReaderIndex, setFcme2ReaderIndex] = useState<number | null>(null);
  const [mkt2ReaderIndex, setMkt2ReaderIndex] = useState<number | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [titre, setTitre] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [chapitre, setChapitre] = useState('');
  const [objectifs, setObjectifs] = useState('');
  const [contenu, setContenu] = useState('');
  const [exemples, setExemples] = useState('');
  const [casPratique, setCasPratique] = useState('');
  const [resume, setResume] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [viewerAttachment, setViewerAttachment] = useState<{ url: string; title: string } | null>(null);
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const [courseReaderIndex, setCourseReaderIndex] = useState<number | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const subjectNomById = useMemo(() => new Map(subjects.map((s) => [s.id, s.nom])), [subjects]);
  const loading = loadingSubjects || loadingCourses;

  const blockVisible = (year: 1 | 2 | 'both') => yearTab === 'all' || year === 'both' || year === yearTab;

  /** Recherche, filtre « consulté » et tri appliqués à une liste (chapitres ou cours) — n'altèrent jamais
   * les données : l'ouverture d'un élément se fait toujours par son numéro / son index d'origine. */
  function applyView<T extends { id: string }>(list: T[], titleOf: (item: T) => string): T[] {
    const term = normalizeText(search.trim());
    let out = list.filter(
      (item) =>
        (!term || normalizeText(titleOf(item)).includes(term)) &&
        (statusFilter === 'all' || (statusFilter === 'viewed') === viewed.has(item.id))
    );
    if (sortMode === 'title') out = [...out].sort((a, b) => titleOf(a).localeCompare(titleOf(b), 'fr'));
    else if (sortMode === 'unviewed') out = [...out].sort((a, b) => Number(viewed.has(a.id)) - Number(viewed.has(b.id)));
    return out;
  }
  const chapterTitle = (c: { title: string }) => c.title;
  const tciView = applyView(visibleTciChapters, chapterTitle);
  const miView = applyView(miChapters, chapterTitle);
  const mktView = applyView(marketingChapters, chapterTitle);
  const mkt2View = applyView(marketing2Chapters, chapterTitle);
  const fcmeView = applyView(fcmeChapters, chapterTitle);
  const fcme2View = applyView(fcme2Chapters, chapterTitle);
  const visibleCourses = applyView(courses, (c) => c.titre);

  async function handleCreateCourse(e: FormEvent) {
    e.preventDefault();
    if (!user || !subjectId || !titre.trim()) return;
    const subject = subjectById.get(subjectId);
    setSaving(true);
    try {
      await addTeacherDoc('courses', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        titre: titre.trim(),
        subjectId,
        classeId: subject?.classeId ?? '',
        chapitre: chapitre.trim() || null,
        objectifs: objectifs.trim() || null,
        contenu: contenu.trim() || null,
        exemples: exemples.trim() || null,
        casPratique: casPratique.trim() || null,
        resume: resume.trim() || null,
        attachments: [],
        createdAt: new Date().toISOString(),
      });
      showToast('success', 'Cours cree.');
      setTitre('');
      setSubjectId('');
      setChapitre('');
      setObjectifs('');
      setContenu('');
      setExemples('');
      setCasPratique('');
      setResume('');
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
    <div className={`courses-page fade-in-up ${viewMode === 'list' ? 'courses-page-list' : ''}`}>
      <div className="courses-header">
        <div>
          <h2 className="courses-title">
            <BookOpen size={26} className="courses-title-icon" />
            Mes cours
          </h2>
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

          <p className="courses-form-hint">
            Renseignez ce contenu pour que le cours s'affiche dans "Mon enseignement" avec le meme
            rendu immersif que le cours Commerce International — sinon seuls le titre et les
            documents joints seront visibles.
          </p>

          <div className="courses-field">
            <label className="courses-label" htmlFor="course-objectifs">
              Objectifs pedagogiques (optionnel)
            </label>
            <textarea
              id="course-objectifs"
              className="courses-input courses-textarea"
              value={objectifs}
              onChange={(e) => setObjectifs(e.target.value)}
              placeholder="Ce que l'etudiant doit savoir faire a la fin du cours..."
              rows={2}
            />
          </div>
          <div className="courses-field">
            <label className="courses-label" htmlFor="course-contenu">
              Contenu du cours (optionnel)
            </label>
            <textarea
              id="course-contenu"
              className="courses-input courses-textarea"
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              placeholder="Le developpement du cours, une idee par ligne..."
              rows={4}
            />
          </div>
          <div className="courses-form-row">
            <div className="courses-field">
              <label className="courses-label" htmlFor="course-exemples">
                Exemple (optionnel)
              </label>
              <textarea
                id="course-exemples"
                className="courses-input courses-textarea"
                value={exemples}
                onChange={(e) => setExemples(e.target.value)}
                rows={3}
              />
            </div>
            <div className="courses-field">
              <label className="courses-label" htmlFor="course-cas">
                Cas pratique (optionnel)
              </label>
              <textarea
                id="course-cas"
                className="courses-input courses-textarea"
                value={casPratique}
                onChange={(e) => setCasPratique(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <div className="courses-field">
            <label className="courses-label" htmlFor="course-resume">
              Resume (optionnel)
            </label>
            <textarea
              id="course-resume"
              className="courses-input courses-textarea"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              rows={2}
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

      <div className="courses-toolbar">
        <div className="courses-year-tabs" role="tablist" aria-label="Filtrer par année">
          {([['all', 'Tous les cours'], [1, '1ère Année'], [2, '2ème Année']] as const).map(([value, label]) => (
            <button
              key={String(value)}
              type="button"
              role="tab"
              aria-selected={yearTab === value}
              className={yearTab === value ? 'courses-year-tab courses-year-tab-active' : 'courses-year-tab'}
              onClick={() => setYearTab(value)}
            >
              <GraduationCap size={15} />
              {label}
            </button>
          ))}
        </div>
        <label className="courses-toolbar-search">
          <Search size={16} />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un cours..."
            aria-label="Rechercher un cours"
          />
        </label>
        <select
          className="courses-toolbar-select"
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as typeof sortMode)}
          aria-label="Trier par"
        >
          <option value="default">Trier : ordre du cours</option>
          <option value="title">Titre (A → Z)</option>
          <option value="unviewed">Non consultés d'abord</option>
        </select>
        <select
          className="courses-toolbar-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
          aria-label="Filtrer par statut"
        >
          <option value="all">Filtrer : tous</option>
          <option value="viewed">Consultés</option>
          <option value="unviewed">À découvrir</option>
        </select>
        <div className="courses-view-toggle" role="group" aria-label="Affichage">
          <button
            type="button"
            className={viewMode === 'grid' ? 'courses-view-btn courses-view-btn-active' : 'courses-view-btn'}
            onClick={() => setViewMode('grid')}
            aria-label="Affichage en grille"
            aria-pressed={viewMode === 'grid'}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            type="button"
            className={viewMode === 'list' ? 'courses-view-btn courses-view-btn-active' : 'courses-view-btn'}
            onClick={() => setViewMode('list')}
            aria-label="Affichage en liste"
            aria-pressed={viewMode === 'list'}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {blockVisible('both') && tciView.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {TCI_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{tciLevel === 1 ? TCI_COURSE_SUBTITLE_1 : TCI_COURSE_SUBTITLE_2}</p>
        </div>
        {yearTab === 'all' ? (
        <div className="courses-teaching-level-toggle">
          <button
            type="button"
            className={teachingLevel === 1 ? 'courses-teaching-level-btn courses-teaching-level-btn-active' : 'courses-teaching-level-btn'}
            onClick={() => setTeachingLevel(1)}
          >
            1ère Année
          </button>
          <button
            type="button"
            className={teachingLevel === 2 ? 'courses-teaching-level-btn courses-teaching-level-btn-active' : 'courses-teaching-level-btn'}
            onClick={() => setTeachingLevel(2)}
          >
            2ème Année
          </button>
        </div>
        ) : null}
        <div className="courses-teaching-grid">
          {tciView.map((chapter, i) => {
            const visual = getChapterVisual(chapter.number);
            const casPosition =
              tciChapters.filter((c) => c.level === chapter.level && c.kind === 'cas').findIndex((c) => c.id === chapter.id) + 1;
            const label = chapter.kind === 'chapitre' ? `Chapitre ${chapter.number}` : `Cas pratique ${casPosition}`;
            return (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                visual={visual}
                label={label}
                viewed={viewed.has(chapter.id)}
                index={i}
                onOpen={() => {
                  markViewed(chapter.id);
                  setReaderIndex(chapter.number - 1);
                }}
              />
            );
          })}
        </div>
      </div>
      ) : null}

      {blockVisible(2) && miView.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {MI_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{MI_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {miView.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              visual={getMiChapterVisual(chapter.number)}
              label={`Chapitre ${chapter.number}`}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setMiReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>
      ) : null}

      {blockVisible(1) && mktView.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {MARKETING_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{MARKETING_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {mktView.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              visual={getMarketingChapterVisual(chapter.number)}
              label={`Chapitre ${chapter.number}`}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setMktReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>
      ) : null}

      {blockVisible(2) && mkt2View.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {MARKETING2_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{MARKETING2_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {mkt2View.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              visual={getMarketing2ChapterVisual(chapter.number)}
              label={`Chapitre ${chapter.number}`}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setMkt2ReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>
      ) : null}

      {blockVisible(1) && fcmeView.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {FCME_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{FCME_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {fcmeView.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              visual={getFcmeChapterVisual(chapter.number)}
              label={`Chapitre ${chapter.number}`}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setFcmeReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>
      ) : null}

      {blockVisible(2) && fcme2View.length > 0 ? (
      <div className="courses-teaching-card">
        <div className="courses-teaching-header">
          <h3 className="courses-teaching-title">Mon enseignement — {FCME2_COURSE_TITLE}</h3>
          <p className="courses-teaching-subtitle">{FCME2_COURSE_SUBTITLE}</p>
        </div>
        <div className="courses-teaching-grid">
          {fcme2View.map((chapter, i) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              visual={getFcme2ChapterVisual(chapter.number)}
              label={chapter.number === 8 ? 'Applications' : `Chapitre ${chapter.number}`}
              viewed={viewed.has(chapter.id)}
              index={i}
              onOpen={() => {
                markViewed(chapter.id);
                setFcme2ReaderIndex(chapter.number - 1);
              }}
            />
          ))}
        </div>
      </div>
      ) : null}

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
        <div className="courses-teaching-grid">
          {visibleCourses.length === 0 ? (
            <p className="courses-empty">Aucun cours ne correspond à votre recherche.</p>
          ) : null}
          {visibleCourses.map((course, i) => (
            <div key={course.id} className="courses-course-cell">
              <TeachingCourseCard
                course={course}
                subjectNom={subjectNomById.get(course.subjectId) ?? 'Matiere inconnue'}
                viewed={viewed.has(course.id)}
                index={i}
                onOpen={() => {
                  markViewed(course.id);
                  setCourseReaderIndex(courses.indexOf(course));
                }}
              />

              <div className="courses-course-cell-footer">
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

                <div className="courses-course-cell-actions">
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
                  <button
                    className="course-card-delete"
                    onClick={() => handleDeleteCourse(course)}
                    aria-label="Supprimer le cours"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewerAttachment ? (
        <PdfFlipViewer
          url={viewerAttachment.url}
          title={viewerAttachment.title}
          onClose={() => setViewerAttachment(null)}
        />
      ) : null}

      {courseReaderIndex !== null ? (
        <CourseReader
          courses={courses}
          startIndex={courseReaderIndex}
          subjectNomById={subjectNomById}
          onClose={() => setCourseReaderIndex(null)}
          onOpenAttachment={(a) => setViewerAttachment({ url: a.url, title: a.name })}
        />
      ) : null}

      {readerIndex !== null ? (
        <TeachingReader startIndex={readerIndex} onClose={() => setReaderIndex(null)} />
      ) : null}

      {miReaderIndex !== null ? (
        <TeachingReader
          startIndex={miReaderIndex}
          onClose={() => setMiReaderIndex(null)}
          chapters={miChapters}
          courseTitle={MI_COURSE_TITLE}
          courseSubtitle={MI_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="Marketing International"
          sideText="Vendre et communiquer au-delà des frontières"
        />
      ) : null}

      {mktReaderIndex !== null ? (
        <TeachingReader
          startIndex={mktReaderIndex}
          onClose={() => setMktReaderIndex(null)}
          chapters={marketingChapters}
          courseTitle={MARKETING_COURSE_TITLE}
          courseSubtitle={MARKETING_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="Marketing"
          sideText="Comprendre le marché, créer et fidéliser la clientèle"
        />
      ) : null}

      {mkt2ReaderIndex !== null ? (
        <TeachingReader
          startIndex={mkt2ReaderIndex}
          onClose={() => setMkt2ReaderIndex(null)}
          chapters={marketing2Chapters}
          courseTitle={MARKETING2_COURSE_TITLE}
          courseSubtitle={MARKETING2_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="Marketing"
          sideText="Commerce international et relation clientèle"
        />
      ) : null}

      {fcmeReaderIndex !== null ? (
        <TeachingReader
          startIndex={fcmeReaderIndex}
          onClose={() => setFcmeReaderIndex(null)}
          chapters={fcmeChapters}
          courseTitle={FCME_COURSE_TITLE}
          courseSubtitle={FCME_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="FCME"
          sideText="Fondements, concepts, marketing et étude du marché"
        />
      ) : null}

      {fcme2ReaderIndex !== null ? (
        <TeachingReader
          startIndex={fcme2ReaderIndex}
          onClose={() => setFcme2ReaderIndex(null)}
          chapters={fcme2Chapters}
          courseTitle={FCME2_COURSE_TITLE}
          courseSubtitle={FCME2_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="FCME"
          sideText="Fondements, concepts, marketing et étude du marché"
        />
      ) : null}
    </div>
  );
}
