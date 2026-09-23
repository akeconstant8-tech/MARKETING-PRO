import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  BarChart3,
  Building2,
  BookOpen,
  CalendarClock,
  ClipboardList,
  FolderOpen,
  History,
  NotebookText,
  PenSquare,
  Settings as SettingsIcon,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useCohortStats } from '../hooks/useCohortStats';
import { useRecentActivity } from '../hooks/useRecentActivity';
import { useViewedChapters } from '../hooks/useViewedChapters';
import SearchBar from '../components/SearchBar';
import BlurText from '../components/effects/BlurText';
import StatCard from '../components/StatCard';
import Skeleton from '../components/Skeleton';
import TiltCard from '../components/TiltCard';
import ChapterCard from '../components/ChapterCard';
import DonutChart from '../components/DonutChart';
import TrendChart from '../components/TrendChart';
import TeachingReader from '../components/TeachingReader';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { normalizeNote } from '../utils/calculations';
import { tciChapters } from '../data/tciCourse';
import { getChapterVisual } from '../data/chapterVisuals';
import { miChapters, MI_COURSE_SUBTITLE } from '../data/miCourse';
import { getMiChapterVisual } from '../data/miChapterVisuals';
import { marketingChapters, MARKETING_COURSE_SUBTITLE } from '../data/marketingCourse';
import { getMarketingChapterVisual } from '../data/marketingChapterVisuals';
import { fcmeChapters, FCME_COURSE_SUBTITLE } from '../data/fcmeCourse';
import { getFcmeChapterVisual } from '../data/fcmeChapterVisuals';
import landingMarketingImage from '../assets/images/landing/landing-marketing.jpg';
import type { CalendarEvent, Class, Course, Evaluation, Filiere, Grade, Student, Subject } from '../types';
import './Dashboard.css';

interface SearchResult {
  id: string;
  label: string;
  kind: 'Etudiant' | 'Classe' | 'Matiere' | 'Cours';
  to: string;
}

const MONTH_LABELS = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];

const FILIERE_COLORS = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#dc2626'];
const SUBJECT_COLORS = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#dc2626', '#0891b2'];

