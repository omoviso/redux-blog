import React, { Component } from "react";
import { Link } from "react-router-dom";
const SignInForm = () => {
  return (
    <div className="card form">
      <form>
        <label htmlFor="pName">Profile Name</label>
        <br />
        <input
          className="full-width"
          type="text"
          id="pName"
          placeholder="Profile Name"
        />
        <br />

        <label htmlFor="username">Username</label>
        <br />
        <input
          className="full-width"
          type="text"
          id="username"
          placeholder="Username"
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          className="full-width"
          type="password"
          id="password"
          placeholder="Password"
        />

        <label htmlFor="email">Email</label>
        <br />
        <input
          className="full-width"
          type="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignInForm;
