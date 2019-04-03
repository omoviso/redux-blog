import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Content from "./Content/content";
import CreateArticle from "./CreateNewArticleForm/createArticleForm";
import Article from "./Article/article";
import SignInForm from "./SignInForm/signInForm";
import SignUpForm from "./SignUpForm/signUpForm";
import "./body.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/create" component={CreateArticle} />
          <Route path="/article/:id" component={Article} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </div>
    );
  }
}

export default Body;
