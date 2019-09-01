import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
   const {type, value, changed, label} = props;

   return <div className={classes.Input}>
            <label className={classes.Label}>{label}:</label>
            <input  min="1" max="10" type={type} value={value} className={classes.InputElement} onChange={changed} />
        </div>
};

export default input;