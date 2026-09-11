import { useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { Building2, Mail, Phone, Plus, Search, Trash2, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useEstablishment } from '../context/EstablishmentContext';
import { addTeacherDoc, deleteTeacherDoc } from '../services/dataService';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import Skeleton from '../components/Skeleton';
import type { Class, Filiere, Student } from '../types';
import './Students.css';

export default function Students() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: students, loading: loadingStudents } = useTeacherCollection<Student>('students', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const loading = loadingStudents || loadingClasses || loadingFilieres;

  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [sexe, setSexe] = useState<'M' | 'F' | ''>('');
  const [matricule, setMatricule] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [classeId, setClasseId] = useState('');
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState('');
  const [classeFilter, setClasseFilter] = useState('all');

  const classById = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);
  const filiereById = useMemo(() => new Map(filieres.map((f) => [f.id, f])), [filieres]);

  const garcons = useMemo(() => students.filter((s) => s.sexe === 'M').length, [students]);
  const filles = useMemo(() => students.filter((s) => s.sexe === 'F').length, [students]);
  const classesRepresentees = useMemo(() => new Set(students.map((s) => s.classeId)).size, [students]);

  const filteredStudents = useMemo(() => {
    const q = search.trim().toLowerCase();
    return students
      .filter((s) => classeFilter === 'all' || s.classeId === classeFilter)
      .filter((s) => !q || `${s.prenom} ${s.nom}`.toLowerCase().includes(q) || (s.matricule ?? '').toLowerCase().includes(q))
      .sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));
  }, [students, search, classeFilter]);

  async function handleCreateStudent(e: FormEvent) {
    e.preventDefault();
    if (!user || !nom.trim() || !prenom.trim() || !classeId) return;
    const classe = classById.get(classeId);
    setSaving(true);
    try {
      await addTeacherDoc('students', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        nom: nom.trim(),
        prenom: prenom.trim(),
        sexe: sexe || null,
        matricule: matricule.trim() || null,
        telephone: telephone.trim() || null,
        email: email.trim() || null,
        classeId,
        filiereId: classe?.filiereId ?? null,
        anneeAcademique: classe?.anneeAcademique ?? '',
        createdAt: new Date().toISOString(),
      });
      showToast('success', 'Etudiant ajoute.');
      setNom('');
      setPrenom('');
      setSexe('');
      setMatricule('');
      setTelephone('');
      setEmail('');
      setClasseId('');
      setShowForm(false);
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de l'ajout de l'etudiant.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteStudent(student: Student) {
    if (!window.confirm(`Supprimer "${student.prenom} ${student.nom}" ?`)) return;
    try {
      await deleteTeacherDoc('students', student.id);
      showToast('success', 'Etudiant supprime.');
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la suppression.');
    }
  }

  return (
    <div className="students-page fade-in-up">
      <div className="students-header">
        <div className="students-header-left">
          <div className="students-header-icon">
            <Users size={22} />
          </div>
          <div>
            <h2 className="students-title">Mes etudiants</h2>
            <p className="students-subtitle">Gerez la liste de vos etudiants par classe.</p>
          </div>
        </div>
        <Button variant="primary" onClick={() => setShowForm((v) => !v)} disabled={classes.length === 0}>
          <Plus size={18} />
          Ajouter un eleve
        </Button>
      </div>

      {classes.length === 0 && !loading ? (
        <p className="students-empty">Creez d'abord une classe (page Classes) avant d'ajouter des etudiants.</p>
      ) : null}

      {showForm ? (
        <form className="students-form fade-in-up" onSubmit={handleCreateStudent}>
          <div className="students-form-row">
            <div className="students-field">
              <label className="students-label" htmlFor="student-prenom">
                Prenom
              </label>
              <input
                id="student-prenom"
                className="students-input"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div className="students-field">
              <label className="students-label" htmlFor="student-nom">
                Nom
              </label>
              <input
                id="student-nom"
                className="students-input"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="students-form-row">
            <div className="students-field">
              <label className="students-label" htmlFor="student-classe">
                Classe
              </label>
              <select
                id="student-classe"
                className="students-input"
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
            <div className="students-field">
              <label className="students-label" htmlFor="student-sexe">
                Sexe
              </label>
              <select
                id="student-sexe"
                className="students-input"
                value={sexe}
                onChange={(e) => setSexe(e.target.value as 'M' | 'F' | '')}
              >
                <option value="">Non precise</option>
                <option value="M">Masculin</option>
                <option value="F">Feminin</option>
              </select>
            </div>
          </div>

          <div className="students-form-row">
            <div className="students-field">
              <label className="students-label" htmlFor="student-matricule">
                Matricule (optionnel)
              </label>
              <input
                id="student-matricule"
                className="students-input"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
              />
            </div>
            <div className="students-field">
              <label className="students-label" htmlFor="student-telephone">
                Telephone (optionnel)
              </label>
              <input
                id="student-telephone"
                className="students-input"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
          </div>

          <div className="students-field">
            <label className="students-label" htmlFor="student-email">
              Email (optionnel)
            </label>
            <input
              id="student-email"
              type="email"
              className="students-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="students-form-actions">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" loading={saving} disabled={!nom.trim() || !prenom.trim() || !classeId}>
              Ajouter
            </Button>
          </div>
        </form>
      ) : null}

      {!loading ? (
        <div className="students-stats-grid">
          <StatCard icon={Users} label="Etudiants au total" value={students.length} tone="blue" />
          <StatCard icon={Users} label="Garcons" value={garcons} tone="green" />
          <StatCard icon={Users} label="Filles" value={filles} tone="purple" />
          <StatCard icon={Building2} label="Classes representees" value={classesRepresentees} tone="orange" />
        </div>
      ) : null}

      {!loading && students.length > 0 ? (
        <div className="students-toolbar">
          <div className="students-search">
            <Search size={16} />
            <input
              placeholder="Rechercher un etudiant..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select className="students-filter-select" value={classeFilter} onChange={(e) => setClasseFilter(e.target.value)}>
            <option value="all">Toutes les classes</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {(filiereById.get(c.filiereId ?? '')?.nom ?? '—') + ' · ' + (c.niveau ?? c.nom)}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {loading ? (
        <div className="students-table-card">
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <Skeleton height={20} />
            </div>
          ))}
        </div>
      ) : students.length === 0 ? (
        <p className="students-empty">Aucun etudiant pour le moment. Cliquez sur "Ajouter un eleve" pour commencer.</p>
      ) : (
        <div className="students-table-card">
          <div className="students-table-scroll">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Etudiant</th>
                  <th>Matricule</th>
                  <th>Classe</th>
                  <th>Filiere</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, i) => {
                  const classe = classById.get(student.classeId);
                  const filiere = filiereById.get(classe?.filiereId ?? '');
                  return (
                    <tr key={student.id} className="row-fade-in" style={{ '--stagger-index': Math.min(i, 14) } as CSSProperties}>
                      <td>
                        <div className="students-table-name">
                          {student.prenom} {student.nom}
                        </div>
                      </td>
                      <td>{student.matricule || <span className="students-table-empty">—</span>}</td>
                      <td>{classe?.niveau ?? classe?.nom ?? '—'}</td>
                      <td>{filiere?.nom ?? '—'}</td>
                      <td>
                        <div className="students-table-contact">
                          {student.telephone ? (
                            <span>
                              <Phone size={12} /> {student.telephone}
                            </span>
                          ) : null}
                          {student.email ? (
                            <span>
                              <Mail size={12} /> {student.email}
                            </span>
                          ) : null}
                          {!student.telephone && !student.email ? <span className="students-table-empty">—</span> : null}
                        </div>
                      </td>
                      <td>
                        <button
                          className="students-table-action"
                          onClick={() => handleDeleteStudent(student)}
                          aria-label="Supprimer l'etudiant"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {filteredStudents.length === 0 ? (
            <p className="students-empty" style={{ padding: '16px' }}>
              Aucun etudiant ne correspond a la recherche.
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
