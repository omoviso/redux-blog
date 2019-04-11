import React, { Component } from "react";
import Summary from "./summary";
import Notification from "./notifications";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import Pagination from "./pagination";

const Content = props => {
  const { auth, articles, notifications, match } = props;
  //CHECK IF USER IS LOGGED IN
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  //CHECK THE CURRENT ACTIVE PAGE IN SUMMARY

  return (
    <React.Fragment>
      <div className="container-fluid bg-transparent">
        <div className="row">
          <div className="col-md-6 card summary border-0">
            <Summary articles={articles} match={match} />
          </div>
          <div className="col-md-6 card border-0">
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
      {/* SET PAGINATION */}
      <ul className="pagination">
        <Pagination articles={articles} pageId={match} />
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    articles: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 4, orderBy: ["time", "desc"] }
  ])
)(Content);
