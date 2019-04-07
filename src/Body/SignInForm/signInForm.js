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
      <div className="card small form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="full-width"
            type="text"
            id="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="full-width"
            type="password"
            id="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
        <div className="red-text">{authError ? <p>{authError}</p> : null}</div>
        <Link to="/signup" className="linkColor">
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
