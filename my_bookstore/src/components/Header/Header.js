import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import classes from './Header.module.css'
import BottomHeader from './BottomHeader/BottomHeader';

function Header() {
  return (
    <header className={classes.header}>
        <TopHeader />
        <BottomHeader />
    </header>
  )
}

export default Header