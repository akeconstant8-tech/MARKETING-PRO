import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from 'firebase/auth';
import { auth } from './firebase';
import { createTeacherProfile, teacherProfileExists } from './teacherService';

export function subscribeToAuthState(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export async function signUpWithEmail(
  prenom: string,
  nom: string,
  email: string,
  password: string
): Promise<User> {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: `${prenom} ${nom}`.trim() });
  await createTeacherProfile({
    id: user.uid,
    nom,
    prenom,
    email,
    authProvider: 'email',
  });
  return user;
}

export async function signInWithEmail(email: string, password: string, remember: boolean): Promise<User> {
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle(): Promise<User> {
  const { user } = await signInWithPopup(auth, googleProvider);

  if (!(await teacherProfileExists(user.uid))) {
    const [prenom, ...rest] = (user.displayName ?? '').trim().split(' ');
    await createTeacherProfile({
      id: user.uid,
      nom: rest.join(' '),
      prenom: prenom ?? '',
      email: user.email ?? '',
      photo: user.photoURL ?? undefined,
      authProvider: 'google',
    });
  }

  return user;
}

export async function signOutUser(): Promise<void> {
  await signOut(auth);
}

export async function resetPassword(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}
