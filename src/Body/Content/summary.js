import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Sumamry = ({ articles, match }) => {
  let articleList = [];
  let pageId = match.params.id || 1;

  if (articles && articles.length > 0) {
    const firstArticle = (pageId - 1) * 4;
    const finalArticle = firstArticle + 4;
    articles = articles.slice(firstArticle, finalArticle);

    articleList = articles.map(article => {
      return (
        <div className="card spaceBottom" key={article.id}>
          <h1>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </h1>
          <h4>
            By: {article.authorFirstName} {article.authorLastName}
          </h4>
          <p className="timeStamp">
            {moment(article.createdAt.toDate()).calendar()}
          </p>
        </div>
      );
    });
  } else {
    articleList = <h1 className="titleCenter"> No Article At The Moment!</h1>;
  }
  return <div className="summary">{articleList}</div>;
};

export default Sumamry;
