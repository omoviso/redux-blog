import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../Actions/authAction";
import { connect } from "react-redux";

const SignedInNav = props => {
  return (
    <ul className="nav nav-item nav-justified h6 ">
      <li className="nav-item row justify-content-center align-items-center">
        <NavLink to="/create" className="nav-link text-white">
          Create New Article
        </NavLink>
      </li>
      <li className="nav-item row justify-content-center align-items-center">
        <NavLink to="/" onClick={props.signOut} className="nav-link text-white">
          Log Out
        </NavLink>
      </li>
      <li className="nav-item row justify-content-center align-items-center">
        <div className="profileInitial">
          <NavLink to="/profile" className="nav-link text-white">
            {props.initial}
          </NavLink>
        </div>
      </li>
    </ul>
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
