export const addArticle = article => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    console.log(profile);
    const authorId = getState().firebase.auth.uid;
    console.log(authorId);
    firestore
      .collection("projects")
      .add({
        ...article,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        const project = { type: "ADD_ARTICLE", article };
        dispatch(project);
      })
      .catch(err => {
        dispatch({ type: "ADD_ARTICLE_ERROR", err });
      });
  };
};
