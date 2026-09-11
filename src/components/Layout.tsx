import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PageTransition from './PageTransition';
import './Layout.css';

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/students': 'Etudiants',
  '/classes': 'Classes',
  '/subjects': 'Matieres',
  '/courses': 'Cours',
  '/evaluations': 'Evaluations',
  '/grades': 'Notes',
  '/print': 'Imprimer',
  '/performance': 'Performances',
  '/calendar': 'Calendrier',
  '/resources': 'Ressources',
  '/contacts': 'Contacts',
  '/settings': 'Parametres',
};

const COLLAPSE_KEY = 'marketing-pro-sidebar-collapsed';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem(COLLAPSE_KEY) === '1');
  const location = useLocation();
  const title = titles[location.pathname] ?? 'Marketing Pro';

  function toggleSidebar() {
    // One button serves both layouts: on mobile only the drawer (sidebarOpen)
    // is visually relevant, on desktop only the rail width (sidebarCollapsed)
    // is — so flipping both at once is harmless and avoids viewport sniffing.
    setSidebarOpen((v) => !v);
    setSidebarCollapsed((v) => {
      const next = !v;
      localStorage.setItem(COLLAPSE_KEY, next ? '1' : '0');
      return next;
    });
  }

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} collapsed={sidebarCollapsed} onClose={() => setSidebarOpen(false)} />
      <div className={`layout-main ${sidebarCollapsed ? 'layout-main-collapsed' : ''}`}>
        <Header title={title} sidebarOpen={sidebarOpen} onToggleMenu={toggleSidebar} />
        <main className="layout-content">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <footer className="layout-footer">
          <span>&copy; {new Date().getFullYear()} Marketing Pro. Tous droits reserves.</span>
        </footer>
      </div>
    </div>
  );
}
