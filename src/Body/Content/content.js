import React, { Component } from "react";
import Summary from "./summary";
import Notification from "./notifications";

const Content = () => {
  return (
    <div className="contents">
      <Summary />
      <Notification />
    </div>
  );
};

export default Content;
