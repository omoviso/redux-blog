import React, { Component } from "react";
import Header from "./Header/header";
import Body from "./Body/body";
import { BrowserRouter } from "react-router-dom";

// import ConvertTime from "./sideFeatures/convertTime";

class App extends Component {
  render() {
    // ConvertTime();
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
