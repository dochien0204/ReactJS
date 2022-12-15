import React from 'react'
import TopMenuHeader from './TopMenuHeader'
import TopButtonHeader from './TopButtonHeader'

import classes from "./TopHeader.module.css";

function TopHeader() {
  return (
    <div className={classes['top-header']}>
        <TopMenuHeader />
        <TopButtonHeader />
    </div>
  )
}

export default TopHeader