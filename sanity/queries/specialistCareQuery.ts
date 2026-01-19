export const specialistCareQuery = `
  *[_type == "specialistCareSection"][0]{
    eyebrow,
    title,
    description,
    cta{
      label,
      link
    },
    specialties[]{
      title,
      description,
      "image": image.asset->url,
      cta
    }
  }
`;
