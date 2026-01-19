import { client } from '@/sanity/client';
import { findUsSectionQuery } from '@/sanity/queries/findUsSectionQuery';

export async function getFindUsSection() {
  return client.fetch(findUsSectionQuery);
}
