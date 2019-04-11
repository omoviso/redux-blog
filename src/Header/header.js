import React, { Component } from "react";
import Title from "./Header-contents/title";
import SignedInNav from "./Header-contents/SignedInNav";
import SignedOutNav from "./Header-contents/SignedOutNav";
import { connect } from "react-redux";

const Header = props => {
  const { auth } = props;
  const Navbar = auth.uid ? <SignedInNav /> : <SignedOutNav />;
  return (
    <div className="container-fluid bg-secondary header">
      <ul className="nav row align-items-center">
        <li className="nav-item col-sm row justify-content-center">
          <Title />
        </li>
        <li className="nav-item col-sm">{Navbar}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Header);
