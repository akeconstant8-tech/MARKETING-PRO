import { describe, expect, it } from 'vitest';
import { getCourseIllustration, pickIllustration } from './courseIllustration';

describe('pickIllustration', () => {
  it.each([
    ['La consécration des Lévites', 'menorah'],
    ['La repentance', 'repentance'],
    ["Le baptême d'eau", 'baptism'],
    ['La Pentecôte', 'pentecost'],
    ["Étude de marché : méthodologie", 'magnifier'],
    ['Commerce international', 'globe'],
  ])('maps "%s" to %s', (title, motif) => {
    expect(pickIllustration(title).motif).toBe(motif);
  });

  it('falls back to a generic book motif for an unknown title, deterministically', () => {
    const a = pickIllustration('Xyzzy');
    expect(a.motif).toBe('book');
    expect(pickIllustration('Xyzzy')).toEqual(a);
  });
});

describe('getCourseIllustration', () => {
  it('returns an existing image untouched', () => {
    expect(getCourseIllustration('La repentance', 'blue', '/img/existing.jpg')).toBe('/img/existing.jpg');
  });

  it('generates an SVG data URI when the course has no image', () => {
    const uri = getCourseIllustration('La Pentecôte', 'orange');
    expect(uri.startsWith('data:image/svg+xml')).toBe(true);
    expect(decodeURIComponent(uri)).toContain('<svg');
  });
});
