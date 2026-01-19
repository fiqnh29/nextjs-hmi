export const medicalSpecialtiesQuery = `
  *[_type == "medicalSpecialtiesSection"][0]{
    heading,
    description,
    specialties[]{
      title,
      description,
      "imageUrl": icon.asset->url
    }
  }
`;
