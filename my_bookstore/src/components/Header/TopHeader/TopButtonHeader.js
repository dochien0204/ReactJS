import React from "react";
import TopButtonCartHeader from "./TopButtonCartHeader";
import Notification from "./Notification";
import classes from "./TopButtonHeader.module.css";
import Account from "./Account/Account";

const TopButtonHeader = () => {

  return (
    <div className={classes["top-button-header"]}>
      <TopButtonCartHeader />
      <Notification />
      <Account />
    </div>
  );
}

export default TopButtonHeader;
