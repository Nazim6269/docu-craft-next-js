export const getDocsByCategory = (docs, category) => {
  return docs.filter((doc) => doc.category === category);
};

export const getDocsByTag = (docs, tag) => {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
};

export const getDocsByAuthor = (docs, author) => {
  return docs.filter((doc) => encodeURI(doc.author) === author);
};
