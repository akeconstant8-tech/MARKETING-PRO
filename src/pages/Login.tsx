import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  Mail,
  Lock,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  UserPlus,
  Users,
  WifiOff,
} from 'lucide-react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import BlurText from '../components/effects/BlurText';
import ShinyText from '../components/effects/ShinyText';
import { AnimatedList, AnimatedListItem } from '../components/effects/AnimatedList';
import { resetPassword, signInWithEmail, signInWithGoogle } from '../services/authService';
import { useToast } from '../context/ToastContext';
import { useTheme } from '../hooks/useTheme';
import imgCours from '../assets/images/landing/landing-cours.jpg';
import imgMarketing from '../assets/images/landing/landing-marketing.jpg';
import imgEtudiant from '../assets/images/landing/landing-etudiant.jpg';
import imgGestionNotes from '../assets/images/landing/landing-gestion-notes.jpg';
import imgPlanning from '../assets/images/landing/landing-planning.jpg';
import './Auth.css';

const features = [
  { icon: BookOpen, label: 'Cours et supports', description: 'Organisez vos cours et ressources par chapitre, prets a etre consultes en classe.', image: imgCours },
  { icon: BarChart3, label: 'Gestion des notes', description: 'Saisissez et suivez les notes de vos etudiants, moyennes calculees automatiquement.', image: imgGestionNotes },
  { icon: Users, label: 'Suivi des étudiants', description: 'Un profil complet par etudiant, classe par classe, filiere par filiere.', image: imgEtudiant },
  { icon: CalendarDays, label: 'Planning et évaluations', description: "Organisez vos evaluations et gardez une vue d'ensemble de votre planning.", image: imgPlanning },
];

const whyChecklist = [
  'Interface moderne et intuitive',
  'Acces rapide a vos cours et ressources',
  'Suivi personnalise de vos etudiants',
  'Securite et confidentialite de vos donnees',
];

const stats = [
  { icon: GraduationCap, value: 'Multi', label: 'Filières & classes' },
  { icon: Sparkles, value: 'Gratuit', label: 'Sans engagement' },
];

const ctaStats = [
  { icon: GraduationCap, value: 'Multi', label: 'Établissements & groupes' },
  { icon: WifiOff, value: '100%', label: 'Fonctionne hors connexion' },
  { icon: Sparkles, value: 'Gratuit', label: 'Pour les enseignants' },
];

