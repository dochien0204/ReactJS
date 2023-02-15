import React from 'react'
import { useSelector, useDispatch } from 'react-redux'; 
import { authActions } from '../../../store/auth';
import classes from './TopMenuHeader.module.css'

const TopMenuHeader = () => {

  const isAuth = useSelector((state) => state.auth.isAuthenticate);
  const dispatch = useDispatch();

  const loginClickHandler = (event) => {
    dispatch(authActions.login());
  };

  const logoutClickHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <div className={classes['top-menu-header']}>
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>MY ACCOUNT</p>
        <p>SHOPPING CART</p>
        <p>CHECKOUT</p>
        {!isAuth && <p>CREATE AN ACCOUNT</p>}
        {!isAuth ? <p onClick={loginClickHandler}>LOGIN</p> : <p onClick={logoutClickHandler}>LOGOUT</p>}
    </div>
  )
}

export default TopMenuHeader