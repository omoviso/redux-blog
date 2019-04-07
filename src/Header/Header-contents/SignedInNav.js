import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../Actions/authAction";
import { connect } from "react-redux";

const SignedInNav = props => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink to="/create">Create New Article</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <div className="profileInitial">
            <NavLink to="/profile">{props.initial}</NavLink>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    initial: state.firebase.profile.initial
      ? state.firebase.profile.initial
      : "Anon"
  };
};

const dispatchActionToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  dispatchActionToProps
)(SignedInNav);
