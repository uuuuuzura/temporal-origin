export const getMetadataTitle = (pageTitle?: string) => {
  let metadataTitle = "Temporal Origin 🌌";

  if (pageTitle) {
    metadataTitle += ` ${pageTitle}`;
  }

  return metadataTitle;
};
