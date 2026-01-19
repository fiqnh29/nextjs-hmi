import { client } from '@/sanity/client';
import { medicalSpecialtiesQuery } from '@/sanity/queries/medicalSpecialtiesQuery';

export async function getMedicalSpecialties() {
  return client.fetch(medicalSpecialtiesQuery);
}
