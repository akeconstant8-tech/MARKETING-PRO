import { useEffect, useState } from 'react';
import { subscribeToTeacherCollection } from '../services/dataService';
import { useAuth } from '../context/AuthContext';
import { useEstablishment } from '../context/EstablishmentContext';

/** A document with no `etablissementId` predates multi-establishment support
 * and stays visible no matter which establishment is active — only a
 * document explicitly stamped with a *different* establishment is hidden. */
function belongsToActiveEstablishment(item: { etablissementId?: string }, activeId: string | null): boolean {
  return item.etablissementId == null || item.etablissementId === activeId;
}

export function useTeacherCollection<T extends { id: string; etablissementId?: string }>(
  collectionName: string,
  sortField: keyof T
) {
  const { user } = useAuth();
  const { activeId } = useEstablishment();
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setItems([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeToTeacherCollection<T>(collectionName, user.uid, (data) => {
      const sorted = data
        .filter((item) => belongsToActiveEstablishment(item, activeId))
        .sort((a, b) => String(a[sortField] ?? '').localeCompare(String(b[sortField] ?? '')));
      setItems(sorted);
      setLoading(false);
    });

    return unsubscribe;
  }, [collectionName, user?.uid, sortField, activeId]);

  return { items, loading };
}
