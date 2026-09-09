import { describe, expect, it } from 'vitest';
import { computeAverage, computeSimpleAverage, normalizeNote } from './calculations';

describe('computeAverage', () => {
  it('returns null for an empty list', () => {
    expect(computeAverage([])).toBeNull();
  });

  it('returns null when the total coefficient is zero', () => {
    expect(computeAverage([{ note: 15, coefficient: 0 }])).toBeNull();
  });

  it('computes the coefficient-weighted mean', () => {
    // (12*2 + 16*1) / (2+1) = 40/3
    expect(computeAverage([
      { note: 12, coefficient: 2 },
      { note: 16, coefficient: 1 },
    ])).toBeCloseTo(40 / 3, 5);
  });

  it('reduces to a plain average when all coefficients are equal', () => {
    expect(computeAverage([
      { note: 10, coefficient: 1 },
      { note: 20, coefficient: 1 },
    ])).toBe(15);
  });
});

describe('computeSimpleAverage', () => {
  it('returns null for an empty list', () => {
    expect(computeSimpleAverage([])).toBeNull();
  });

  it('computes the unweighted mean', () => {
    expect(computeSimpleAverage([10, 12, 14])).toBe(12);
  });
});

describe('normalizeNote', () => {
  it('returns 0 when the max scale is 0 (avoids a division by zero)', () => {
    expect(normalizeNote(8, 0)).toBe(0);
  });

  it('rescales a note to the standard /20 scale', () => {
    expect(normalizeNote(8, 10)).toBe(16); // 8/10 -> 16/20
  });

  it('leaves an already-/20 note unchanged', () => {
    expect(normalizeNote(14, 20)).toBe(14);
  });
});
