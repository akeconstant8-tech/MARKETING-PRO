export type AuthProvider = 'email' | 'google';

export interface Teacher {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  photo?: string;
  etablissement?: string;
  specialite?: string;
  anneesExperience?: number;
  authProvider: AuthProvider;
}

/** A teacher can run several establishments from the same account; every
 * record below carries an optional `etablissementId` so it can be scoped to
 * one. A document with no `etablissementId` (all data created before this
 * feature existed) stays visible regardless of which establishment is
 * active — see useTeacherCollection.ts. */
export interface Etablissement {
  id: string;
  teacherId: string;
  nom: string;
  createdAt?: string;
}

export interface Student {
  id: string;
  teacherId: string;
  etablissementId?: string;
  nom: string;
  prenom: string;
  sexe?: 'M' | 'F';
  dateNaissance?: string;
  telephone?: string;
  whatsapp?: string;
  email?: string;
  matricule?: string;
  classeId: string;
  filiereId?: string;
  anneeAcademique: string;
  createdAt?: string;
}

export interface Class {
  id: string;
  teacherId: string;
  etablissementId?: string;
  nom: string;
  niveau?: string;
  filiereId?: string;
  anneeAcademique: string;
  createdAt?: string;
}

export interface Filiere {
  id: string;
  teacherId: string;
  etablissementId?: string;
  nom: string;
  createdAt?: string;
}

export interface Subject {
  id: string;
  teacherId: string;
  etablissementId?: string;
  nom: string;
  coefficient: number;
  description?: string;
  classeId?: string;
  createdAt?: string;
}

export interface CourseAttachment {
  name: string;
  url: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
  storagePath: string;
}

export interface Course {
  id: string;
  teacherId: string;
  etablissementId?: string;
  titre: string;
  subjectId: string;
  classeId: string;
  chapitre?: string;
  objectifs?: string;
  contenu?: string;
  exemples?: string;
  casPratique?: string;
  resume?: string;
  references?: string;
  attachments?: CourseAttachment[];
  createdAt?: string;
}

export type EvaluationType =
  | 'devoir'
  | 'interrogation'
  | 'examen'
  | 'controle_continu'
  | 'projet'
  | 'expose'
  | 'etude_de_cas'
  | 'evaluation_niveau'
  | 'bts_blanc';

export interface Evaluation {
  id: string;
  teacherId: string;
  etablissementId?: string;
  subjectId: string;
  classeId: string;
  type: EvaluationType;
  date: string;
  coefficient: number;
  noteMax: number;
}

export interface Grade {
  id: string;
  teacherId: string;
  etablissementId?: string;
  studentId: string;
  subjectId: string;
  evaluationId: string;
  note: number;
  noteMax: number;
  coefficient: number;
}

export interface ScheduleEntry {
  id: string;
  teacherId: string;
  subjectId: string;
  classeId: string;
  salle?: string;
  heureDebut: string;
  heureFin: string;
  jour: string;
}

export interface CalendarEvent {
  id: string;
  teacherId: string;
  titre: string;
  type: 'cours' | 'examen' | 'devoir' | 'reunion' | 'expose' | 'evenement';
  date: string;
}

export interface Contact {
  id: string;
  teacherId: string;
  nom: string;
  prenom: string;
  role: 'etudiant' | 'administration' | 'collegue' | 'responsable';
  telephone?: string;
  whatsapp?: string;
  email?: string;
}
