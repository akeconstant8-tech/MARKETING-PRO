import { describe, expect, it } from 'vitest';
import { MATIERES } from '../data/preconfiguredGroups';
import { getSubjectImage } from './subjectImage';

describe('getSubjectImage', () => {
  it('gives each of the five real subjects its own distinct image', () => {
    const images = Object.values(MATIERES).map((nom) => getSubjectImage(nom));
    expect(new Set(images).size).toBe(5);
    images.forEach((src) => expect(src).toBeTruthy());
  });

  it('generates an illustration for an unknown subject instead of leaving it empty', () => {
    expect(getSubjectImage('Comptabilité analytique')).toContain('data:image/svg+xml');
  });
});
