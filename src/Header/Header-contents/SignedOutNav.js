import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { resetError } from "../../Actions/authAction";

const SignedOutNav = props => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/signin" onClick={props.resetError}>
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={props.resetError}>
            Sign Up
          </Link>
        </li>
        <li>
          <div className="transparent">Create New ArtiCle</div>
        </li>
      </ul>
    </React.Fragment>
  );
};

const dispatchActionToProps = dispatch => {
  return {
    resetError: () => dispatch(resetError())
  };
};

export default connect(dispatchActionToProps)(SignedOutNav);
