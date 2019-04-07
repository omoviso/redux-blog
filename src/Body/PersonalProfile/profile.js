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
    <div className="card">
      <h1>First Name: {profile.firstName}</h1>
      <h1>Last Name: {profile.lastName}</h1>
      <h1>Joined date: {joinedDate}</h1>
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
