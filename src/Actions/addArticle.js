export const addArticle = (title, author, content, postedTime) => {
  return {
    type: "ADD_ARTICLE",
    title,
    author,
    content,
    postedTime
  };
};
