import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
import type { CourseAttachment } from '../types';

export async function uploadCourseAttachment(
  teacherId: string,
  courseId: string,
  file: File
): Promise<CourseAttachment> {
  const storagePath = `courses/${teacherId}/${courseId}/${Date.now()}_${file.name}`;
  const storageRef = ref(storage, storagePath);
  await uploadBytes(storageRef, file, { contentType: file.type });
  const url = await getDownloadURL(storageRef);

  return {
    name: file.name,
    url,
    size: file.size,
    mimeType: file.type,
    uploadedAt: new Date().toISOString(),
    storagePath,
  };
}

export async function deleteCourseAttachment(storagePath: string): Promise<void> {
  await deleteObject(ref(storage, storagePath));
}
