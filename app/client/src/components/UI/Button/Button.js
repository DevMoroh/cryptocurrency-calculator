import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
   return <button
        className={[classes.Button, props.isActive ? classes.active : ''].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
};

export default button;