const QUICK_ACTIONS = [
  { icon: UserPlus, label: 'Ajouter un eleve', to: '/students', tone: 'blue' },
  { icon: Building2, label: 'Nouvelle classe', to: '/classes', tone: 'green' },
  { icon: BookOpen, label: 'Ajouter une matiere', to: '/subjects', tone: 'purple' },
  { icon: NotebookText, label: 'Nouveau cours', to: '/courses', tone: 'orange' },
  { icon: ClipboardList, label: 'Nouvelle evaluation', to: '/evaluations', tone: 'red' },
  { icon: PenSquare, label: 'Saisir les notes', to: '/grades', tone: 'blue' },
  { icon: BarChart3, label: 'Voir les resultats', to: '/performance', tone: 'teal' },
  { icon: SettingsIcon, label: 'Parametres', to: '/settings', tone: 'dark' },
] as const;

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const firstName = user?.displayName?.split(' ')[0];
  const [search, setSearch] = useState('');
  const [chapterSearch, setChapterSearch] = useState('');
  const [barsGrown, setBarsGrown] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const [miReaderIndex, setMiReaderIndex] = useState<number | null>(null);
  const [mktReaderIndex, setMktReaderIndex] = useState<number | null>(null);
  const [fcmeReaderIndex, setFcmeReaderIndex] = useState<number | null>(null);
  const { ref: chartRef, inView: chartInView } = useInViewOnce<HTMLDivElement>();
  const { viewed, markViewed } = useViewedChapters();

  const { items: students, loading: loadingStudents } = useTeacherCollection<Student>('students', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const { items: evaluations, loading: loadingEvaluations } = useTeacherCollection<Evaluation>('evaluations', 'date');
  const { items: calendarEvents } = useTeacherCollection<CalendarEvent>('calendarEvents', 'date');
  const { items: gradesAll } = useTeacherCollection<Grade>('grades', 'studentId');
  const { items: courses } = useTeacherCollection<Course>('courses', 'titre');
  const { generalAverage, successRate, subjectStats, loading: loadingStats } = useCohortStats();
  const { items: recentActivity, loading: loadingActivity } = useRecentActivity(5);

  const loadingCounts = loadingStudents || loadingClasses || loadingSubjects || loadingEvaluations;

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const filiereGroups = useMemo(
    () =>
      filieres.map((filiere) => {
        const filiereClasses = classes.filter((c) => c.filiereId === filiere.id);
        return {
          filiere,
          classes: filiereClasses.map((classe) => ({
            classe,
            subjectCount: subjects.filter((s) => s.classeId === classe.id).length,
          })),
        };
      }),
    [filieres, classes, subjects]
  );

  const filiereDonutSlices = useMemo(
    () =>
      filiereGroups.map((g, i) => ({
        label: g.filiere.nom,
        value: g.classes.length,
        color: FILIERE_COLORS[i % FILIERE_COLORS.length],
      })),
    [filiereGroups]
  );

  const subjectById = useMemo(() => new Map(subjects.map((s) => [s.id, s])), [subjects]);
  const evaluationById = useMemo(() => new Map(evaluations.map((e) => [e.id, e])), [evaluations]);

  const monthlyTrend = useMemo(() => {
    const sums = Array(12).fill(0) as number[];
    const counts = Array(12).fill(0) as number[];
    for (const grade of gradesAll) {
      const evaluation = evaluationById.get(grade.evaluationId);
      if (!evaluation?.date) continue;
      const d = new Date(evaluation.date);
      if (Number.isNaN(d.getTime())) continue;
      const m = d.getMonth();
      sums[m] += normalizeNote(grade.note, grade.noteMax);
      counts[m] += 1;
    }
    return MONTH_LABELS.map((label, i) => ({ label, value: counts[i] > 0 ? sums[i] / counts[i] : null }));
  }, [gradesAll, evaluationById]);

  const upcomingTasks = useMemo(() => {
    const nowMs = Date.now();
    interface Task {
      id: string;
      title: string;
      time: string;
      date: Date;
    }
    const items: Task[] = [];
    for (const ev of evaluations) {
      const d = new Date(ev.date);
      if (Number.isNaN(d.getTime()) || d.getTime() < nowMs) continue;
      const subjectName = subjectById.get(ev.subjectId)?.nom ?? 'Matiere';
      items.push({ id: `ev-${ev.id}`, title: `Evaluation — ${subjectName}`, time: d.toLocaleDateString('fr-FR'), date: d });
    }
    for (const ce of calendarEvents) {
      const d = new Date(ce.date);
      if (Number.isNaN(d.getTime()) || d.getTime() < nowMs) continue;
      items.push({ id: `ce-${ce.id}`, title: ce.titre, time: d.toLocaleDateString('fr-FR'), date: d });
    }
    return items.sort((a, b) => a.date.getTime() - b.date.getTime()).slice(0, 4);
  }, [evaluations, calendarEvents, subjectById]);

  const recentStudents = useMemo(
    () => [...students].sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? '')).slice(0, 4),
    [students]
  );

  const totalAttachments = useMemo(
    () => courses.reduce((sum, c) => sum + (c.attachments?.length ?? 0), 0),
    [courses]
  );

  const visibleChapters = useMemo(() => {
    const term = chapterSearch.trim().toLowerCase();
    const combined = [
      ...tciChapters.map((c) => ({ ...c, _course: 'tci' as const })),
      ...miChapters.map((c) => ({ ...c, _course: 'mi' as const })),
      ...marketingChapters.map((c) => ({ ...c, _course: 'mkt' as const })),
      ...fcmeChapters.map((c) => ({ ...c, _course: 'fcme' as const })),
    ];
    const list = term ? combined.filter((c) => c.title.toLowerCase().includes(term)) : combined;
    return list.slice(0, 4);
  }, [chapterSearch]);

  useEffect(() => {
    if (loadingStats) return;
    // Let the bars mount at 0% first, then grow — a direct render at target
    // width would skip the transition entirely.
    const id = requestAnimationFrame(() => setBarsGrown(true));
    return () => cancelAnimationFrame(id);
  }, [loadingStats]);

  const searchResults: SearchResult[] = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return [];

    const results: SearchResult[] = [];
    for (const s of students) {
      if (`${s.prenom} ${s.nom}`.toLowerCase().includes(term)) {
        results.push({ id: `student-${s.id}`, label: `${s.prenom} ${s.nom}`, kind: 'Etudiant', to: '/students' });
      }
    }
    for (const c of classes) {
      if (c.nom.toLowerCase().includes(term)) {
        results.push({ id: `class-${c.id}`, label: c.nom, kind: 'Classe', to: '/classes' });
      }
    }
    for (const s of subjects) {
      if (s.nom.toLowerCase().includes(term)) {
        results.push({ id: `subject-${s.id}`, label: s.nom, kind: 'Matiere', to: '/subjects' });
      }
    }
    for (const c of courses) {
      if (c.titre.toLowerCase().includes(term)) {
        results.push({ id: `course-${c.id}`, label: c.titre, kind: 'Cours', to: '/courses' });
      }
    }
    return results.slice(0, 8);
  }, [search, students, classes, subjects, courses]);

  const dateLabel = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="dashboard fade-in-up">
      <div className="dashboard-header">
        <div>
          <BlurText text="Tableau de bord 👋" className="dashboard-greeting" as="h2" />
          <p className="dashboard-subtitle">
            Bienvenue sur Marketing Pro. Gerez facilement votre enseignement.
          </p>
        </div>

        <div className="dashboard-header-cards">
          <div className="dashboard-info-card">
            <CalendarClock size={18} />
            <div>
              <span className="dashboard-info-primary">
                {dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1)}
              </span>
              <span className="dashboard-info-secondary">Bonne journee, {firstName ?? 'Professeur'} !</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-search">
        <SearchBar value={search} onChange={setSearch} placeholder="Rechercher un etudiant, une classe, une matiere..." />
        {searchResults.length > 0 ? (
          <div className="dashboard-search-results">
            {searchResults.map((result) => (
              <button key={result.id} className="dashboard-search-row fade-in" onClick={() => navigate(result.to)}>
                <span>{result.label}</span>
                <span className="dashboard-search-kind">{result.kind}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {loadingCounts ? (
        <div className="dashboard-stats-grid">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="stat-card">
              <Skeleton circle height={40} />
              <div style={{ marginTop: 12 }}>
                <Skeleton width={48} height={24} />
              </div>
              <div style={{ marginTop: 6 }}>
                <Skeleton width={70} height={13} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="dashboard-stats-grid">
          <StatCard icon={Users} label="Etudiants" value={students.length} tone="blue" to="/students" index={0} />
          <StatCard icon={Building2} label="Classes" value={classes.length} tone="green" to="/classes" index={1} />
          <StatCard icon={BookOpen} label="Matieres" value={subjects.length} tone="purple" to="/subjects" index={2} />
          <StatCard
            icon={ClipboardList}
            label="Evaluations"
            value={evaluations.length}
            tone="orange"
            to="/evaluations"
            index={3}
          />
        </div>
      )}

      <div className="dashboard-chart-card" style={{ marginBottom: 20 }}>
        <div className="dashboard-panel-header">
          <h3 className="dashboard-section-title">Mes matieres et chapitres</h3>
          <input
            className="dashboard-chapter-search"
            value={chapterSearch}
            onChange={(e) => setChapterSearch(e.target.value)}
            placeholder="Rechercher un chapitre..."
          />
        </div>
        <div className="dashboard-chapters-grid">
          {visibleChapters.map((chapter, i) => {
            const visual =
              chapter._course === 'tci'
                ? getChapterVisual(chapter.number)
                : chapter._course === 'mi'
                  ? getMiChapterVisual(chapter.number)
                  : chapter._course === 'mkt'
                    ? getMarketingChapterVisual(chapter.number)
                    : getFcmeChapterVisual(chapter.number);
            const casPosition =
              chapter._course === 'tci'
                ? tciChapters.filter((c) => c.level === chapter.level && c.kind === 'cas').findIndex((c) => c.id === chapter.id) + 1
                : 0;
            const label =
              chapter.kind === 'chapitre' ? `Chapitre ${chapter.number}` : `Cas pratique ${casPosition}`;
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
                  if (chapter._course === 'tci') setReaderIndex(chapter.number - 1);
                  else if (chapter._course === 'mi') setMiReaderIndex(chapter.number - 1);
                  else if (chapter._course === 'mkt') setMktReaderIndex(chapter.number - 1);
                  else setFcmeReaderIndex(chapter.number - 1);
                }}
              />
            );
          })}
        </div>
        <button className="dashboard-panel-link dashboard-chapters-more" onClick={() => navigate('/subjects')}>
          Voir toutes mes matieres et chapitres →
        </button>
      </div>

      <div className="dashboard-quick-actions">
        {QUICK_ACTIONS.map((action, i) => (
          <button
            key={action.label}
            className={`dashboard-quick-action dashboard-quick-action-${action.tone} fade-in-up`}
            style={{ '--stagger-index': i } as CSSProperties}
            onClick={() => navigate(action.to)}
          >
            <action.icon size={17} />
            {action.label}
          </button>
        ))}
      </div>

      <div className="dashboard-triple-row">
        <div ref={chartRef} className={`dashboard-chart-card ${chartInView ? 'fade-in-up' : 'dashboard-chart-hidden'}`}>
          <div className="dashboard-panel-header">
            <h3 className="dashboard-section-title">Evolution des notes</h3>
            {generalAverage !== null ? (
              <span className="dashboard-trend-badge">{generalAverage.toFixed(0)}/20</span>
            ) : null}
          </div>
          <TrendChart points={monthlyTrend} />
        </div>

        <div className="dashboard-chart-card">
          <h3 className="dashboard-section-title">Repartition des classes</h3>
          {loadingFilieres || loadingClasses ? (
            <Skeleton height={160} radius="50%" />
          ) : filiereDonutSlices.length === 0 || classes.length === 0 ? (
            <p className="dashboard-empty">
              Aucune classe pour le moment. Importez votre structure depuis Parametres.
            </p>
          ) : (
            <DonutChart slices={filiereDonutSlices} centerValue={classes.length} centerLabel="Classes" />
          )}
        </div>

        <div className="dashboard-chart-card">
          <div className="dashboard-panel-header">
            <h3 className="dashboard-section-title">Taches a venir</h3>
            <button className="dashboard-panel-link" onClick={() => navigate('/calendar')}>
              Voir tout
            </button>
          </div>
          {upcomingTasks.length === 0 ? (
            <p className="dashboard-empty">
              Aucune tache a venir. Ajoutez des evaluations ou des evenements depuis Calendrier.
            </p>
          ) : (
            <ul className="dashboard-task-list">
              {upcomingTasks.map((task) => (
                <li key={task.id} className="dashboard-task-row">
                  <span className="dashboard-task-date">
                    {task.date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                  </span>
                  <span className="dashboard-task-dot" />
                  <div className="dashboard-task-info">
                    <span className="dashboard-task-title">{task.title}</span>
                    <span className="dashboard-task-time">{task.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="dashboard-triple-row">
        <div className="dashboard-chart-card">
          <div className="dashboard-panel-header">
            <h3 className="dashboard-section-title">Derniers etudiants ajoutes</h3>
            <button className="dashboard-panel-link" onClick={() => navigate('/students')}>
              Voir tout
            </button>
          </div>
          {recentStudents.length === 0 ? (
            <p className="dashboard-empty">
              Aucun etudiant enregistre. Ajoutez vos etudiants pour les voir apparaitre ici.
            </p>
          ) : (
            <ul className="dashboard-student-list">
              {recentStudents.map((s) => (
                <li key={s.id} className="dashboard-student-row">
                  <span className="dashboard-student-avatar">
                    {(s.prenom.charAt(0) + s.nom.charAt(0)).toUpperCase()}
                  </span>
                  <div className="dashboard-student-info">
                    <span className="dashboard-student-name">
                      {s.prenom} {s.nom}
                    </span>
                    <span className="dashboard-student-meta">{s.matricule ?? s.classeId}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dashboard-chart-card">
          <h3 className="dashboard-section-title">Performance par matiere</h3>
          {loadingStats ? (
            <div className="dashboard-chart-skeleton">
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <Skeleton width="40%" height={12} />
                  <div style={{ marginTop: 8 }}>
                    <Skeleton height={8} radius="var(--radius-pill)" />
                  </div>
                </div>
              ))}
            </div>
          ) : subjectStats.length === 0 ? (
            <p className="dashboard-empty">Pas encore assez de notes.</p>
          ) : (
            subjectStats.map(({ subject, average }, i) => (
              <div key={subject.id} className="dashboard-bar-row">
                <div className="dashboard-bar-header">
                  <span>{subject.nom}</span>
                  <span>{average.toFixed(2)} / 20</span>
                </div>
                <div className="dashboard-bar-track">
                  <div
                    className="dashboard-bar-fill"
                    style={{
                      width: barsGrown ? `${Math.min(100, (average / 20) * 100)}%` : '0%',
                      background: SUBJECT_COLORS[i % SUBJECT_COLORS.length],
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <TiltCard className="dashboard-cta-card fade-in-up" maxTilt={6}>
          <Sparkles size={22} />
          <h3>Vous faites la difference !</h3>
          <p>Continuez a inspirer et a former les leaders de demain.</p>
          <button className="dashboard-cta-btn" onClick={() => navigate('/performance')}>
            <TrendingUp size={16} />
            Voir mes statistiques
          </button>
        </TiltCard>
      </div>

      <div className="dashboard-chart-card" style={{ marginBottom: 20 }}>
        <div className="dashboard-panel-header">
          <h3 className="dashboard-section-title">Activite recente</h3>
        </div>
        {loadingActivity ? (
          <div className="dashboard-chart-skeleton">
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <Skeleton height={14} />
              </div>
            ))}
          </div>
        ) : recentActivity.length === 0 ? (
          <p className="dashboard-empty">
            Aucune activite pour le moment. Vos actions (matieres, cours, documents...) apparaitront ici.
          </p>
        ) : (
          <ul className="dashboard-activity-list">
            {recentActivity.map((item) => (
              <li key={item.id} className="dashboard-activity-row">
                <span className="dashboard-activity-icon">
                  <History size={14} />
                </span>
                <div className="dashboard-activity-info">
                  <span className="dashboard-activity-action">
                    {item.action} — <strong>{item.element}</strong>
                  </span>
                  <span className="dashboard-activity-meta">
                    {item.date.toLocaleDateString('fr-FR')} a {item.date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} · Vous
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="dashboard-chart-card" style={{ marginBottom: 20 }}>
        <h3 className="dashboard-section-title">Mes filieres</h3>
        {loadingFilieres || loadingClasses || loadingSubjects ? (
          <div className="dashboard-filiere-grid">
            {[0, 1, 2].map((i) => (
              <div key={i} className="dashboard-filiere-card">
                <Skeleton width="60%" height={16} />
                <div style={{ marginTop: 10 }}>
                  <Skeleton width="80%" height={12} />
                </div>
              </div>
            ))}
          </div>
        ) : filiereGroups.length === 0 ? (
          <p className="dashboard-empty">
            Aucune filiere pour le moment. Importez votre structure depuis Parametres.
          </p>
        ) : (
          <div className="dashboard-filiere-grid">
            {filiereGroups.map(({ filiere, classes: filiereClasses }, i) => (
              <TiltCard
                key={filiere.id}
                as="button"
                className="dashboard-filiere-card fade-in-up"
                style={{ '--stagger-index': i } as CSSProperties}
                onClick={() => navigate('/classes')}
                maxTilt={7}
              >
                <div className="dashboard-filiere-name">{filiere.nom}</div>
                {filiereClasses.length === 0 ? (
                  <p className="dashboard-filiere-empty">Aucune classe</p>
                ) : (
                  <ul className="dashboard-filiere-classes">
                    {filiereClasses.map(({ classe, subjectCount }) => (
                      <li key={classe.id}>
                        <span>{classe.niveau ?? classe.nom}</span>
                        <span className="dashboard-filiere-badge">{subjectCount} matiere{subjectCount > 1 ? 's' : ''}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </TiltCard>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-bottom-strip">
        <div className="dashboard-bottom-tile">
          <UserPlus size={18} />
          <div>
            <strong>{students.length}</strong>
            <span>Etudiants encadres</span>
          </div>
        </div>
        <div className="dashboard-bottom-tile">
          <BookOpen size={18} />
          <div>
            <strong>{subjects.length}</strong>
            <span>Matieres enseignees</span>
          </div>
        </div>
        <div className="dashboard-bottom-tile">
          <Award size={18} />
          <div>
            <strong>{successRate !== null ? `${successRate.toFixed(0)}%` : '—'}</strong>
            <span>Taux de reussite</span>
          </div>
        </div>
        <div className="dashboard-bottom-tile">
          <FolderOpen size={18} />
          <div>
            <strong>{totalAttachments}</strong>
            <span>Ressources disponibles</span>
          </div>
        </div>
      </div>

      {readerIndex !== null ? (
        <TeachingReader startIndex={readerIndex} onClose={() => setReaderIndex(null)} />
      ) : null}

      {miReaderIndex !== null ? (
        <TeachingReader
          startIndex={miReaderIndex}
          onClose={() => setMiReaderIndex(null)}
          chapters={miChapters}
          courseTitle="Marketing International"
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
          courseTitle="Marketing"
          courseSubtitle={MARKETING_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="Marketing"
          sideText="Comprendre le marché, créer et fidéliser la clientèle"
        />
      ) : null}

      {fcmeReaderIndex !== null ? (
        <TeachingReader
          startIndex={fcmeReaderIndex}
          onClose={() => setFcmeReaderIndex(null)}
          chapters={fcmeChapters}
          courseTitle="FCME"
          courseSubtitle={FCME_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="FCME"
          sideText="Fondements, concepts, marketing et étude du marché"
        />
      ) : null}
    </div>
  );
}
