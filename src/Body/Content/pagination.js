import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Pagination = ({ articles, pageId }) => {
  // const articles = props.pageId;
  // console.log(pageId);
  let pagination = [];
  if (articles && articles.length > 3) {
    let i = 0;
    for (i = 0; i < Math.ceil(articles.length) / 3; i++) {
      pagination.push(
        <li className="page-item" key={Math.random()}>
          <NavLink className="page-link" to={`/page/${i + 1}`}>
            {i + 1}
          </NavLink>
        </li>
      );
    }

    const nextPage =
      Number(pageId.params.id) === i ? i : Number(pageId.params.id) + 1;
    pagination.push(
      <li className="page-item" key={Math.random()}>
        <NavLink className="page-link" to={`/page/${Number(nextPage)}`}>
          >>
        </NavLink>
      </li>
    );
  }
  return pagination;
};
export default Pagination;
