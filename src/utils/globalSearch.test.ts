import { describe, expect, it } from 'vitest';
import { searchEntities } from './globalSearch';

const sources = {
  students: [{ id: 's1', prenom: 'Awa', nom: 'Koné' }],
  classes: [{ id: 'c1', nom: 'GEC - 1ère Année' }],
  subjects: [{ id: 'm1', nom: 'Marketing' }],
  courses: [{ id: 'k1', titre: 'Les Incoterms 2020' }],
};

describe('searchEntities', () => {
  it('returns nothing for an empty term', () => {
    expect(searchEntities('   ', sources)).toEqual([]);
  });

  it('finds each kind of entity and points to its page', () => {
    expect(searchEntities('awa', sources)).toEqual([{ id: 'student-s1', label: 'Awa Koné', kind: 'Etudiant', to: '/students' }]);
    expect(searchEntities('gec', sources)[0].to).toBe('/classes');
    expect(searchEntities('marketing', sources)[0].to).toBe('/subjects');
    expect(searchEntities('INCOTERMS', sources)[0].to).toBe('/courses');
  });

  it('caps the number of results', () => {
    const many = { ...sources, courses: Array.from({ length: 20 }, (_, i) => ({ id: `k${i}`, titre: `Cours ${i}` })) };
    expect(searchEntities('cours', many, 5)).toHaveLength(5);
  });
});
