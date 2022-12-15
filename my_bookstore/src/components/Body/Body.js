import React from "react";

import classes from "./Body.module.css";
import BookList from "./BookList/BookList";
import Menu from "./Menu/Menu";
const Body = () => {
  return (
    <div className={classes.body}>
      <Menu />
      <p>Featured Products</p>
      <div className={classes['h-separator']}></div>
      <BookList />
    </div>
  );
};

export default Body;
