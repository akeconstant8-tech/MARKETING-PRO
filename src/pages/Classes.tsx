import { useMemo, useState, type CSSProperties, type FormEvent } from 'react';
import { Building2, Calendar, Check, GraduationCap, Layers, Pencil, Plus, Sparkles, Trash2, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useEstablishment } from '../context/EstablishmentContext';
import { addTeacherDoc, deleteTeacherDoc, updateTeacherDoc } from '../services/dataService';
import { MATIERES, MATIERE_COEFFICIENTS, PRECONFIGURED_GROUPS } from '../data/preconfiguredGroups';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import TiltCard from '../components/TiltCard';
import Skeleton from '../components/Skeleton';
import type { Class, Filiere, Subject } from '../types';
import './Classes.css';

export default function Classes() {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { activeId: activeEtablissementId } = useEstablishment();
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const loading = loadingClasses || loadingFilieres || loadingSubjects;

  const [showForm, setShowForm] = useState(false);
  const [niveau, setNiveau] = useState('');
  const [anneeAcademique, setAnneeAcademique] = useState('');
  const [filiereId, setFiliereId] = useState('');
  const [creatingFiliere, setCreatingFiliere] = useState(false);
  const [newFiliereNom, setNewFiliereNom] = useState('');
  const [saving, setSaving] = useState(false);
  const [addingGroupId, setAddingGroupId] = useState<string | null>(null);

  const [editingClasseId, setEditingClasseId] = useState<string | null>(null);
  const [editNiveau, setEditNiveau] = useState('');
  const [editAnnee, setEditAnnee] = useState('');
  const [editSaving, setEditSaving] = useState(false);

  const filiereById = useMemo(() => new Map(filieres.map((f) => [f.id, f])), [filieres]);

  const subjectCountByClasse = useMemo(() => {
    const map = new Map<string, number>();
    for (const s of subjects) {
      if (!s.classeId) continue;
      map.set(s.classeId, (map.get(s.classeId) ?? 0) + 1);
    }
    return map;
  }, [subjects]);

  const niveauxCount = useMemo(() => new Set(classes.map((c) => c.niveau ?? c.nom)).size, [classes]);
  const yearOptions = useMemo(() => [...new Set(classes.map((c) => c.anneeAcademique))].sort(), [classes]);
  const currentYearLabel = yearOptions.length === 1 ? yearOptions[0] : yearOptions.length > 1 ? 'Plusieurs' : '—';

  const sortedClasses = useMemo(() => {
    return [...classes].sort((a, b) => {
      const fa = filiereById.get(a.filiereId ?? '')?.nom ?? '';
      const fb = filiereById.get(b.filiereId ?? '')?.nom ?? '';
      return fa.localeCompare(fb) || (a.niveau ?? a.nom).localeCompare(b.niveau ?? b.nom);
    });
  }, [classes, filiereById]);

  const filiereIdByNom = useMemo(() => {
    const map = new Map<string, string>();
    for (const f of filieres) map.set(f.nom, f.id);
    return map;
  }, [filieres]);

  const existingGroupIds = useMemo(() => {
    const ids = new Set<string>();
    for (const group of PRECONFIGURED_GROUPS) {
      const groupFiliereId = filiereIdByNom.get(group.filiereNom);
      if (!groupFiliereId) continue;
      const alreadyThere = classes.some((c) => c.filiereId === groupFiliereId && (c.niveau ?? c.nom) === group.niveau);
      if (alreadyThere) ids.add(group.id);
    }
    return ids;
  }, [classes, filiereIdByNom]);

  async function handleCreateClasse(e: FormEvent) {
    e.preventDefault();
    if (!user || !niveau.trim() || !anneeAcademique.trim()) return;
    if (!creatingFiliere && !filiereId) return;
    if (creatingFiliere && !newFiliereNom.trim()) return;

    setSaving(true);
    try {
      let resolvedFiliereId = filiereId;
      let resolvedFiliereNom = filiereById.get(filiereId)?.nom ?? '';

      if (creatingFiliere) {
        resolvedFiliereNom = newFiliereNom.trim();
        resolvedFiliereId = await addTeacherDoc('filieres', {
          teacherId: user.uid,
          etablissementId: activeEtablissementId ?? null,
          nom: resolvedFiliereNom,
          createdAt: new Date().toISOString(),
        });
      }

      await addTeacherDoc('classes', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        nom: `${resolvedFiliereNom} - ${niveau.trim()}`,
        niveau: niveau.trim(),
        filiereId: resolvedFiliereId,
        anneeAcademique: anneeAcademique.trim(),
        createdAt: new Date().toISOString(),
      });

      showToast('success', 'Classe ajoutee.');
      setNiveau('');
      setAnneeAcademique('');
      setFiliereId('');
      setNewFiliereNom('');
      setCreatingFiliere(false);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de l'ajout de la classe.");
    } finally {
      setSaving(false);
    }
  }

  async function handleAddPreconfiguredGroup(group: (typeof PRECONFIGURED_GROUPS)[number]) {
    if (!user || existingGroupIds.has(group.id)) return;
    setAddingGroupId(group.id);
    try {
      let groupFiliereId = filiereIdByNom.get(group.filiereNom);
      if (!groupFiliereId) {
        groupFiliereId = await addTeacherDoc('filieres', {
          teacherId: user.uid,
          etablissementId: activeEtablissementId ?? null,
          nom: group.filiereNom,
          createdAt: new Date().toISOString(),
        });
      }

      const classId = await addTeacherDoc('classes', {
        teacherId: user.uid,
        etablissementId: activeEtablissementId ?? null,
        nom: `${group.filiereNom.split(' (')[0]} - ${group.niveau}`,
        niveau: group.niveau,
        filiereId: groupFiliereId,
        anneeAcademique: anneeAcademique.trim() || new Date().getFullYear() + '-' + (new Date().getFullYear() + 1),
        createdAt: new Date().toISOString(),
      });

      for (const matiereKey of group.matieres) {
        await addTeacherDoc('subjects', {
          teacherId: user.uid,
          etablissementId: activeEtablissementId ?? null,
          nom: MATIERES[matiereKey],
          coefficient: MATIERE_COEFFICIENTS[matiereKey],
          classeId: classId,
          createdAt: new Date().toISOString(),
        });
      }

      showToast('success', `Groupe "${group.filiereNom.split(' (')[0]} - ${group.niveau}" cree avec ses matieres.`);
    } catch (err) {
      console.error(err);
      showToast('error', "Echec de la creation du groupe.");
    } finally {
      setAddingGroupId(null);
    }
  }

  function startEditClasse(classe: Class) {
    setEditingClasseId(classe.id);
    setEditNiveau(classe.niveau ?? classe.nom);
    setEditAnnee(classe.anneeAcademique);
  }

  async function handleSaveEditClasse(classe: Class) {
    if (!editNiveau.trim() || !editAnnee.trim()) return;
    setEditSaving(true);
    try {
      const filiere = filiereById.get(classe.filiereId ?? '');
      await updateTeacherDoc('classes', classe.id, {
        niveau: editNiveau.trim(),
        anneeAcademique: editAnnee.trim(),
        nom: `${(filiere?.nom ?? classe.nom).split(' (')[0]} - ${editNiveau.trim()}`,
      });
      showToast('success', 'Groupe modifie.');
      setEditingClasseId(null);
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la modification.');
    } finally {
      setEditSaving(false);
    }
  }

  async function handleDeleteClasse(classe: Class) {
    const nbSubjects = subjectCountByClasse.get(classe.id) ?? 0;
    const warning =
      nbSubjects > 0
        ? ` Attention : ${nbSubjects} matiere(s) sont rattachees a cette classe et resteront orphelines.`
        : '';
    if (!window.confirm(`Supprimer la classe "${classe.nom}" ?${warning}`)) return;
    try {
      await deleteTeacherDoc('classes', classe.id);
      showToast('success', 'Classe supprimee.');
    } catch (err) {
      console.error(err);
      showToast('error', 'Echec de la suppression.');
    }
  }

  return (
    <div className="classes-page fade-in-up">
      <div className="classes-header">
        <div className="classes-header-left">
          <div className="classes-header-icon">
            <Building2 size={22} />
          </div>
          <div>
            <h2 className="classes-title">Mes classes</h2>
            <p className="classes-subtitle">Gerez vos classes et filieres pour chaque annee academique.</p>
          </div>
        </div>
        <Button variant="primary" onClick={() => setShowForm((v) => !v)}>
          <Plus size={18} />
          Nouvelle classe
        </Button>
      </div>

      <div className="classes-presets-card fade-in-up">
        <div className="classes-presets-header">
          <Sparkles size={16} />
          <h3>Groupes preconfigures</h3>
        </div>
        <p className="classes-presets-hint">
          Un clic cree la filiere (si besoin), la classe et ses matieres avec les bons coefficients.
        </p>
        <div className="classes-presets-grid">
          {PRECONFIGURED_GROUPS.map((group) => {
            const already = existingGroupIds.has(group.id);
            return (
              <button
                key={group.id}
                type="button"
                className={`classes-preset-btn ${already ? 'classes-preset-btn-done' : ''}`}
                onClick={() => handleAddPreconfiguredGroup(group)}
                disabled={already || addingGroupId === group.id}
              >
                <span className="classes-preset-name">{group.filiereNom.split(' (')[0]}</span>
                <span className="classes-preset-niveau">{group.niveau}</span>
                <span className="classes-preset-status">
                  {already ? (
                    <>
                      <Check size={13} /> Deja cree
                    </>
                  ) : addingGroupId === group.id ? (
                    'Creation...'
                  ) : (
                    <>
                      <Plus size={13} /> Ajouter
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {showForm ? (
        <form className="classes-form fade-in-up" onSubmit={handleCreateClasse}>
          <div className="classes-field">
            <label className="classes-label" htmlFor="classe-filiere">
              Filiere
            </label>
            {!creatingFiliere ? (
              <div className="classes-filiere-row">
                <select
                  id="classe-filiere"
                  className="classes-input"
                  value={filiereId}
                  onChange={(e) => setFiliereId(e.target.value)}
                  required={!creatingFiliere}
                >
                  <option value="" disabled>
                    Choisir une filiere
                  </option>
                  {filieres.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nom}
                    </option>
                  ))}
                </select>
                <button type="button" className="classes-filiere-toggle" onClick={() => setCreatingFiliere(true)}>
                  + Nouvelle filiere
                </button>
              </div>
            ) : (
              <div className="classes-filiere-row">
                <input
                  className="classes-input"
                  value={newFiliereNom}
                  onChange={(e) => setNewFiliereNom(e.target.value)}
                  placeholder="Ex : Gestion Commerciale (GEC)"
                  required
                />
                <button
                  type="button"
                  className="classes-filiere-toggle"
                  onClick={() => {
                    setCreatingFiliere(false);
                    setNewFiliereNom('');
                  }}
                >
                  Filiere existante
                </button>
              </div>
            )}
          </div>

          <div className="classes-form-row">
            <div className="classes-field">
              <label className="classes-label" htmlFor="classe-niveau">
                Niveau
              </label>
              <input
                id="classe-niveau"
                className="classes-input"
                value={niveau}
                onChange={(e) => setNiveau(e.target.value)}
                placeholder="Ex : 1ere Annee"
                required
              />
            </div>
            <div className="classes-field">
              <label className="classes-label" htmlFor="classe-annee">
                Annee academique
              </label>
              <input
                id="classe-annee"
                className="classes-input"
                value={anneeAcademique}
                onChange={(e) => setAnneeAcademique(e.target.value)}
                placeholder="Ex : 2026-2027"
                required
              />
            </div>
          </div>

          <div className="classes-form-actions">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
            <Button type="submit" loading={saving} disabled={!niveau.trim() || !anneeAcademique.trim()}>
              Creer la classe
            </Button>
          </div>
        </form>
      ) : null}

      {!loading ? (
        <div className="classes-stats-grid">
          <StatCard icon={Building2} label="Classes au total" value={classes.length} tone="blue" />
          <StatCard icon={Layers} label="Filieres" value={filieres.length} tone="green" />
          <StatCard icon={GraduationCap} label="Niveaux" value={niveauxCount} tone="orange" />
          <StatCard icon={Calendar} label="Annee academique" value={currentYearLabel} tone="purple" />
        </div>
      ) : null}

      {loading ? (
        <div className="classes-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="class-card">
              <Skeleton width="60%" height={16} />
              <div style={{ marginTop: 10 }}>
                <Skeleton width="40%" height={12} />
              </div>
            </div>
          ))}
        </div>
      ) : sortedClasses.length === 0 ? (
        <p className="classes-empty">Aucune classe pour le moment. Cliquez sur "Nouvelle classe" pour commencer.</p>
      ) : (
        <div className="classes-grid">
          {sortedClasses.map((classe, i) => {
            const filiere = filiereById.get(classe.filiereId ?? '');
            const nbSubjects = subjectCountByClasse.get(classe.id) ?? 0;
            return (
              <TiltCard
                key={classe.id}
                className="class-card fade-in-up"
                style={{ '--stagger-index': i } as CSSProperties}
                maxTilt={6}
              >
                <div className="class-card-header">
                  <div className="class-card-icon">
                    <Building2 size={18} />
                  </div>
                  <div className="class-card-actions">
                    <button
                      className="class-card-edit"
                      onClick={() => startEditClasse(classe)}
                      aria-label="Modifier la classe"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      className="class-card-delete"
                      onClick={() => handleDeleteClasse(classe)}
                      aria-label="Supprimer la classe"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
                <h3 className="class-card-title">{filiere?.nom ?? 'Filiere inconnue'}</h3>

                {editingClasseId === classe.id ? (
                  <div className="class-card-edit-form">
                    <input
                      className="class-card-edit-input"
                      value={editNiveau}
                      onChange={(e) => setEditNiveau(e.target.value)}
                      placeholder="Niveau"
                      autoFocus
                    />
                    <input
                      className="class-card-edit-input"
                      value={editAnnee}
                      onChange={(e) => setEditAnnee(e.target.value)}
                      placeholder="Annee academique"
                    />
                    <div className="class-card-edit-actions">
                      <button
                        className="class-card-edit-confirm"
                        onClick={() => handleSaveEditClasse(classe)}
                        disabled={editSaving}
                        aria-label="Valider"
                      >
                        <Check size={14} />
                      </button>
                      <button
                        className="class-card-edit-cancel"
                        onClick={() => setEditingClasseId(null)}
                        aria-label="Annuler"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="class-card-niveau">{classe.niveau ?? classe.nom}</p>
                    <div className="class-card-footer">
                      <span className="class-card-tag">{classe.anneeAcademique}</span>
                      <span className="class-card-tag">
                        {nbSubjects} matiere{nbSubjects > 1 ? 's' : ''}
                      </span>
                    </div>
                  </>
                )}
              </TiltCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
