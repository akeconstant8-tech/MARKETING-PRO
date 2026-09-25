import { useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { BookOpen, Check, Eye, FileText, GraduationCap, Pencil, Plus, Users, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useEstablishment } from '../context/EstablishmentContext';
import { addTeacherDoc, updateTeacherDoc } from '../services/dataService';
import { getSubjectExpertise } from '../utils/subjectExpertise';
import { tciChapters, TCI_COURSE_SUBTITLE_1, TCI_COURSE_SUBTITLE_2 } from '../data/tciCourse';
import { miChapters, MI_COURSE_SUBTITLE } from '../data/miCourse';
import { marketingChapters, MARKETING_COURSE_SUBTITLE, MARKETING_COURSE_TITLE } from '../data/marketingCourse';
import { marketing2Chapters, MARKETING2_COURSE_SUBTITLE } from '../data/marketing2Course';
import { fcmeChapters, FCME_COURSE_SUBTITLE, FCME_COURSE_TITLE } from '../data/fcmeCourse';
import { fcme2Chapters, FCME2_COURSE_SUBTITLE, FCME2_COURSE_TITLE } from '../data/fcme2Course';
import landingMarketingImage from '../assets/images/landing/landing-marketing.jpg';
import { getSubjectImage } from '../utils/subjectImage';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import TiltCard from '../components/TiltCard';
import TeachingReader from '../components/TeachingReader';
import Skeleton from '../components/Skeleton';
import type { Class, Filiere, Subject } from '../types';
import './Subjects.css';

const TCI_PATTERN = /\bTCI\b|Technique du Commerce International/i;
const MI_PATTERN = /\bMI\b|Marketing International/i;
const MARKETING_PATTERN = /\bMarketing\b/i;
const FCME_PATTERN = /\bFCME\b|Fondements,? Concepts,? Marketing/i;
const ROW_TONES = ['blue', 'green', 'purple', 'teal', 'orange', 'indigo'];

interface SubjectGroup {
  subject: Subject;
  classLabels: string[];
}

interface FiliereRow {
  id: string;
  filiereId: string;
  filiereNom: string;
  initials: string;
  tone: string;
  niveau: string;
  anneeAcademique: string;
  matieres: string[];
}

function filiereInitials(nom: string): string {
  const match = nom.match(/\(([^)]+)\)/);
  const source = match ? match[1] : nom;
  return source.slice(0, 2).toUpperCase();
}

