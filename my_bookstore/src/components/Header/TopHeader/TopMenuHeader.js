import React from 'react'
import classes from './TopMenuHeader.module.css'

function TopMenuHeader() {
  return (
    <div className={classes['top-menu-header']}>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>MY ACCOUNT</p>
        <p>SHOPPING CART</p>
        <p>CHECKOUT</p>
        <p>CREATE AN ACCOUNT</p>
        <p>LOGIN</p>
    </div>
  )
}

export default TopMenuHeader