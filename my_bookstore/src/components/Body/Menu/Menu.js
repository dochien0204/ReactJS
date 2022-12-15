import React from "react";
import Button from "../../UI/Button";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Button className={classes.but}>
        <p>Biography</p>
      </Button>
      <Button className={classes.but}>
        <p>Action & Adventure</p>
      </Button>
      <Button className={classes.but}>
        <p>Health & Fitness</p>
      </Button>
      <Button className={classes.but}>
        <p>History</p>
      </Button>
      <Button className={classes.but}>
        <p>Mystery</p>
      </Button>
      <Button className={classes.but}>
        <p>Fairy Tales</p>
      </Button>
      <Button className={classes.but}>
        <p>Horrible</p>
      </Button>
      <Button className={classes.but}>
        <p>SALE</p>
      </Button>
    </div>
  );
};

export default Menu;
