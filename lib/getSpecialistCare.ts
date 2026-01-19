import { client } from '@/sanity/client';
import { specialistCareQuery } from '@/sanity/queries/specialistCareQuery';

export async function getSpecialistCare() {
  return client.fetch(specialistCareQuery);
}
