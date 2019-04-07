import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../Actions/addArticleAction";
import { Redirect } from "react-router-dom";

class CreateArticle extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    return (
      <form className="card form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="full-width input"
          id="title"
          name="title"
          placeholder="Title"
          required
          onChange={this.handleChange}
        />

        <label htmlFor="articleContent">Content:</label>

        <textarea
          id="articleContent"
          required
          className="full-width"
          placeholder="Content"
          rows="20"
          onChange={this.handleChange}
        />
        <button className="submit button">Submit</button>
      </form>
    );
  }

  handleChange = e => {
    const stateKey = e.target.id;
    const inputValue = e.target.value;
    this.setState({
      [stateKey]: inputValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addArticle(this.state);
    this.props.history.push("/");
  };
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const dispatchActionToProps = dispatch => {
  return {
    addArticle: article => {
      dispatch(addArticle(article));
    }
  };
};
export default connect(
  mapStateToProps,
  dispatchActionToProps
)(CreateArticle);
