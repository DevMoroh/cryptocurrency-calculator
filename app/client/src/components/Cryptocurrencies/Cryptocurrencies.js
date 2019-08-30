import React from 'react';

import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import classes from './Cryptocurrencies.module.css';

const cryptocurrencies = (props) => {

    const {currencies} = props;

    return (
        <div className={classes.Cryptocurrencies}>
            {currencies.map((currency) => <Cryptocurrency
                key={currency.name}
                currency={currency}
            />)}
        </div>
    );
};

export default cryptocurrencies;