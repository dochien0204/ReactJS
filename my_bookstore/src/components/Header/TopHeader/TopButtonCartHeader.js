import React from 'react'

import classes from "./TopButtonCartHeader.module.css";
import {IoCartSharp} from 'react-icons/io5/'

function TopButtonCartHeader() {
  return (
    <button className={classes['button-cart-header']}>
        <IoCartSharp className={classes.icon} />
        <div className={classes.info}>
            <span>CART</span>
            <span className={classes.amount}>(0 ITEMS)</span>
            <span className={classes['total-amount']}>$00.00</span>
        </div>
    </button>
  )
}

export default TopButtonCartHeader