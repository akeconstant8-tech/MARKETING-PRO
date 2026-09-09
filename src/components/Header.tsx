import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import { useAuth } from '../context/AuthContext';
import './Header.css';

interface Props {
  title: string;
  sidebarOpen: boolean;
  onToggleMenu: () => void;
}

export default function Header({ title, sidebarOpen, onToggleMenu }: Props) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initial = (user?.displayName?.trim().charAt(0) || user?.email?.charAt(0) || '?').toUpperCase();

  return (
    <header className={scrolled ? 'header header-scrolled' : 'header'}>
      <button
        className="header-menu-btn"
        onClick={onToggleMenu}
        aria-label={sidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <HamburgerIcon open={sidebarOpen} />
      </button>
      <h1 className="header-title">{title}</h1>
      <div className="header-logo">
        <Logo size="small" />
      </div>
      <span className="header-bell" aria-hidden="true">
        <Bell size={18} />
      </span>
      <button className="header-profile" onClick={() => navigate('/settings')} aria-label="Mon profil">
        <span className="header-profile-avatar">{initial}</span>
        <span className="header-profile-info">
          <span className="header-profile-name">{user?.displayName || 'Professeur'}</span>
          <span className="header-profile-status">
            <span className="header-profile-dot" />
            En ligne
          </span>
        </span>
        <ChevronDown size={14} className="header-profile-chevron" />
      </button>
    </header>
  );
}
