import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Title = () => {
  return (
    <React.Fragment>
      <Link to="/" className="display-4 nav-link text-white font-weight-bold">
        My Blog
      </Link>
    </React.Fragment>
  );
};

export default Title;
