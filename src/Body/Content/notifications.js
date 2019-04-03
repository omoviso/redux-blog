import React, { Component } from "react";
import { connect } from "react-redux";

const Notifications = ({ articles }) => {
  const articleList = articles.length ? (
    articles.map(article => {
      return (
        <div className="card" key={article.id}>
          <p>
            {article.author} posted{" "}
            <i>
              {article.title} {article.convertedPostedTime}
            </i>
          </p>
        </div>
      );
    })
  ) : (
    <h1 className="title center"> No News At The Moment!</h1>
  );
  return <div className="notifications">{articleList}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Notifications);
