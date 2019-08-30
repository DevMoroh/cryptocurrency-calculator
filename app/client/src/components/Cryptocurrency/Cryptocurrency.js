import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Cryptocurrency.module.css';

const cryptocurrency = (props) => {

    const {currency, onChangeCryptocurrency} = props;
    const {exchanges} = currency;

    const list = exchanges.map((exchange) => {
        return <li key={exchange.ccy}>
            <p><b style={{ marginRight: '15px'}}>{exchange.ccy}:</b>    {exchange.sale}</p>
        </li>
    });

    return (
        <div className={classes.Cryptocurrency} onClick={() => onChangeCryptocurrency(currency)}>
            <div className={classes.ImageBlock}>
                <img src={currency.logo} alt={currency.name} />
                <p>{currency.title}</p>
            </div>
            <ul className={classes.Currencylist}>
                {list}
            </ul>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCryptocurrency: (cryptocurrency) => dispatch(actions.changeCryptocurrency(cryptocurrency)),
    };
};

export default connect(null, mapDispatchToProps)(cryptocurrency);