export default function Subjects() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const [miReaderIndex, setMiReaderIndex] = useState<number | null>(null);
  const [mktReaderIndex, setMktReaderIndex] = useState<number | null>(null);
  const [fcmeReaderIndex, setFcmeReaderIndex] = useState<number | null>(null);
  const [fcme2ReaderIndex, setFcme2ReaderIndex] = useState<number | null>(null);
  const [mkt2ReaderIndex, setMkt2ReaderIndex] = useState<number | null>(null);
  const loading = loadingSubjects || loadingClasses || loadingFilieres;

  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [coefficient, setCoefficient] = useState('1');
  const [classeId, setClasseId] = useState('');
  const [saving, setSaving] = useState(false);

  const [editingSubjectNom, setEditingSubjectNom] = useState<string | null>(null);
  const [editNom, setEditNom] = useState('');
  const [editCoefficient, setEditCoefficient] = useState('1');
  const [editSaving, setEditSaving] = useState(false);

  const [filiereFilter, setFiliereFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');

  const classById = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);
  const filiereById = useMemo(() => new Map(filieres.map((f) => [f.id, f])), [filieres]);
  const filiereToneById = useMemo(() => {
    const map = new Map<string, string>();
    filieres.forEach((f, i) => map.set(f.id, ROW_TONES[i % ROW_TONES.length]));
    return map;
  }, [filieres]);

  const yearOptions = useMemo(() => [...new Set(classes.map((c) => c.anneeAcademique))].sort(), [classes]);
  const anneeAcademique = yearOptions.length === 1 ? yearOptions[0] : yearOptions.length > 1 ? 'Plusieurs' : '—';

  const subjectGroups: SubjectGroup[] = useMemo(() => {
    const map = new Map<string, SubjectGroup>();
    for (const s of subjects) {
      const classe = s.classeId ? classById.get(s.classeId) : undefined;
      const filiere = classe?.filiereId ? filiereById.get(classe.filiereId) : undefined;
      const label = classe ? `${filiere?.nom ?? ''} · ${classe.niveau ?? classe.nom}`.replace(/^ · /, '') : null;

      const existing = map.get(s.nom);
      if (existing) {
        if (label) existing.classLabels.push(label);
      } else {
        map.set(s.nom, { subject: s, classLabels: label ? [label] : [] });
      }
    }
    return [...map.values()];
  }, [subjects, classById, filiereById]);

  const filiereRows: FiliereRow[] = useMemo(() => {
    return classes
      .map((classe) => {
        const filiere = classe.filiereId ? filiereById.get(classe.filiereId) : undefined;
        const filiereNom = filiere?.nom ?? '—';
        const matieres = subjects.filter((s) => s.classeId === classe.id).map((s) => s.nom);
        return {
          id: classe.id,
          filiereId: classe.filiereId ?? '',
          filiereNom,
          initials: filiereInitials(filiereNom),
          tone: filiereToneById.get(classe.filiereId ?? '') ?? 'blue',
          niveau: classe.niveau ?? classe.nom,
          anneeAcademique: classe.anneeAcademique,
          matieres,
        };
      })
      .sort((a, b) => a.filiereNom.localeCompare(b.filiereNom) || a.niveau.localeCompare(b.niveau));
  }, [classes, subjects, filiereById, filiereToneById]);

  const filteredRows = useMemo(() => {
    return filiereRows.filter(
      (row) =>
        (filiereFilter === 'all' || row.filiereId === filiereFilter) &&
        (yearFilter === 'all' || row.anneeAcademique === yearFilter)
    );
  }, [filiereRows, filiereFilter, yearFilter]);

  async function handleCreateSubject(e: FormEvent) {
    e.preventDefault();
    if (!user || !nom.trim() || !classeId) return;
    setSaving(true);
    try {
      await addTeacherDoc('subjects', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        nom: nom.trim(),
        coefficient: Number(coefficient) || 1,
        classeId,
        createdAt: new Date().toISOString(),
      });
      showToast('success', 'Matiere ajoutee.');
      setNom('');
      setCoefficient('1');
      setClasseId('');
      setShowForm(false);
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de l'ajout de la matiere.");
    } finally {
      setSaving(false);
    }
  }

  function startEditSubject(subject: Subject) {
    setEditingSubjectNom(subject.nom);
    setEditNom(subject.nom);
    setEditCoefficient(String(subject.coefficient));
  }

  /** Applies to every Subject document sharing this name — a matiere has a
   * single coefficient across all the classes it's taught in (per the
   * coefficient table), so renaming/re-weighting one updates them all. */
  async function handleSaveEditSubject(originalNom: string) {
    if (!editNom.trim()) return;
    setEditSaving(true);
    try {
      const matches = subjects.filter((s) => s.nom === originalNom);
      await Promise.all(
        matches.map((s) =>
          updateTeacherDoc('subjects', s.id, {
            nom: editNom.trim(),
            coefficient: Number(editCoefficient) || 1,
          })
        )
      );
      showToast('success', 'Matiere modifiee.');
      setEditingSubjectNom(null);
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la modification.');
    } finally {
      setEditSaving(false);
    }
  }

  return (
    <div className="subjects-page fade-in-up">
      <div className="subjects-header">
        <div className="subjects-header-left">
          <div className="subjects-header-icon">
            <BookOpen size={22} />
          </div>
          <div>
            <h2 className="subjects-title">Matieres</h2>
            <p className="subjects-subtitle">Gerez vos matieres, leurs coefficients et l'enseignement associe.</p>
          </div>
        </div>
        <Button variant="primary" onClick={() => setShowForm((v) => !v)} disabled={classes.length === 0}>
          <Plus size={18} />
          Ajouter une matiere
        </Button>
      </div>

      {showForm ? (
        <form className="subjects-form fade-in-up" onSubmit={handleCreateSubject}>
          <div className="subjects-form-row">
            <div className="subjects-field">
              <label className="subjects-label" htmlFor="subject-nom">
                Nom de la matiere
              </label>
              <input
                id="subject-nom"
                className="subjects-input"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Ex : Marketing digital"
                required
              />
            </div>
            <div className="subjects-field">
              <label className="subjects-label" htmlFor="subject-coeff">
                Coefficient
              </label>
              <input
                id="subject-coeff"
                className="subjects-input"
                type="number"
                min={1}
                max={10}
                value={coefficient}
                onChange={(e) => setCoefficient(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="subjects-field">
            <label className="subjects-label" htmlFor="subject-classe">
              Filiere et annee
            </label>
            <select
              id="subject-classe"
              className="subjects-input"
              value={classeId}
              onChange={(e) => setClasseId(e.target.value)}
              required
            >
              <option value="" disabled>
                Choisir une classe
              </option>
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {(filiereById.get(c.filiereId ?? '')?.nom ?? '—') + ' · ' + (c.niveau ?? c.nom)}
                </option>
              ))}
            </select>
          </div>
          <div className="subjects-form-actions">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" loading={saving} disabled={!nom.trim() || !classeId}>
              Ajouter
            </Button>
          </div>
        </form>
      ) : null}

      {!loading ? (
        <div className="subjects-stats-grid">
          <StatCard icon={BookOpen} label="Matieres au total" value={subjects.length} tone="blue" />
          <StatCard icon={Users} label="Filieres" value={filieres.length} tone="green" />
          <StatCard icon={GraduationCap} label="Niveaux" value={classes.length} tone="orange" />
          <StatCard icon={FileText} label="Annee academique" value={anneeAcademique} tone="purple" />
        </div>
      ) : null}

      {!loading && filiereRows.length > 0 ? (
        <div className="subjects-table-card">
          <div className="subjects-table-head">
            <h3 className="subjects-table-title">Repartition par filiere et annee</h3>
            <div className="subjects-table-filters">
              <select
                className="subjects-filter-select"
                value={filiereFilter}
                onChange={(e) => setFiliereFilter(e.target.value)}
              >
                <option value="all">Toutes les filieres</option>
                {filieres.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.nom}
                  </option>
                ))}
              </select>
              <select
                className="subjects-filter-select"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="all">Toutes les annees</option>
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="subjects-table-scroll">
            <table className="subjects-table">
              <thead>
                <tr>
                  <th>Filiere</th>
                  <th>Annee</th>
                  <th>Matieres enseignees</th>
                  <th>Annee academique</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, i) => (
                  <tr key={row.id} className="row-fade-in" style={{ '--stagger-index': Math.min(i, 14) } as CSSProperties}>
                    <td>
                      <div className="subjects-table-filiere">
                        <span className={`subjects-table-badge subjects-table-badge-${row.tone}`}>
                          {row.initials}
                        </span>
                        {row.filiereNom}
                      </div>
                    </td>
                    <td>{row.niveau}</td>
                    <td>
                      {row.matieres.length > 0 ? (
                        <div className="subjects-table-tags">
                          {row.matieres.map((m) => (
                            <span key={m} className="subjects-table-tag">
                              {m}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="subjects-table-empty">—</span>
                      )}
                    </td>
                    <td>{row.anneeAcademique}</td>
                    <td>
                      <button
                        className="subjects-table-action"
                        onClick={() => setFiliereFilter(row.filiereId)}
                        aria-label={`Filtrer sur ${row.filiereNom}`}
                        title="Filtrer sur cette filiere"
                      >
                        <Eye size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="subjects-table-footer">
            <span>
              Affichage de {filteredRows.length} sur {filiereRows.length} ligne{filiereRows.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      ) : null}

      {loading ? (
        <div className="subjects-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="subject-card">
              <Skeleton width="50%" height={16} />
              <div style={{ marginTop: 10 }}>
                <Skeleton width="70%" height={12} />
              </div>
            </div>
          ))}
        </div>
      ) : subjectGroups.length === 0 ? (
        <p className="subjects-empty">
          Aucune matiere pour le moment. Importez votre structure pedagogique depuis Parametres.
        </p>
      ) : (
        <div className="subjects-grid">
          {subjectGroups.map(({ subject, classLabels }, i) => {
            const { icon: Icon, domain } = getSubjectExpertise(subject.nom);
            const isTci = TCI_PATTERN.test(subject.nom);
            const isMi = !isTci && MI_PATTERN.test(subject.nom);
            const isFcme = !isTci && !isMi && FCME_PATTERN.test(subject.nom);
            const isMarketing = !isTci && !isMi && !isFcme && MARKETING_PATTERN.test(subject.nom);

            return (
              <TiltCard
                key={subject.nom}
                className="subject-card fade-in-up"
                style={{ '--stagger-index': i } as CSSProperties}
                maxTilt={6}
              >
                <div
                  className="subject-card-banner"
                  style={{ backgroundImage: `url("${getSubjectImage(subject.nom)}")` }}
                  aria-hidden="true"
                />
                <div className="subject-card-header">
                  <div className="subject-card-icon">
                    <Icon size={20} />
                  </div>
                  <div className="subject-card-header-actions">
                    <span className="subject-card-coeff">Coef. {subject.coefficient}</span>
                    <button
                      className="subject-card-edit"
                      onClick={() => startEditSubject(subject)}
                      aria-label={`Modifier ${subject.nom}`}
                    >
                      <Pencil size={13} />
                    </button>
                  </div>
                </div>

                {editingSubjectNom === subject.nom ? (
                  <div className="subject-card-edit-form">
                    <input
                      className="subject-card-edit-input"
                      value={editNom}
                      onChange={(e) => setEditNom(e.target.value)}
                      placeholder="Nom de la matiere"
                      autoFocus
                    />
                    <input
                      className="subject-card-edit-input"
                      type="number"
                      min={1}
                      max={10}
                      value={editCoefficient}
                      onChange={(e) => setEditCoefficient(e.target.value)}
                      placeholder="Coefficient"
                    />
                    <div className="subject-card-edit-actions">
                      <button
                        className="subject-card-edit-confirm"
                        onClick={() => handleSaveEditSubject(subject.nom)}
                        disabled={editSaving}
                        aria-label="Valider"
                      >
                        <Check size={14} />
                      </button>
                      <button
                        className="subject-card-edit-cancel"
                        onClick={() => setEditingSubjectNom(null)}
                        aria-label="Annuler"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="subject-card-name">{subject.nom}</h3>
                    <span className="subject-card-domain">{domain}</span>
                  </>
                )}

                {classLabels.length > 0 ? (
                  <div className="subject-card-classes">
                    {classLabels.map((label) => (
                      <span key={label} className="subject-class-chip">
                        {label}
                      </span>
                    ))}
                  </div>
                ) : null}

                {isTci
                  ? ([1, 2] as const).map((level) => {
                      const levelChapters = tciChapters.filter((c) => c.level === level);
                      const chapitreCount = levelChapters.filter((c) => c.kind === 'chapitre').length;
                      return (
                        <div className="subject-teaching" key={level}>
                          <div className="subject-teaching-header">
                            <GraduationCap size={15} />
                            <span>Mon enseignement — {level === 1 ? TCI_COURSE_SUBTITLE_1 : TCI_COURSE_SUBTITLE_2}</span>
                          </div>
                          <div className="subject-teaching-grid">
                            {levelChapters.map((chapter, ci) => (
                              <button
                                key={chapter.id}
                                className="subject-teaching-chip"
                                onClick={() => setReaderIndex(chapter.number - 1)}
                              >
                                {chapter.kind === 'chapitre' ? `Ch. ${ci + 1}` : `Cas ${ci + 1 - chapitreCount}`}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  : null}

                {isMi ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {MI_COURSE_SUBTITLE}</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {miChapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setMiReaderIndex(chapter.number - 1)}
                        >
                          {`Ch. ${ci + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {isMarketing ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {MARKETING_COURSE_TITLE} ({MARKETING_COURSE_SUBTITLE})</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {marketingChapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setMktReaderIndex(chapter.number - 1)}
                        >
                          {`Ch. ${ci + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {isMarketing ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {MARKETING_COURSE_TITLE} ({MARKETING2_COURSE_SUBTITLE})</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {marketing2Chapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setMkt2ReaderIndex(chapter.number - 1)}
                        >
                          {`Ch. ${ci + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {isFcme ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {FCME_COURSE_TITLE} ({FCME_COURSE_SUBTITLE})</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {fcmeChapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setFcmeReaderIndex(chapter.number - 1)}
                        >
                          {`Ch. ${ci + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {isFcme ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {FCME2_COURSE_TITLE} ({FCME2_COURSE_SUBTITLE})</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {fcme2Chapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setFcme2ReaderIndex(chapter.number - 1)}
                        >
                          {chapter.number === 8 ? 'Applications' : `Ch. ${ci + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </TiltCard>
            );
          })}
        </div>
      )}

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

      {mkt2ReaderIndex !== null ? (
        <TeachingReader
          startIndex={mkt2ReaderIndex}
          onClose={() => setMkt2ReaderIndex(null)}
          chapters={marketing2Chapters}
          courseTitle="Marketing"
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
          courseTitle="FCME"
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
          courseTitle="FCME"
          courseSubtitle={FCME2_COURSE_SUBTITLE}
          sideImage={landingMarketingImage}
          sideHeading="FCME"
          sideText="Fondements, concepts, marketing et étude du marché"
        />
      ) : null}
    </div>
  );
}
