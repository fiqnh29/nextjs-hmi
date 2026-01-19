export const insightsSectionQuery = `
  *[_type == "insightsSection"][0]{
    title,
    viewMoreUrl,
    items[]{
      title,
      description,
      "image": image.asset->url,
      href
    }
  }
`;
