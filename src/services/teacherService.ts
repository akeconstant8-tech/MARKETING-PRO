import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import type { Teacher } from '../types';

const teacherDoc = (id: string) => doc(db, 'teachers', id);

export async function teacherProfileExists(id: string): Promise<boolean> {
  const snapshot = await getDoc(teacherDoc(id));
  return snapshot.exists();
}

export async function createTeacherProfile(teacher: Teacher): Promise<void> {
  await setDoc(teacherDoc(teacher.id), teacher);
}

export async function getTeacherProfile(id: string): Promise<Teacher | null> {
  const snapshot = await getDoc(teacherDoc(id));
  return snapshot.exists() ? (snapshot.data() as Teacher) : null;
}

export async function updateTeacherProfile(id: string, updates: Partial<Teacher>): Promise<void> {
  await updateDoc(teacherDoc(id), updates);
}
