import React from 'react'
import classes from './Backdrop.module.css'

    const Backdrop = (props) => {
        return <div onClick={props.onClick} className={classes.backdrop} onClose={props.onClose}>
            
        </div>
    };

export default Backdrop;