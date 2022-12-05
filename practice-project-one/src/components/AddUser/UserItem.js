import React from "react";
import Button from "../UI/Button";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
    const deleteHandler = () => {
        props.onDeleted(props.id);
    }
    return (
        <li>
            {props.name} ({props.age} years old)
        <Button className={classes.button} onClick={deleteHandler}>Delete</Button>
        </li>
  );
};

export default UserItem;
