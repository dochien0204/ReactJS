import React from "react";
import { useSelector } from "react-redux";
import TopMenuHeader from "./TopMenuHeader";
import TopButtonHeader from "./TopButtonHeader";

import classes from "./TopHeader.module.css";

function TopHeader() {
  const isAuth = useSelector((state) => state.auth.isAuthenticate);

  return (
    <div className={classes["top-header"]}>
      <TopMenuHeader />
      {isAuth && <TopButtonHeader />}
    </div>
  );
}

export default TopHeader;
