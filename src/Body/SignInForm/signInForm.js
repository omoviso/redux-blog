import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../Actions/authAction";

class SignInForm extends Component {
  state = { email: "", password: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = e => {
    const stateKey = e.target.id;
    this.setState({ [stateKey]: e.target.value });
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="signIn form bg-white p-3">
        <form className="form-group mb-0" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>

          <input
            className="form-control"
            type="text"
            id="email"
            placeholder="email"
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>

          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button className="btn btn-secondary h3 mt-2">Login</button>
        </form>
        <div className="text-danger">
          {authError ? <p>{authError}</p> : null}
        </div>
        <Link to="/signup" className="signUpLink">
          Need an account? Click here!
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const dispatchActionToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(
  mapStateToProps,
  dispatchActionToProps
)(SignInForm);
