import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    isBtnHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
