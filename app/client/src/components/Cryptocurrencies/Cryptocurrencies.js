import React from 'react';

import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import classes from './Cryptocurrencies.module.css';

const cryptocurrencies = ({currencies, changeHandler}) => {
    return (
        <div className={classes.Cryptocurrencies}>
            {currencies.map((currency) => <Cryptocurrency
                key={currency.name}
                currency={currency}
                changeHandler={changeHandler}
            />)}
        </div>
    );
};

export default cryptocurrencies;