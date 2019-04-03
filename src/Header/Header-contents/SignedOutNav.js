import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const SignedOutNav = props => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link className="linkColor" to="/signin">
            Log In
          </Link>
        </li>
        <li>
          <Link className="linkColor" to="/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutNav;
