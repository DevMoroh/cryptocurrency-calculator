import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Calculator.module.css';
import Button from '../UI/Button/Button';

class Calculator extends Component {

    onChangeVolume = (event) => {
        let volume = event.target.value;

        this.props.calculateResult(this.props.exchange, volume);
    };

    onChangeCurrency = (exchange) => {

        this.props.calculateResult(exchange, this.props.volume);

        // this.setState({ exchange, result });
    };

    isActiveButton = (exchange) => this.props.exchange && exchange.ccy === this.props.exchange.ccy;

    render() {

        let buttons = null, calculator = null, selectedCurrencyTitle = '', resultBlock = null;
        const selectedCryptocurrency = this.props.selectedCryptocurrency;

        if (selectedCryptocurrency) {
            const {exchanges, title} = this.props.selectedCryptocurrency;
            buttons = exchanges.map((exchange) => {
                const isActive = this.isActiveButton(exchange);
                return <Button key={exchange.ccy} isActive={isActive} clicked={() => this.onChangeCurrency(exchange)}>{exchange.ccy}</Button>;
            });

            selectedCurrencyTitle = selectedCryptocurrency.title;

            resultBlock = this.props.exchange ?
                `${this.props.volume} ${title} will be ${this.props.result} in ${this.props.exchange.ccy}` : null;

            calculator = (<React.Fragment>
                <p className={classes.Selectedcurrency}>Selected coin: {selectedCurrencyTitle}</p>

                <label>Volume:</label>
                <input id="volume" type="number" value={this.props.volume} onChange={this.onChangeVolume}/>
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
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCryptocurrency: state.cryptocurrency.cryptocurrency,
        volume: state.calculator.volume,
        exchange: state.calculator.exchange,
        result: state.calculator.result
    }
};

const mapDispatchToProps = (dispatch) => {
   return {
       calculateResult: (exchange, volume) => dispatch(actions.calculate(exchange, volume))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);