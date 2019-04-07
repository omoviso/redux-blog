const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      console.log("Add article", action.article);
      return state;
    case "ADD_ARTICLE_ERROR":
      console.log("Error ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
