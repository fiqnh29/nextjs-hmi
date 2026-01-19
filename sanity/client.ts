import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion: '2024-01-01',
  dataset: 'production',
  projectId: 'bm2nxjoo',
  useCdn: false,
});
