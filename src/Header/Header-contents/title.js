import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <Link to="/" className="logo">
        My Blog
      </Link>
    </div>
  );
};

export default Title;
