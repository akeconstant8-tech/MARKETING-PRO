import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { useViewedChapters } from './useViewedChapters';

const STORAGE_KEY = 'marketing-pro-viewed-chapters';

describe('useViewedChapters', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts empty when nothing was viewed before', () => {
    const { result } = renderHook(() => useViewedChapters());
    expect(result.current.viewed.size).toBe(0);
  });

  it('loads previously viewed chapters from localStorage on mount', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['chap-1', 'chap-2']));
    const { result } = renderHook(() => useViewedChapters());
    expect(result.current.viewed.has('chap-1')).toBe(true);
    expect(result.current.viewed.has('chap-2')).toBe(true);
  });

  it('marks a chapter as viewed and persists it', () => {
    const { result } = renderHook(() => useViewedChapters());

    act(() => {
      result.current.markViewed('chap-3');
    });

    expect(result.current.viewed.has('chap-3')).toBe(true);
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')).toContain('chap-3');
  });

  it('is idempotent — marking the same chapter twice keeps a single entry', () => {
    const { result } = renderHook(() => useViewedChapters());

    act(() => {
      result.current.markViewed('chap-4');
      result.current.markViewed('chap-4');
    });

    expect(result.current.viewed.size).toBe(1);
  });
});
