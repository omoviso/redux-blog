import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
class Article extends Component {
  render() {
    const { auth, article } = this.props;
    console.log(article);
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    const activeArticle = article ? (
      <div className="card-body">
        <h1 className="card-title">{article.title}</h1>
        <h4 className="card-text">
          By{" "}
          <i>
            <b>
              {article.authorFirstName} {article.authorLastName}
            </b>
          </i>
        </h4>
        <p>
          <i className="timeStamp">
            {moment(article.createdAt.toDate()).calendar()}
          </i>
        </p>
        <p>{article.articleContent}</p>
      </div>
    ) : (
      <div className="h1 text-center text-white">
        <strong>Loading article...</strong>
      </div>
    );
    return activeArticle;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const article = state.firestore.data.projects
    ? state.firestore.data.projects[id]
    : null;
  return {
    article,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Article);
