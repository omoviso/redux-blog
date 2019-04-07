import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Content from "./Content/content";
import CreateArticle from "./CreateNewArticleForm/createArticleForm";
import Article from "./Article/article";
import SignInForm from "./SignInForm/signInForm";
import SignUpForm from "./SignUpForm/signUpForm";
import Profile from "./PersonalProfile/profile";
import ContentNotAvailable from "./ContentNotAvailable/ContentNotAvailable";
class Body extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/page/:id" component={Content} />
          <Route path="/create" component={CreateArticle} />
          <Route path="/article/:id" component={Article} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/" component={ContentNotAvailable} />
        </Switch>
      </div>
    );
  }
}

export default Body;
