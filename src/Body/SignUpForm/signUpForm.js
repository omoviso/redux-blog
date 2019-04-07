import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../Actions/authAction";

class SignUpForm extends Component {
  state = { email: "", password: "", firstName: "", lastName: "" };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="card small form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            className="full-width"
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            className="full-width"
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            className="full-width"
            type="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            className="full-width"
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <div className="red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const dispatchActionToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  dispatchActionToProps
)(SignUpForm);
