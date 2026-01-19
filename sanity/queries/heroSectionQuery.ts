import { groq } from 'next-sanity';

export const heroSectionQuery = groq`
*[_type == "heroSection"][0]{
  title,
  subtitle,
  description,
  "backgroundImageUrl": backgroundImage.asset->url,
  cta
}
`;
