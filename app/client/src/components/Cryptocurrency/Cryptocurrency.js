import React from 'react';

import classes from './Cryptocurrency.module.css';

const cryptocurrency = ({currency, changeHandler}) => {

    const {exchanges} = currency;

    const list = exchanges.map((exchange) => {
        return <li key={exchange.ccy}>
            <p><b style={{ marginRight: '15px'}}>{exchange.ccy}:</b>    {exchange.sale}</p>
        </li>
    });

    return (
        <div className={classes.Cryptocurrency} onClick={() => changeHandler(currency)}>
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

export default cryptocurrency;