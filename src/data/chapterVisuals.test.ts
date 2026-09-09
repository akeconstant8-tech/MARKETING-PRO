import { describe, expect, it } from 'vitest';
import { getChapterVisual } from './chapterVisuals';

describe('getChapterVisual', () => {
  it('provides a real photo for every one of the 12 chapters', () => {
    for (let n = 1; n <= 12; n++) {
      expect(getChapterVisual(n).image).toBeTruthy();
    }
  });

  it('returns a distinct icon/tone pair for every known chapter', () => {
    const seen = new Set<string>();
    for (let n = 1; n <= 12; n++) {
      const visual = getChapterVisual(n);
      expect(visual.icon).toBeTruthy();
      expect(visual.tone).toBeTruthy();
      seen.add(visual.tone);
    }
    expect(seen.size).toBeGreaterThan(1);
  });

  it('falls back to a default visual for an out-of-range chapter number', () => {
    const visual = getChapterVisual(99);
    expect(visual.tone).toBe('blue');
    expect(visual.image).toBeUndefined();
  });
});
