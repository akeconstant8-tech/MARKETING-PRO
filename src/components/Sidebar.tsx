import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Building2,
  BookOpen,
  NotebookText,
  ClipboardList,
  PenSquare,
  BarChart3,
  FolderOpen,
  CalendarDays,
  Contact as ContactIcon,
  Settings,
  LogOut,
  GraduationCap,
  ChevronRight,
  X,
} from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';
import { signOutUser } from '../services/authService';
import './Sidebar.css';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/students', label: 'Etudiants', icon: Users },
  { to: '/classes', label: 'Classes', icon: Building2 },
  { to: '/subjects', label: 'Matieres', icon: BookOpen },
  { to: '/courses', label: 'Cours', icon: NotebookText },
  { to: '/evaluations', label: 'Evaluations', icon: ClipboardList },
  { to: '/grades', label: 'Notes', icon: PenSquare },
  { to: '/performance', label: 'Statistiques', icon: BarChart3 },
  { to: '/resources', label: 'Ressources', icon: FolderOpen },
  { to: '/calendar', label: 'Calendrier', icon: CalendarDays },
  { to: '/contacts', label: 'Contacts', icon: ContactIcon },
  { to: '/settings', label: 'Parametres', icon: Settings },
];

interface Props {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, collapsed, onClose }: Props) {
  const { user } = useAuth();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ top: number; height: number } | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const activeItem = navItems.find((item) => (item.end ? location.pathname === item.to : location.pathname === item.to));
      const el = activeItem ? linkRefs.current[activeItem.to] : null;
      const nav = navRef.current;
      if (!el || !nav) {
        setIndicator(null);
        return;
      }
      setIndicator({ top: el.offsetTop, height: el.offsetHeight });
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [location.pathname, open]);

  return (
    <>
      {open ? <div className="sidebar-overlay fade-in" onClick={onClose} /> : null}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''} ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="sidebar-header">
          <Logo size="small" />
          <button className="sidebar-close" onClick={onClose} aria-label="Fermer le menu">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav" ref={navRef}>
          {indicator ? (
            <div
              className="sidebar-active-indicator"
              style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
            />
          ) : null}
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              ref={(el) => {
                linkRefs.current[item.to] = el;
              }}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
            >
              <item.icon size={18} className="sidebar-link-icon" />
              <span>{item.label}</span>
              <ChevronRight size={14} className="sidebar-link-chevron" />
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-motivation">
          <GraduationCap size={18} />
          <p>« L'education est la cle d'un meilleur avenir. »</p>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">{(user?.displayName ?? user?.email ?? '?').charAt(0).toUpperCase()}</div>
            <div className="sidebar-profile-info">
              <span className="sidebar-profile-name">{user?.displayName || 'Professeur'}</span>
              <span className="sidebar-profile-email">{user?.email}</span>
            </div>
          </div>
          <button className="sidebar-logout" onClick={() => signOutUser()}>
            <LogOut size={16} />
            <span>Deconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
