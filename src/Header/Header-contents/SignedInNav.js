import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const SignedInNav = props => {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link className="" to="/profile">
            My Profile
          </Link>
        </li>
        <li>
          <Link className="" to="/create">
            Create New Article
          </Link>
        </li>
        <li>
          <Link className="" to="/signin">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SignedInNav;