export default function Login() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [resetVisible, setResetVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSending, setResetSending] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmail(email.trim(), password, remember);
      showToast('success', 'Connexion réussie.');
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connexion impossible.');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      showToast('success', 'Connexion réussie.');
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connexion Google impossible.');
    } finally {
      setGoogleLoading(false);
    }
  }

  function openLogin() {
    setShowLogin(true);
    document.getElementById('hero-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleReset(e: FormEvent) {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setResetSending(true);
    setResetMessage(null);
    try {
      await resetPassword(resetEmail.trim());
      setResetSuccess(true);
      setResetMessage('Email envoyé. Vérifiez votre boîte mail.');
    } catch (err) {
      setResetSuccess(false);
      setResetMessage(err instanceof Error ? err.message : 'Envoi impossible.');
    } finally {
      setResetSending(false);
    }
  }

  return (
    <div className="landing">
      <header className="landing-nav" id="top">
        <a href="#top" className="landing-nav-brand">
          <Logo size="small" />
        </a>
        <nav className="landing-nav-links">
          <a href="#top">Accueil</a>
          <a href="#contact">Contact</a>
          <a href="#apropos">À propos</a>
        </nav>
        <div className="landing-nav-actions">
          <button className="landing-theme-btn" onClick={toggleTheme} aria-label="Changer de theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="landing-nav-login-btn" onClick={openLogin}>
            Connexion
          </button>
        </div>
      </header>

      <section className="landing-hero" id="hero-panel">
        <AnimatePresence mode="wait">
          {!showLogin ? (
            <motion.div
              key="welcome"
              className="hero-row"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
            <div className="hero-copy">
              <motion.span
                className="hero-badge"
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reducedMotion ? undefined : { y: -2 }}
              >
                <GraduationCap size={14} />
                La plateforme dédiée aux professeurs de Marketing
              </motion.span>
              <BlurText text="Bienvenue Professeur 👋" className="hero-welcome" delay={0.4} as="p" />
              <h1 className="hero-title">
                <BlurText text="Transformez votre enseignement du" delay={0.6} stagger={0.14} duration={0.85} blur={10} rise={16} />{' '}
                <span className="hero-accent-wrap">
                  <ShinyText className="hero-accent">Marketing</ShinyText>
                  <svg className="hero-accent-mark" viewBox="0 0 220 22" preserveAspectRatio="none" aria-hidden="true">
                    <motion.path
                      d="M4 14.5C40 6 90 4 116 9C150 15.5 180 6 216 11"
                      fill="none"
                      strokeLinecap="round"
                      strokeWidth="6"
                      initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      animate={reducedMotion ? { pathLength: 1 } : { pathLength: 1, opacity: [0.55, 1, 0.55] }}
                      transition={
                        reducedMotion
                          ? { duration: 0.01 }
                          : {
                              pathLength: { duration: 0.7, delay: 1.85, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 2.6, delay: 2.2, repeat: Infinity, ease: 'easeInOut' },
                            }
                      }
                    />
                  </svg>
                </span>
              </h1>
              <motion.p
                className="hero-sub"
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              >
                Une solution complète, moderne et intuitive pour gérer vos cours, vos notes et accompagner vos
                étudiants vers la réussite.
              </motion.p>

              <AnimatedList className="hero-features">
                {features.map((f) => (
                  <AnimatedListItem key={f.label}>
                    <span className="hero-feature-icon">
                      <f.icon size={18} />
                    </span>
                    {f.label}
                  </AnimatedListItem>
                ))}
              </AnimatedList>

              <motion.p
                className="hero-pricing-note"
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  style={{ display: 'inline-flex' }}
                  initial={reducedMotion ? { scale: 1 } : { scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.55, delay: 1.62, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Sparkles size={14} />
                </motion.span>
                100&nbsp;% gratuit pour les enseignants.
              </motion.p>

              <div className="hero-stats">
                {stats.map((s) => (
                  <div key={s.label} className="hero-stat">
                    <s.icon size={18} />
                    <div>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="hero-visual"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-photo-frame">
                <img src={imgMarketing} alt="Professeur utilisant Marketing Pro sur son ordinateur portable" className="hero-photo" />
              </div>
            </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="login"
              className="hero-login-wrap"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="auth-blob auth-blob-1" />
              <div className="auth-blob auth-blob-2" />

              <div className="hero-login-card">
                <button type="button" className="hero-back-link" onClick={() => setShowLogin(false)}>
                  <ArrowLeft size={15} />
                  Retour
                </button>

                <div className="auth-logo">
                  <Logo size="large" />
                </div>
                <h2 className="auth-title">Connexion</h2>
                <div className="auth-title-underline" />
                <p className="auth-subtitle">Connectez-vous pour accéder à votre espace professionnel.</p>

                {error ? <div className="auth-error">{error}</div> : null}

                <form onSubmit={handleSubmit}>
                  <div className="auth-field">
                    <label className="auth-label" htmlFor="email">
                      Adresse email
                    </label>
                    <div className="auth-input-wrapper">
                      <Mail size={18} />
                      <input
                        id="email"
                        type="email"
                        className="auth-input"
                        placeholder="votre@email.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="auth-field">
                    <label className="auth-label" htmlFor="password">
                      Mot de passe
                    </label>
                    <div className="auth-input-wrapper">
                      <Lock size={18} />
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        className="auth-input auth-input-with-toggle"
                        placeholder="Entrez votre mot de passe"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="auth-input-toggle"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="auth-options">
                    <label className="auth-remember">
                      <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                      Se souvenir de moi
                    </label>
                    <button
                      type="button"
                      className="auth-forgot"
                      onClick={() => {
                        setResetEmail(email);
                        setResetMessage(null);
                        setResetVisible(true);
                      }}
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    fullWidth
                    loading={loading}
                    disabled={!email || !password}
                    aria-label="Se connecter"
                  >
                    <ArrowRight size={18} />
                  </Button>
                </form>

                <div className="auth-divider">ou continuer avec</div>

                <button className="auth-google-btn" onClick={handleGoogle} disabled={googleLoading}>
                  {googleLoading ? <span className="btn-spinner" /> : <span>Continuer avec Google</span>}
                </button>

                <p className="hero-login-footer">
                  Pas encore de compte ?{' '}
                  <Link to="/register" className="hero-login-link">
                    <UserPlus size={14} />
                    Créer un compte
                  </Link>
                </p>

                <div className="login-security-badge">
                  <ShieldCheck size={18} color="var(--color-primary-light)" />
                  <div>
                    <div className="login-security-title">Connexion sécurisée</div>
                    <div className="login-security-subtitle">Vos données sont protégées et confidentielles</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="landing-why" id="fonctionnalites">
        <div className="why-copy">
          <span className="about-eyebrow">Fonctionnalités</span>
          <h2 className="why-title">Pourquoi choisir MarketingPro ?</h2>
          <p className="why-lead">
            Une plateforme pensée pour les enseignants de marketing, simple, efficace et accessible partout.
          </p>
          <ul className="why-checklist">
            {whyChecklist.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {item}
              </li>
            ))}
          </ul>
          <p className="why-quote">Ensemble pour une éducation plus innovante !</p>
        </div>

        <div className="why-cards">
          {features.map((f) => (
            <div key={f.label} className="why-card">
              {f.image ? (
                <div className="why-card-image-wrap">
                  <img src={f.image} alt="" className="why-card-image" loading="lazy" />
                </div>
              ) : null}
              <span className="why-card-icon">
                <f.icon size={20} />
              </span>
              <h3>{f.label}</h3>
              <p>{f.description}</p>
              <a href="#hero-panel" className="why-card-link">
                En savoir plus <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-cta-band">
        <div className="cta-band-copy">
          <span className="cta-band-eyebrow">Prêt à transformer votre enseignement ?</span>
          <h2>Rejoignez MarketingPro dès aujourd'hui !</h2>
          <p>Des outils puissants pour un enseignement plus efficace et un meilleur suivi de vos étudiants.</p>
          <button className="cta-band-btn" onClick={openLogin}>
            Rejoindre maintenant
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="cta-band-stats">
          {ctaStats.map((s) => (
            <div key={s.label} className="cta-band-stat">
              <s.icon size={20} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <p className="cta-band-tag">Le savoir est une force</p>
      </section>

      <section className="landing-about" id="apropos">
        <span className="about-eyebrow">À propos</span>

        <div className="about-block">
          <h2>Présentation de Marketing Pro</h2>
          <p>
            <strong>Marketing Pro</strong> est une plateforme professionnelle dédiée à la{' '}
            <strong>gestion pédagogique et au suivi des performances scolaires</strong>, conçue principalement
            pour répondre aux besoins des enseignants.
          </p>
          <p>
            Elle permet aux professeurs de gérer de manière centralisée et efficace les{' '}
            <strong>élèves, les classes, les matières, les évaluations, les notes ainsi que les résultats
            scolaires</strong>, tout en automatisant les différents calculs académiques.
          </p>
          <p>
            Grâce à cet outil, l'enseignant bénéficie d'un environnement de travail structuré, fiable et
            intuitif, lui permettant d'optimiser la gestion de ses activités pédagogiques et d'assurer un
            meilleur suivi des apprenants.
          </p>
        </div>

        <div className="about-block">
          <h2>Objectif de Marketing Pro</h2>
          <p>
            L'objectif principal de <strong>Marketing Pro</strong> est de{' '}
            <strong>simplifier et d'optimiser le travail administratif et pédagogique de l'enseignant</strong>,
            tout en réduisant considérablement les risques d'erreurs liés aux calculs manuels.
          </p>
          <p>
            La plateforme permet ainsi de consacrer davantage de temps à l'enseignement, à l'accompagnement et
            au suivi individuel des élèves.
          </p>
        </div>

        <div className="about-block">
          <h2>De la gestion manuelle à l'automatisation</h2>

          <div className="about-flow-row">
            <span className="about-flow-tag about-flow-tag-manual">Méthode traditionnelle</span>
            <div className="about-flow-steps">
              {['Saisie des notes', 'Calculs manuels', 'Calcul des moyennes', 'Classement', 'Élaboration du bulletin'].map(
                (step, i, arr) => (
                  <span key={step} className="about-flow-step-group">
                    <span className="about-flow-step about-flow-step-manual">{step}</span>
                    {i < arr.length - 1 ? <ArrowRight size={14} className="about-flow-arrow" /> : null}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="about-flow-row">
            <span className="about-flow-tag about-flow-tag-auto">Avec Marketing Pro</span>
            <div className="about-flow-steps">
              {['Saisie des notes', 'Calculs automatisés', 'Génération des résultats', 'Analyse statistique', 'Élaboration du bulletin'].map(
                (step, i, arr) => (
                  <span key={step} className="about-flow-step-group">
                    <span className="about-flow-step about-flow-step-auto">{step}</span>
                    {i < arr.length - 1 ? <ArrowRight size={14} className="about-flow-arrow" /> : null}
                  </span>
                )
              )}
            </div>
          </div>

          <p className="about-flow-conclusion">
            Ainsi, <strong>Marketing Pro transforme une gestion pédagogique traditionnellement fastidieuse en
            un processus numérique, automatisé, structuré et performant.</strong>
          </p>
        </div>
      </section>

      <footer className="landing-footer" id="contact">
        <div className="landing-footer-brand">
          <Logo size="small" />
        </div>
        <nav className="landing-footer-links">
          <a href="#top">Accueil</a>
          <a href="mailto:contact@marketingpro.app">Contact</a>
          <a href="#apropos">À propos</a>
        </nav>
        <p className="landing-footer-tag">Ensemble pour un marketing d'excellence !</p>
      </footer>

      {resetVisible ? (
        <div className="auth-modal-backdrop" onClick={() => setResetVisible(false)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <div className="auth-modal-title">Mot de passe oublié</div>
            {resetMessage ? (
              <div className={resetSuccess ? 'auth-success' : 'auth-error'}>{resetMessage}</div>
            ) : null}
            <form onSubmit={handleReset}>
              <div className="auth-field">
                <label className="auth-label" htmlFor="reset-email">
                  Adresse email
                </label>
                <div className="auth-input-wrapper">
                  <Mail size={18} />
                  <input
                    id="reset-email"
                    type="email"
                    className="auth-input"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="auth-modal-actions">
                <Button type="button" variant="outline" fullWidth onClick={() => setResetVisible(false)}>
                  Annuler
                </Button>
                <Button type="submit" fullWidth loading={resetSending} disabled={!resetEmail.trim()}>
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
