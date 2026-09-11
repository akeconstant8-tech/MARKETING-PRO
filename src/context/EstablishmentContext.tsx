import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { addTeacherDoc, deleteTeacherDoc, subscribeToTeacherCollection, updateTeacherDoc } from '../services/dataService';
import type { Etablissement } from '../types';

const STORAGE_KEY = 'marketing-pro-active-etablissement';

interface EstablishmentContextValue {
  etablissements: Etablissement[];
  activeId: string | null;
  loading: boolean;
  setActiveId: (id: string) => void;
  createEtablissement: (nom: string) => Promise<string>;
  renameEtablissement: (id: string, nom: string) => Promise<void>;
  deleteEtablissement: (id: string) => Promise<void>;
}

const EstablishmentContext = createContext<EstablishmentContextValue>({
  etablissements: [],
  activeId: null,
  loading: true,
  setActiveId: () => {},
  createEtablissement: async () => '',
  renameEtablissement: async () => {},
  deleteEtablissement: async () => {},
});

/** Lets a teacher run several establishments from one account with fully
 * separate students/classes/subjects/evaluations. Subscribes directly to
 * Firestore (not via useTeacherCollection, which itself reads this context —
 * that would be circular). A document created before this feature existed
 * has no `etablissementId` and stays visible under every establishment;
 * see the filter in useTeacherCollection.ts. */
export function EstablishmentProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [etablissements, setEtablissements] = useState<Etablissement[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveIdState] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));

  useEffect(() => {
    if (!user) {
      setEtablissements([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const unsubscribe = subscribeToTeacherCollection<Etablissement>('etablissements', user.uid, (data) => {
      setEtablissements([...data].sort((a, b) => a.nom.localeCompare(b.nom)));
      setLoading(false);
    });
    return unsubscribe;
  }, [user?.uid]);

  const setActiveId = useCallback((id: string) => {
    setActiveIdState(id);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  // Keep the selection valid: once establishments exist, always point at a
  // real one (defaulting to the first) instead of leaving it null/stale.
  useEffect(() => {
    if (loading || etablissements.length === 0) return;
    if (!activeId || !etablissements.some((e) => e.id === activeId)) {
      setActiveId(etablissements[0].id);
    }
  }, [etablissements, loading, activeId, setActiveId]);

  const createEtablissement = useCallback(
    async (nom: string) => {
      if (!user) throw new Error('Non connecte.');
      const id = await addTeacherDoc('etablissements', {
        teacherId: user.uid,
        nom,
        createdAt: new Date().toISOString(),
      });
      setActiveId(id);
      return id;
    },
    [user, setActiveId]
  );

  const renameEtablissement = useCallback(async (id: string, nom: string) => {
    await updateTeacherDoc('etablissements', id, { nom });
  }, []);

  const deleteEtablissement = useCallback(async (id: string) => {
    await deleteTeacherDoc('etablissements', id);
  }, []);

  return (
    <EstablishmentContext.Provider
      value={{ etablissements, activeId, loading, setActiveId, createEtablissement, renameEtablissement, deleteEtablissement }}
    >
      {children}
    </EstablishmentContext.Provider>
  );
}

export function useEstablishment() {
  return useContext(EstablishmentContext);
}
