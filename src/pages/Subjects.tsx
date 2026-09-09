import { useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { BookOpen, Eye, FileText, GraduationCap, Plus, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { addTeacherDoc } from '../services/dataService';
import { getSubjectExpertise } from '../utils/subjectExpertise';
import { tciChapters, TCI_COURSE_SUBTITLE } from '../data/tciCourse';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import TiltCard from '../components/TiltCard';
import TeachingReader from '../components/TeachingReader';
import Skeleton from '../components/Skeleton';
import type { Class, Filiere, Subject } from '../types';
import './Subjects.css';

const TCI_PATTERN = /\bTCI\b|Technique du Commerce International/i;
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
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const loading = loadingSubjects || loadingClasses || loadingFilieres;

  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [coefficient, setCoefficient] = useState('1');
  const [classeId, setClasseId] = useState('');
  const [saving, setSaving] = useState(false);

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
                {filteredRows.map((row) => (
                  <tr key={row.id}>
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

            return (
              <TiltCard
                key={subject.nom}
                className="subject-card fade-in-up"
                style={{ '--stagger-index': i } as CSSProperties}
                maxTilt={6}
              >
                <div className="subject-card-header">
                  <div className="subject-card-icon">
                    <Icon size={20} />
                  </div>
                  <span className="subject-card-coeff">Coef. {subject.coefficient}</span>
                </div>

                <h3 className="subject-card-name">{subject.nom}</h3>
                <span className="subject-card-domain">{domain}</span>

                {classLabels.length > 0 ? (
                  <div className="subject-card-classes">
                    {classLabels.map((label) => (
                      <span key={label} className="subject-class-chip">
                        {label}
                      </span>
                    ))}
                  </div>
                ) : null}

                {isTci ? (
                  <div className="subject-teaching">
                    <div className="subject-teaching-header">
                      <GraduationCap size={15} />
                      <span>Mon enseignement — {TCI_COURSE_SUBTITLE}</span>
                    </div>
                    <div className="subject-teaching-grid">
                      {tciChapters.map((chapter, ci) => (
                        <button
                          key={chapter.id}
                          className="subject-teaching-chip"
                          onClick={() => setReaderIndex(ci)}
                        >
                          {chapter.kind === 'chapitre' ? `Ch. ${chapter.number}` : `Cas ${chapter.number - 7}`}
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
    </div>
  );
}
