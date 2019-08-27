import React, {Component} from 'react';
import classes from './Cryptocurrency.module.css';

const cryptocurrency = (props) => {

    const {currency} = props;
    const {exchanges} = currency;

    const list = exchanges.map((exchange) => {
        return <li>
            <p><b>{exchange.ccy}:</b> {exchange.sale}</p>
        </li>
    });

    return (
        <div>
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

export default cryptocurrency;