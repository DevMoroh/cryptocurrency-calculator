import React from 'react';

import classes from './Calculator.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const calculator = (props) => {

    const onChangeVolume = (event) => {
        const volume = event.target.value;

        props.calculateVolume(volume);
    };

    const onChangeCurrency = (exchange) => {
        props.setExchange(exchange);
        props.calculateResult(exchange.sale, props.volume);
    };

    const isActiveButton = (exchange) => props.exchange && exchange.ccy === props.exchange.ccy;

    let buttons = null, calculator = null, selectedCurrencyTitle = '', resultBlock = null;
    const selectedCryptocurrency = props.selectedCryptocurrency;

    if (selectedCryptocurrency) {
        const {exchanges, title} = props.selectedCryptocurrency;
        buttons = exchanges.map((exchange) => {
            const isActive = isActiveButton(exchange);
            return <Button key={exchange.ccy} isActive={isActive} clicked={() => onChangeCurrency(exchange)}>{exchange.ccy}</Button>;
        });

        selectedCurrencyTitle = selectedCryptocurrency.title;

        resultBlock = props.exchange ?
            (<React.Fragment>
                <b>{props.volume} {title}</b> will be <b>{props.result}</b> in <b>{props.exchange.ccy}</b>
            </React.Fragment>) : null;

        calculator = (<React.Fragment>
            <p className={classes.Selectedcurrency}>Selected coin: {selectedCurrencyTitle}</p>

            <Input type="number" label="Volume" value={props.volume} changed={onChangeVolume}/>

            <div className={classes.Buttons}>
                {buttons}
            </div>
            <p>
                {resultBlock}
            </p>
        </React.Fragment>)
    }

    return (
        <div className={classes.Calculator}>
            {calculator}
        </div>
    );

};

export default calculator;