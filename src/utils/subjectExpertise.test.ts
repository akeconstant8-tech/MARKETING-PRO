import { describe, expect, it } from 'vitest';
import { getSubjectExpertise } from './subjectExpertise';

describe('getSubjectExpertise', () => {
  it('recognises Technique du Commerce International (TCI)', () => {
    expect(getSubjectExpertise('Technique du Commerce International (TCI)').domain).toBe('Commerce international');
  });

  it('recognises the FCME market-study subject', () => {
    expect(getSubjectExpertise('Fondements, Concepts, Marketing et Étude du Marché (FCME)').domain).toBe(
      'Étude de marché'
    );
  });

  it('recognises negotiation/sales subjects (TVN)', () => {
    expect(getSubjectExpertise('Technique de Vente et de Négociation (TVN)').domain).toBe('Vente & négociation');
  });

  it('recognises Marketing International (MI) before the generic marketing rule', () => {
    expect(getSubjectExpertise('Marketing International (MI)').domain).toBe('Marketing international');
  });

  it('falls back to the generic marketing rule for plain "Marketing"', () => {
    expect(getSubjectExpertise('Marketing').domain).toBe('Stratégie marketing');
  });

  it('falls back to the default domain for an unrecognised subject name', () => {
    expect(getSubjectExpertise('Comptabilité générale').domain).toBe('Marketing & commerce');
  });

  it('matches case-insensitively', () => {
    expect(getSubjectExpertise('marketing').domain).toBe('Stratégie marketing');
  });
});
