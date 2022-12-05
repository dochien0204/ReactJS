import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import UserItem from "./UserItem";

const UsersList = (props) => {

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          onDeleted={props.onDeleteUser}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
