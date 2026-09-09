import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from './firebase';

// Sorting is done client-side (see useTeacherCollection) rather than via
// Firestore orderBy, so a single equality filter on teacherId never needs a
// composite index.
export function subscribeToTeacherCollection<T>(
  collectionName: string,
  teacherId: string,
  callback: (items: T[]) => void
) {
  const q = query(collection(db, collectionName), where('teacherId', '==', teacherId));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as T));
  });
}

// Two equality (==) filters don't require a composite index in Firestore.
export function subscribeToTeacherCollectionWhere<T>(
  collectionName: string,
  teacherId: string,
  extraField: string,
  extraValue: string,
  callback: (items: T[]) => void
) {
  const q = query(
    collection(db, collectionName),
    where('teacherId', '==', teacherId),
    where(extraField, '==', extraValue)
  );
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() }) as T));
  });
}

export async function addTeacherDoc(collectionName: string, data: Record<string, unknown>): Promise<string> {
  const ref = await addDoc(collection(db, collectionName), data);
  return ref.id;
}

export async function updateTeacherDoc(
  collectionName: string,
  id: string,
  updates: Record<string, unknown>
): Promise<void> {
  await updateDoc(doc(db, collectionName, id), updates);
}

export async function deleteTeacherDoc(collectionName: string, id: string): Promise<void> {
  await deleteDoc(doc(db, collectionName, id));
}

export async function setTeacherDoc(collectionName: string, id: string, data: Record<string, unknown>): Promise<void> {
  await setDoc(doc(db, collectionName, id), data, { merge: true });
}
