import { useEffect, useState } from 'react';
import { subscribeToTeacherCollection } from '../services/dataService';
import { useAuth } from '../context/AuthContext';

export function useTeacherCollection<T extends { id: string }>(collectionName: string, sortField: keyof T) {
  const { user } = useAuth();
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
      const sorted = [...data].sort((a, b) =>
        String(a[sortField] ?? '').localeCompare(String(b[sortField] ?? ''))
      );
      setItems(sorted);
      setLoading(false);
    });

    return unsubscribe;
  }, [collectionName, user?.uid, sortField]);

  return { items, loading };
}
