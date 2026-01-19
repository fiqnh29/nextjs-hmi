import { client } from '@/sanity/client';
import { insightsSectionQuery } from '@/sanity/queries/insightsSectionQuery';

export async function getInsightsSection() {
  return client.fetch(insightsSectionQuery);
}
