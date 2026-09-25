import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useTeacherCollection } from '../hooks/useTeacherCollection';
import { searchEntities } from '../utils/globalSearch';
import type { Class, Course, Student, Subject } from '../types';
import './HeaderSearch.css';

/** Ne s'abonne aux données (étudiants, classes, matières, cours) qu'après le
 * premier focus du champ, pour ne pas ajouter de lectures à chaque page. */
function Results({ term, onPick }: { term: string; onPick: (to: string) => void }) {
  const { items: students } = useTeacherCollection<Student>('students', 'nom');
  const { items: classes } = useTeacherCollection<Class>('classes', 'nom');
  const { items: subjects } = useTeacherCollection<Subject>('subjects', 'nom');
  const { items: courses } = useTeacherCollection<Course>('courses', 'titre');
  const results = useMemo(
    () => searchEntities(term, { students, classes, subjects, courses }),
    [term, students, classes, subjects, courses]
  );

  if (!term.trim()) return null;
  return (
    <div className="header-search-results" role="listbox">
      {results.length === 0 ? (
        <p className="header-search-empty">Aucun résultat pour « {term.trim()} ».</p>
      ) : (
        results.map((r) => (
          <button key={r.id} type="button" role="option" aria-selected="false" className="header-search-row" onClick={() => onPick(r.to)}>
            <span>{r.label}</span>
            <span className="header-search-kind">{r.kind}</span>
          </button>
        ))
      )}
    </div>
  );
}

export default function HeaderSearch() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState('');
  const [activated, setActivated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  function pick(to: string) {
    setTerm('');
    setOpen(false);
    inputRef.current?.blur();
    navigate(to);
  }

  return (
    <div className="header-search" ref={wrapRef}>
      <Search size={17} className="header-search-icon" />
      <input
        ref={inputRef}
        type="text"
        value={term}
        placeholder="Rechercher un cours, une classe, une matière..."
        aria-label="Recherche globale"
        onFocus={() => {
          setActivated(true);
          setOpen(true);
        }}
        onChange={(e) => {
          setTerm(e.target.value);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setTerm('');
            setOpen(false);
            inputRef.current?.blur();
          }
        }}
      />
      <kbd className="header-search-kbd">Ctrl + K</kbd>
      {activated && open ? <Results term={term} onPick={pick} /> : null}
    </div>
  );
}
