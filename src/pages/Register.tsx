import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { signInWithGoogle, signUpWithEmail } from '../services/authService';
import { useToast } from '../context/ToastContext';
import './Auth.css';

export default function Register() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = prenom && nom && email && password.length >= 6 && password === confirmPassword;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setLoading(true);
    try {
      await signUpWithEmail(prenom.trim(), nom.trim(), email.trim(), password);
      showToast('success', 'Compte créé avec succès. Bienvenue !');
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Inscription impossible.');
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      showToast('success', 'Compte créé avec succès. Bienvenue !');
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connexion Google impossible.');
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-blob auth-blob-1" />
      <div className="auth-blob auth-blob-2" />

      <div className="auth-content">
        <div className="auth-logo">
          <Logo size="large" />
        </div>
        <h1 className="auth-title">Créer un compte</h1>
        <div className="auth-title-underline" />
        <p className="auth-subtitle">Espace professeur Marketing Pro</p>

        <div className="auth-card fade-in-up">
          {error ? <div className="auth-error">{error}</div> : null}

          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <label className="auth-label" htmlFor="prenom">
                Prénom
              </label>
              <div className="auth-input-wrapper">
                <User size={18} />
                <input id="prenom" className="auth-input" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="nom">
                Nom
              </label>
              <div className="auth-input-wrapper">
                <User size={18} />
                <input id="nom" className="auth-input" value={nom} onChange={(e) => setNom(e.target.value)} required />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="email">
                Email
              </label>
              <div className="auth-input-wrapper">
                <Mail size={18} />
                <input
                  id="email"
                  type="email"
                  className="auth-input"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="password">
                Mot de passe (6 caractères min.)
              </label>
              <div className="auth-input-wrapper">
                <Lock size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input auth-input-with-toggle"
                  autoComplete="new-password"
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

            <div className="auth-field">
              <label className="auth-label" htmlFor="confirm-password">
                Confirmer le mot de passe
              </label>
              <div className="auth-input-wrapper">
                <Lock size={18} />
                <input
                  id="confirm-password"
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" variant="gradient" fullWidth loading={loading} disabled={!canSubmit}>
              Créer mon compte
            </Button>
          </form>

          <div className="auth-divider">OU</div>

          <button className="auth-google-btn" onClick={handleGoogle} disabled={googleLoading}>
            {googleLoading ? <span className="btn-spinner" /> : <span>Continuer avec Google</span>}
          </button>

          <p className="auth-footer">
            Déjà un compte ? <Link to="/login">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
