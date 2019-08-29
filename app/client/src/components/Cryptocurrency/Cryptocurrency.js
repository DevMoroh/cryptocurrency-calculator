import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Cryptocurrency.module.css';

const cryptocurrency = (props) => {

    const {currency, changeCurrency} = props;
    const {exchanges} = currency;

    const list = exchanges.map((exchange) => {
        return <li>
            <p><b>{exchange.ccy}:</b> {exchange.sale}</p>
        </li>
    });

    return (
        <div onClick={changeCurrency}>
            <div>
                <img src={currency.logo} alt={currency.name} />
                <p>{currency.title}</p>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (currencyName) => dispatch(actions.changeCurrency(currencyName)),
    };
};

export default connect(null, mapDispatchToProps)(cryptocurrency);