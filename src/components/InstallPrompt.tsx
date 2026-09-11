import { useEffect, useState } from 'react';
import { Download, Lock, ShieldCheck, WifiOff, X, Zap } from 'lucide-react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import './InstallPrompt.css';

const DISMISS_KEY = 'marketing-pro-install-dismissed-at';
const DISMISS_DAYS = 7;
const SHOW_DELAY_MS = 1400;

function wasRecentlyDismissed(): boolean {
  const raw = localStorage.getItem(DISMISS_KEY);
  if (!raw) return false;
  const dismissedAt = Number(raw);
  if (Number.isNaN(dismissedAt)) return false;
  return Date.now() - dismissedAt < DISMISS_DAYS * 24 * 60 * 60 * 1000;
}

const FEATURES = [
  { icon: Zap, title: 'Acces rapide', subtitle: 'En un clic' },
  { icon: WifiOff, title: 'Hors ligne', subtitle: 'Sans connexion' },
  { icon: ShieldCheck, title: 'Securise', subtitle: 'Donnees privees' },
];

/** Custom "Add to Home Screen" card, shown in place of the browser's bare
 * mini-infobar once Chromium signals the app is installable. Purely additive
 * — reuses the existing `useInstallPrompt` hook (already wired into
 * Settings.tsx) so the manual install button there keeps working exactly as
 * before regardless of whether this card is shown, dismissed, or unsupported
 * on the current browser. */
export default function InstallPrompt() {
  const { installable, installed, promptInstall } = useInstallPrompt();
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    if (!installable || installed || wasRecentlyDismissed()) return;
    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [installable, installed]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setVisible(false);
  }

  async function handleInstall() {
    setInstalling(true);
    await promptInstall();
    setInstalling(false);
    dismiss();
  }

  if (!visible) return null;

  return (
    <div className="install-prompt-backdrop" role="dialog" aria-modal="true" aria-label="Installer Marketing Pro">
      <div className="install-prompt-card">
        <button className="install-prompt-close" onClick={dismiss} aria-label="Fermer">
          <X size={18} />
        </button>

        <div className="install-prompt-head">
          <img src="/icon-192.png" alt="" className="install-prompt-logo" />
          <div>
            <span className="install-prompt-eyebrow">Installer</span>
            <h2 className="install-prompt-title">Marketing Pro</h2>
          </div>
        </div>

        <p className="install-prompt-subtitle">
          Accedez rapidement a vos classes, notes et bulletins, meme depuis votre ecran d'accueil.
        </p>

        <div className="install-prompt-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="install-prompt-feature">
              <span className="install-prompt-feature-icon">
                <f.icon size={18} />
              </span>
              <strong>{f.title}</strong>
              <span>{f.subtitle}</span>
            </div>
          ))}
        </div>

        <button className="install-prompt-cta" onClick={handleInstall} disabled={installing}>
          <Download size={17} />
          {installing ? 'Installation...' : "Installer l'application"}
        </button>

        <button className="install-prompt-later" onClick={dismiss}>
          Plus tard
        </button>

        <p className="install-prompt-footnote">
          <Lock size={12} />
          Legere, rapide et securisee
        </p>
      </div>
    </div>
  );
}
