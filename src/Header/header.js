import React, { Component } from "react";
import Title from "./Header-contents/title";
import SignedInNav from "./Header-contents/SignedInNav";
import SignedOutNav from "./Header-contents/SignedOutNav";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <Title />
        <SignedInNav />
        <SignedOutNav />
      </div>
    );
  }
}

export default Header;
