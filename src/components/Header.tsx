import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Building2, Check, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import { useAuth } from '../context/AuthContext';
import { useEstablishment } from '../context/EstablishmentContext';
import './Header.css';

interface Props {
  title: string;
  sidebarOpen: boolean;
  onToggleMenu: () => void;
}

export default function Header({ title, sidebarOpen, onToggleMenu }: Props) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { etablissements, activeId, setActiveId } = useEstablishment();
  const [scrolled, setScrolled] = useState(false);
  const [etabMenuOpen, setEtabMenuOpen] = useState(false);
  const etabMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!etabMenuOpen) return;
    function onClickOutside(e: MouseEvent) {
      if (etabMenuRef.current && !etabMenuRef.current.contains(e.target as Node)) {
        setEtabMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [etabMenuOpen]);

  const activeEtablissement = etablissements.find((e) => e.id === activeId);
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
      {etablissements.length > 0 ? (
        <div className="header-etab" ref={etabMenuRef}>
          <button
            className="header-etab-btn"
            onClick={() => setEtabMenuOpen((v) => !v)}
            aria-label="Changer d'etablissement"
          >
            <Building2 size={14} />
            <span className="header-etab-name">{activeEtablissement?.nom ?? 'Etablissement'}</span>
            <ChevronDown size={13} />
          </button>
          {etabMenuOpen ? (
            <div className="header-etab-menu">
              {etablissements.map((e) => (
                <button
                  key={e.id}
                  className="header-etab-option"
                  onClick={() => {
                    setActiveId(e.id);
                    setEtabMenuOpen(false);
                  }}
                >
                  <span>{e.nom}</span>
                  {e.id === activeId ? <Check size={14} /> : null}
                </button>
              ))}
              <button
                className="header-etab-manage"
                onClick={() => {
                  setEtabMenuOpen(false);
                  navigate('/settings');
                }}
              >
                Gerer les etablissements
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
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
