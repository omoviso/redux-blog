const initState = {
  articles: [
    // { id: "1", title: "CSS", author: "Thanh Nguyen", content: "Learn CSS" }
  ]
};

const rootReducer = (state = initState, action) => {
  // console.log(state, action);
  if (action.type === "ADD_ARTICLE") {
    const { title, author, content, postedTime } = action;
    const newArticle = {
      id: state.articles.length
        ? state.articles[state.articles.length - 1].id + 1
        : 1,
      title,
      author,
      content,
      postedTime,
      convertedPostedTime: "a few seconds ago"
    };
    return {
      ...state,
      articles: [...state.articles, newArticle]
    };
  }

  if (action.type === "CONVERT_TIME") {
    const convertedArticle = state.articles.map(article => {
      if (article.id === action.article.id) {
        article = action.article;
      }
      return article;
    });
    return {
      ...state,
      articles: convertedArticle
    };
  }
  return state;
};

export default rootReducer;
