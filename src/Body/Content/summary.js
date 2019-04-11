import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Sumamry = ({ articles, match }) => {
  let articleList = [];
  let pageId = match.params.id || 1;

  if (articles && articles.length > 0) {
    const firstArticle = (pageId - 1) * 3;
    const finalArticle = firstArticle + 3;
    articles = articles.slice(firstArticle, finalArticle);

    articleList = articles.map(article => {
      return (
        <div className="card-body border my-2" key={article.id}>
          <h2 className="card-title">
            <Link className="card-link" to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h2>
          <h5 className="card-text">
            By: {article.authorFirstName} {article.authorLastName}
          </h5>
          <p className="text-muted">
            {moment(article.createdAt.toDate()).calendar()}
          </p>
        </div>
      );
    });
  } else {
    articleList = (
      <h1 className="h1 text-center text-white"> No Article At The Moment!</h1>
    );
  }
  return <React.Fragment>{articleList}</React.Fragment>;
};

export default Sumamry;
