import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { resetError } from "../../Actions/authAction";

const SignedOutNav = props => {
  return (
    <ul className="nav nav-item nav-justified">
      <li className="nav-item h5">
        <NavLink
          to="/signin"
          className="nav-link text-white"
          onClick={props.resetError}
        >
          Log In
        </NavLink>
      </li>
      <li className="nav-item h5">
        <NavLink
          to="/signup"
          className="nav-link text-white"
          onClick={props.resetError}
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

const dispatchActionToProps = dispatch => {
  return {
    resetError: () => dispatch(resetError())
  };
};

export default connect(dispatchActionToProps)(SignedOutNav);
