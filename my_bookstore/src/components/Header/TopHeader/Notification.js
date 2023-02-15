import React, { useState } from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import classes from "./Notification.module.css";


const Notification = () => {

  const [isNotifyFocus, setIsNotifyFocus] = useState(false);
  const [isRead, setIsRead] = useState(false) 
  const notifyOnClickHandler = (event) => {
    event.preventDefault();
    setIsRead(true);
    setIsNotifyFocus((prevNotification) => !prevNotification);
  };

  const FocusOutHandler = () => {
    setIsNotifyFocus(false);
  };

  return (
    <button
      className={classes.notification}
      onClick={notifyOnClickHandler}
      onBlur={FocusOutHandler}
    >
      <IoNotificationsCircle
        className={`${classes.icon} ${isNotifyFocus ? classes.active : ""}`}
      />
      {!isRead && <div className={classes.badge}>3</div>}
      {isNotifyFocus && (
        <div className={classes["dropdown-menu"]}>
          <p>Notifications</p>
          <ul className={classes.list}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      )}
    </button>
  );
}

export default Notification;
