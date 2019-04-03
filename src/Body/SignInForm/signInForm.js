import React, { Component } from "react";
import { Link } from "react-router-dom";
const SignInForm = () => {
  return (
    <div className="card form">
      <form>
        <label htmlFor="username">Username</label>
        <br />
        <input
          className="full-width"
          type="text"
          id="username"
          placeholder="username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="full-width"
          type="password"
          id="password"
          placeholder="password"
        />
        <button>Login</button>
      </form>
      <Link to="/signup">Need an account? Click here</Link>
    </div>
  );
};

export default SignInForm;
