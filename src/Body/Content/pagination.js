import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ articles, pageId }) => {
  // const articles = props.pageId;
  // console.log(pageId);
  let pagination = [];
  if (articles && articles.length > 4) {
    let i = 0;
    for (i = 0; i < Math.ceil(articles.length) / 4; i++) {
      pagination.push(
        <NavLink key={Math.random()} to={`/page/${i + 1}`}>
          <button>{i + 1}</button>
        </NavLink>
      );
    }

    const nextPage =
      Number(pageId.params.id) === i ? i : Number(pageId.params.id) + 1;
    pagination.push(
      <NavLink key={Math.random()} to={`/page/${Number(nextPage)}`}>
        <button>>></button>
      </NavLink>
    );
  }
  return pagination;
};
export default Pagination;
