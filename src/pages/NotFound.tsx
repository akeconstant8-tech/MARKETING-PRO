import { useNavigate } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-logo fade-in-up">
        <Logo size="medium" />
      </div>

      <div className="not-found-illustration fade-in-up">
        <Compass size={56} color="var(--color-accent)" strokeWidth={1.5} />
      </div>

      <h1 className="not-found-code fade-in-up">404</h1>
      <p className="not-found-title fade-in-up">Page introuvable</p>
      <p className="not-found-subtitle fade-in-up">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>

      <Button variant="gradient" onClick={() => navigate('/')} className="not-found-button fade-in-up">
        <Home size={18} />
        Retour au tableau de bord
      </Button>
    </div>
  );
}
