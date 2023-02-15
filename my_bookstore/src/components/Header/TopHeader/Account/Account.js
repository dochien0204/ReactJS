import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { authActions } from "../../../../store/auth";
import {
  IoSettingsSharp,
  IoHelpCircleSharp,
  IoLogOut,
  IoChevronBackSharp,
} from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import classes from "./Account.module.css";

const Account = () => {

  const dispatch = useDispatch();

  const [isAvatarFocus, setIsAvatarFocus] = useState(false);

  const avatarClickHandler = (event) => {
    event.preventDefault();
    setIsAvatarFocus((prevState) => !prevState);
  };

  const onFocusOutHandler = () => {
    setIsAvatarFocus(false);
  };

  const logoutClickHandler = (event) => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.account} onBlur={onFocusOutHandler} tabIndex="1">
      <div className={classes.image}>
        <p>Do Chien</p>
        <img
          src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/312354183_2157116791166302_4946087965611522295_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P-gvr0n0n1IAX-O9iL_&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAXCEUokH9kmJhVfu6Hq0LHTDwLEq6ZTkNFrhZQgNmDEg&oe=639B5021"
          alt="avatar"
          onClick={avatarClickHandler}
        />
      </div>
      {isAvatarFocus && (
        <div className={classes["dropdown-menu"]}>
          <ul >
            <li className={classes.list}>
              <RiAccountPinCircleFill className={classes["icon-sharp"]} />
              <p>See all profiles</p>
              <IoChevronBackSharp className={classes["icon-greater"]} />
            </li>
            <li className={classes.list}>
              <IoSettingsSharp className={classes["icon-sharp"]} />
              <p>Settings & privacy</p>
              <IoChevronBackSharp className={classes["icon-greater"]} />
            </li>
            <li className={classes.list}>
              <IoHelpCircleSharp className={classes["icon-sharp"]} />
              <p>Help & Support</p>
              <IoChevronBackSharp className={classes["icon-greater"]} />
            </li>
            <li className={classes.list}>
              <MdFeedback className={classes["icon-sharp"]} />
              <p>Give Feedback</p>
              <IoChevronBackSharp className={classes["icon-greater"]} />
            </li>
            <li className={classes.list} onClick={logoutClickHandler}>
              <IoLogOut className={classes["icon-sharp"]} />
              <p>Log Out</p>
              <IoChevronBackSharp className={classes["icon-greater"]} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Account;
