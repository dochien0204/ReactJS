import React, { useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasCartItems = cartCtx.items.length > 0;

  useEffect(() => {
    
  }, [])
  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => 
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)}
        />
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      {!hasCartItems && <p>No product in your cart</p>}
      <div className={classes.total}>
        <span>Total</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasCartItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
