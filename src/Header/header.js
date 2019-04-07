import React, { Component } from "react";
import Title from "./Header-contents/title";
import SignedInNav from "./Header-contents/SignedInNav";
import SignedOutNav from "./Header-contents/SignedOutNav";
import { connect } from "react-redux";

const Header = props => {
  const { auth } = props;
  const Navbar = auth.uid ? <SignedInNav /> : <SignedOutNav />;
  return (
    <div className="header">
      <div className="logo">
        <Title />
      </div>
      <div className="navBar">{Navbar}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Header);
