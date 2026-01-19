import { client } from '@/sanity/client';
import { heroSectionQuery } from '@/sanity/queries/heroSectionQuery';

export async function getHeroSection() {
  return client.fetch(heroSectionQuery);
}
