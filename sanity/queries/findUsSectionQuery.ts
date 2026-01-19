export const findUsSectionQuery = `
*[_type == "findUsSection"][0]{
  title,
  address,
  emails,
  mapEmbedUrl,
  phone,
  whatsapp,
  satelliteClinic
}
`;
