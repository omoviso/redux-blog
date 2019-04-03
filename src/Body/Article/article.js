import React, { Component } from "react";
import { connect } from "react-redux";

class Article extends Component {
  render() {
    console.log(this.props);
    const article = this.props.article ? (
      <div className="card">
        <h1 className="center title">{this.props.article.title}</h1>
        <h4 className="author">
          By <i>{this.props.article.author}</i>
        </h4>
        <p>
          <i>{this.props.article.convertedPostedTime}</i>
        </p>
        <p>{this.props.article.articleContent}</p>
      </div>
    ) : (
      <div className="title center mtop">
        <strong>Sorry, I can't find the article</strong>
      </div>
    );
    return article;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    article: state.articles.find(arc => {
      return arc.id == id;
    })
  };
};
export default connect(mapStateToProps)(Article);
