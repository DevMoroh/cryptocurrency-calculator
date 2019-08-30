import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Button.module.css';

const button = (props) => (
    <button
        onClick={props.clicked}
        className={classes.Button}
    >
        {props.children}
    </button>
);

export default button;