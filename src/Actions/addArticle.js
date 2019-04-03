export const addArticle = (title, author, content, postedTime) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const project = { type: "ADD_ARTICLE", title, author, content, postedTime };
    dispatch(project);
  };
};
