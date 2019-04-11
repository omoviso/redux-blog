import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const { profile, auth } = props.personalInfo;
  if (!props.personalInfo.auth.uid) {
    return <Redirect to="/signin" />;
  }

  const joinedDate = new Date(Number(auth.createdAt)).toDateString();
  return (
    <div className="card-body">
      <h3>First Name: {profile.firstName}</h3>
      <h3>Last Name: {profile.lastName}</h3>
      <h3>Joined date: {joinedDate}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    personalInfo: state.firebase
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(Profile);
