import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Sumamry = ({ articles }) => {
  const articleList = articles.length ? (
    articles.map(article => {
      return (
        <div className="card" key={article.id}>
          <h1 className="title">
            <Link className="linkColor" to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </h1>
          <h4 className="author">Author: {article.author}</h4>
          <p className="timeline">
            <i>{article.convertedPostedTime}</i>
          </p>
        </div>
      );
    })
  ) : (
    <h1 className="title center"> No Article At The Moment!</h1>
  );
  return <div className="summary">{articleList}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles
  };
};
export default connect(mapStateToProps)(Sumamry);
