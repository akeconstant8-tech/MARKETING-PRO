import { useMemo, useState, type CSSProperties } from 'react';
import { Download, Moon, Sun, GraduationCap, Building2, BadgeCheck, MonitorSmartphone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../hooks/useTheme';
import { useToast } from '../context/ToastContext';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { signOutUser } from '../services/authService';
import { seedTeachingStructure, teachingStructureAlreadySeeded } from '../utils/seedTeachingData';
import { getSubjectExpertise } from '../utils/subjectExpertise';
import Button from '../components/Button';
import Skeleton from '../components/Skeleton';
import TiltCard from '../components/TiltCard';
import type { Class, Filiere, Subject } from '../types';
import './Settings.css';

export default function Settings() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const { installable, installed, promptInstall } = useInstallPrompt();
  const [seeding, setSeeding] = useState(false);
  const [installing, setInstalling] = useState(false);

  const { items: filieres, loading: loadingFilieres } = useTeacherCollection<Filiere>('filieres', 'nom');
  const { items: classes, loading: loadingClasses } = useTeacherCollection<Class>('classes', 'nom');
  const { items: subjects, loading: loadingSubjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const loadingExpertise = loadingFilieres || loadingClasses || loadingSubjects;

  const uniqueSubjects = useMemo(() => {
    const seen = new Map<string, Subject>();
    for (const s of subjects) {
      if (!seen.has(s.nom)) seen.set(s.nom, s);
    }
    return [...seen.values()];
  }, [subjects]);

  const filiereGroups = useMemo(
    () =>
      filieres.map((filiere) => ({
        filiere,
        classes: classes
          .filter((c) => c.filiereId === filiere.id)
          .map((classe) => ({
            classe,
            subjects: subjects.filter((s) => s.classeId === classe.id),
          })),
      })),
    [filieres, classes, subjects]
  );

  async function handleInstall() {
    setInstalling(true);
    try {
      const accepted = await promptInstall();
      showToast(accepted ? 'success' : 'info', accepted ? 'Application installee.' : "Installation annulee.");
    } finally {
      setInstalling(false);
    }
  }

  async function handleImportStructure() {
    if (!user) return;
    if (!window.confirm('Importer vos filieres, classes et matieres dans Firestore ? Cette action ne devrait etre lancee qu\'une seule fois.')) {
      return;
    }
    setSeeding(true);
    try {
      const alreadySeeded = await teachingStructureAlreadySeeded(user.uid);
      if (alreadySeeded) {
        showToast('warning', 'Cette structure a deja ete importee.');
        return;
      }
      const result = await seedTeachingStructure(user.uid);
      showToast('success', `Importe : ${result.filieres} filieres, ${result.classes} classes, ${result.matieres} matieres.`);
    } catch (error) {
      console.error(error);
      showToast('error', "Echec de l'import. Reessayez.");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <div className="settings-page fade-in-up">
      <div className="settings-card settings-card-narrow">
        <h3 className="settings-section-title">Mon profil</h3>
        <div className="settings-profile">
          <div className="settings-avatar">{(user?.displayName ?? user?.email ?? '?').charAt(0).toUpperCase()}</div>
          <div>
            <div className="settings-name">{user?.displayName || 'Professeur'}</div>
            <div className="settings-email">{user?.email}</div>
          </div>
        </div>
      </div>

      <div className="settings-card expertise-card">
        <div className="expertise-header">
          <div className="expertise-header-icon">
            <GraduationCap size={22} />
          </div>
          <div>
            <h3 className="expertise-title">Mes matières d'enseignement</h3>
            <p className="expertise-subtitle">
              Expertise en commerce international, marketing, vente et négociation
            </p>
          </div>
        </div>

        {loadingExpertise ? (
          <div className="expertise-subjects">
            {[0, 1, 2, 3, 4].map((i) => (
              <Skeleton key={i} width={180} height={52} radius="var(--radius-sm)" />
            ))}
          </div>
        ) : uniqueSubjects.length === 0 ? (
          <p className="settings-hint">
            Aucune matière pour le moment. Importez votre structure pédagogique ci-dessous.
          </p>
        ) : (
          <>
            <div className="expertise-subjects">
              {uniqueSubjects.map((subject, i) => {
                const { icon: Icon, domain } = getSubjectExpertise(subject.nom);
                return (
                  <div key={subject.id} className="expertise-pill fade-in-up" style={{ '--stagger-index': i } as CSSProperties}>
                    <span className="expertise-pill-icon">
                      <Icon size={17} />
                    </span>
                    <span className="expertise-pill-text">
                      <span className="expertise-pill-name">{subject.nom}</span>
                      <span className="expertise-pill-domain">{domain}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="expertise-filiere-grid">
              {filiereGroups.map(({ filiere, classes: filiereClasses }, i) => (
                <TiltCard
                  key={filiere.id}
                  className="expertise-filiere-card fade-in-up"
                  style={{ '--stagger-index': i } as CSSProperties}
                  maxTilt={6}
                >
                  <div className="expertise-filiere-header">
                    <Building2 size={16} />
                    <h4>{filiere.nom}</h4>
                  </div>

                  {filiereClasses.map(({ classe, subjects: classSubjects }) => (
                    <div key={classe.id} className="expertise-year-block">
                      <div className="expertise-year-label">
                        <BadgeCheck size={14} />
                        {classe.niveau ?? classe.nom}
                      </div>
                      <ul className="expertise-subject-list">
                        {classSubjects.map((s) => (
                          <li key={s.id}>{s.nom}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TiltCard>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="settings-card settings-card-narrow">
        <h3 className="settings-section-title">Apparence</h3>
        <div className="settings-row">
          <div className="settings-row-label">
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            <span>Mode {theme === 'dark' ? 'sombre' : 'clair'}</span>
          </div>
          <button className="settings-toggle" onClick={toggleTheme} aria-label="Changer de theme">
            <span className={`settings-toggle-thumb ${theme === 'dark' ? 'settings-toggle-thumb-on' : ''}`} />
          </button>
        </div>
      </div>

      <div className="settings-card settings-card-narrow">
        <h3 className="settings-section-title">Application</h3>
        {installed ? (
          <p className="settings-hint">
            <MonitorSmartphone size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
            Marketing Pro est installe sur cet appareil et fonctionne hors connexion.
          </p>
        ) : installable ? (
          <>
            <p className="settings-hint">
              Installez Marketing Pro comme application pour un acces rapide depuis votre ecran d'accueil, meme sans connexion.
            </p>
            <Button variant="outline" onClick={handleInstall} disabled={installing}>
              <Download size={16} />
              {installing ? 'Installation...' : "Installer l'application"}
            </Button>
          </>
        ) : (
          <p className="settings-hint">
            Marketing Pro fonctionne hors connexion une fois ouvert. Pour l'installer sur cet appareil, utilisez le menu de votre navigateur ("Ajouter a l'ecran d'accueil" ou "Installer l'application").
          </p>
        )}
      </div>

      <div className="settings-card settings-card-narrow">
        <h3 className="settings-section-title">Donnees</h3>
        <p className="settings-hint">
          Importer votre structure pedagogique (filieres, classes, matieres) dans Firestore.
        </p>
        <Button variant="outline" onClick={handleImportStructure} disabled={seeding}>
          {seeding ? 'Import en cours...' : 'Importer ma structure pedagogique'}
        </Button>
      </div>

      <div className="settings-card settings-card-narrow">
        <h3 className="settings-section-title">Compte</h3>
        <Button variant="danger" onClick={() => signOutUser()}>
          Deconnexion
        </Button>
      </div>
    </div>
  );
}
