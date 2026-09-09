import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Subjects from './Subjects';
import type { Class, Filiere, Subject } from '../types';

const filieres: Filiere[] = [
  { id: 'fil-gec', teacherId: 't1', nom: 'Gestion Commerciale (GEC)' },
  { id: 'fil-licence', teacherId: 't1', nom: 'Licence' },
];

const classes: Class[] = [
  { id: 'cl-gec1', teacherId: 't1', nom: 'GEC - 1ère Année', niveau: '1ère Année', filiereId: 'fil-gec', anneeAcademique: '2026-2027' },
  { id: 'cl-gec2', teacherId: 't1', nom: 'GEC - 2ème Année', niveau: '2ème Année', filiereId: 'fil-gec', anneeAcademique: '2026-2027' },
  { id: 'cl-lic1', teacherId: 't1', nom: 'Licence - 1ère Année', niveau: '1ère Année', filiereId: 'fil-licence', anneeAcademique: '2026-2027' },
  { id: 'cl-lic2', teacherId: 't1', nom: 'Licence - 2ème Année', niveau: '2ème Année', filiereId: 'fil-licence', anneeAcademique: '2026-2027' },
];

const subjects: Subject[] = [
  { id: 's-tci', teacherId: 't1', nom: 'Technique du Commerce International (TCI)', coefficient: 3, classeId: 'cl-gec1' },
  { id: 's-fcme', teacherId: 't1', nom: 'Fondements, Concepts, Marketing et Étude du Marché (FCME)', coefficient: 2, classeId: 'cl-gec2' },
  { id: 's-mkt', teacherId: 't1', nom: 'Marketing', coefficient: 2, classeId: 'cl-lic1' },
];

const addTeacherDocMock = vi.fn().mockResolvedValue('new-id');
const showToastMock = vi.fn();

vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({ user: { uid: 't1' }, initializing: false }),
}));

vi.mock('../context/ToastContext', () => ({
  useToast: () => ({ showToast: showToastMock }),
}));

vi.mock('../services/dataService', () => ({
  addTeacherDoc: (...args: unknown[]) => addTeacherDocMock(...args),
}));

vi.mock('../hooks/useTeacherCollection', () => ({
  useTeacherCollection: (collectionName: string) => {
    if (collectionName === 'subjects') return { items: subjects, loading: false };
    if (collectionName === 'classes') return { items: classes, loading: false };
    if (collectionName === 'filieres') return { items: filieres, loading: false };
    return { items: [], loading: false };
  },
}));

describe('Subjects page — real data, no fabricated numbers', () => {
  beforeEach(() => {
    addTeacherDocMock.mockClear();
    showToastMock.mockClear();
  });

  it('derives the stat cards from the actual filieres/classes/subjects counts', () => {
    render(<MemoryRouter><Subjects /></MemoryRouter>);

    function statValue(label: string) {
      const grid = document.querySelector('.subjects-stats-grid') as HTMLElement;
      const card = within(grid).getByText(label).closest('.tilt-card-inner') as HTMLElement;
      return within(card).getByText((_, el) => el?.className === 'stat-value').textContent;
    }

    expect(statValue('Matieres au total')).toBe(String(subjects.length)); // 3
    expect(statValue('Filieres')).toBe(String(filieres.length)); // 2
    expect(statValue('Niveaux')).toBe(String(classes.length)); // 4
    expect(statValue('Annee academique')).toBe('2026-2027');
  });

  it('lists one table row per real classe with its taught subjects', () => {
    render(<MemoryRouter><Subjects /></MemoryRouter>);

    const table = screen.getByRole('table');
    expect(within(table).getAllByText('Gestion Commerciale (GEC)')).toHaveLength(2); // 1ère + 2ème Année
    expect(within(table).getAllByText('Licence')).toHaveLength(2);
    expect(within(table).getByText('Technique du Commerce International (TCI)')).toBeInTheDocument();
    expect(within(table).getByText('Marketing')).toBeInTheDocument();
  });

  it('filters the table rows to the selected filière', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><Subjects /></MemoryRouter>);

    const table = screen.getByRole('table');
    expect(within(table).getAllByRole('row')).toHaveLength(5); // header + 4 classe rows

    const filiereSelect = screen.getByDisplayValue('Toutes les filieres');
    await user.selectOptions(filiereSelect, 'fil-gec');

    expect(within(table).getAllByRole('row')).toHaveLength(3); // header + 2 GEC rows
    expect(within(table).getAllByText('Gestion Commerciale (GEC)')).toHaveLength(2);
    expect(within(table).queryByText('Licence')).not.toBeInTheDocument();
  });

  it('creates a real subject document when the "Ajouter une matière" form is submitted', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><Subjects /></MemoryRouter>);

    await user.click(screen.getByRole('button', { name: /ajouter une matiere/i }));

    await user.type(screen.getByLabelText('Nom de la matiere'), 'Communication digitale');
    await user.selectOptions(screen.getByLabelText('Filiere et annee'), 'cl-gec1');

    const submitButtons = screen.getAllByRole('button', { name: /ajouter$/i });
    await user.click(submitButtons[submitButtons.length - 1]);

    expect(addTeacherDocMock).toHaveBeenCalledWith(
      'subjects',
      expect.objectContaining({
        teacherId: 't1',
        nom: 'Communication digitale',
        classeId: 'cl-gec1',
      })
    );
  });
});
