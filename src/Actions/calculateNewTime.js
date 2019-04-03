const CalculateNewTime = store => {
  // console.log(store.getState());
  const currentTime = new Date().getTime();
  const { articles } = store.getState();
  articles.forEach(article => {
    const durationInSeconds = (currentTime - article.postedTime) / 1000;
    if (durationInSeconds > 60) {
      const durationInMinutes = Math.floor(durationInSeconds / 60);
      const durationInHours = Math.floor(durationInMinutes / 60);
      let convertedTime = "";
      if (durationInHours < 1) {
        convertedTime = `${durationInMinutes} minute${
          durationInMinutes > 1 ? "s" : ""
        } ago`;
      } else {
        convertedTime = `${durationInHours} hour${
          durationInHours > 1 ? "s" : ""
        } ago`;
      }

      if (convertedTime !== article.convertedTime) {
        const convertedArticle = JSON.parse(JSON.stringify(article));
        convertedArticle.convertedPostedTime = convertedTime;
        store.dispatch({ type: "CONVERT_TIME", article: convertedArticle });
      }
    }
  });
};
export default CalculateNewTime;
