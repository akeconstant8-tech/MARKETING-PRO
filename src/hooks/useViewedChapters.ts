import { useCallback, useState } from 'react';

const STORAGE_KEY = 'marketing-pro-viewed-chapters';

function readStored(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

/** Tracks which teaching chapters this browser has actually opened, so a
 * "consulte" badge reflects real activity instead of a fabricated
 * completion percentage. */
export function useViewedChapters() {
  const [viewed, setViewed] = useState<Set<string>>(readStored);

  const markViewed = useCallback((chapterId: string) => {
    setViewed((prev) => {
      if (prev.has(chapterId)) return prev;
      const next = new Set(prev);
      next.add(chapterId);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // Storage unavailable (private mode, quota) — viewed state just won't persist.
      }
      return next;
    });
  }, []);

  return { viewed, markViewed };
}
