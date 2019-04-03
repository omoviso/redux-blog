import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../Actions/addArticle";

class CreateArticle extends Component {
  state = {
    title: "",
    author: "Thanh Nguyen",
    articleContent: ""
  };
  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          className="full-width input"
          id="title"
          name="title"
          placeholder="Title"
          required
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="articleContent">Content:</label>
        <br />
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
    const propKey = e.target.id;
    const inputValue = e.target.value;
    this.setState({
      [propKey]: inputValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, author, articleContent } = this.state;
    const postedTime = new Date().getTime();
    console.log(postedTime);
    // console.log(this.props);
    this.props.addArticle(title, author, articleContent, postedTime);
    this.props.history.push("/");
  };
}

const mapActionToProps = dispatch => {
  return {
    addArticle: (title, author, content, postedTime) => {
      dispatch(addArticle(title, author, content, postedTime));
    }
  };
};
export default connect(
  null,
  mapActionToProps
)(CreateArticle);
