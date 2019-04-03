export const addArticle = article => {
  console.log(article);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...article,
        authorFirstName: "Thanh",
        authorLastName: "Nguyen",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        const project = { type: "ADD_ARTICLE", article };
        dispatch(project);
      })
      .catch(err => {
        dispatch({ type: "ADD_PROJECT_ERROR", err });
      });
  };
};
