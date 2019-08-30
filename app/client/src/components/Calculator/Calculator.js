import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Calculator.module.css';
import Button from '../UI/Button/Button';

class Calculator extends Component {

    state = {
        volume: '',
        currency: 'USD',
        result: ''
    };

    // const {currencies} = props;

    onChangeVolume = (event) => {
        let result = '';
        let volume = event.target.value;

        if (this.props.selectedCryptocurrency) {
            const {exchanges} = this.props.selectedCryptocurrency;

            const exchange = exchanges.filter((exchange) => {
                return exchange.ccy === this.state.currency;
            });

            if (exchange) {
                result = exchange.sale * volume;
            }
        }

        this.setState({
            volume: volume, result: result
        });
    };

    onChangeCurrency = (currency) => {
        this.setState({ currency: currency });
    };

    render() {
        const {selectedCryptocurrency} = this.props;
        const selectedCurrencyTitle = selectedCryptocurrency ? selectedCryptocurrency.title : null;

        return (

            <div className={classes.Calculator}>
                <p>Selected coin: {selectedCurrencyTitle}</p>

                <label>Volume:</label>
                <input id="volume" type="text" value={this.state.volume} onChange={this.onChangeVolume}/>

                <Button clicked={() => this.onChangeCurrency('UAH')}>UAH</Button>
                <Button clicked={() => this.onChangeCurrency('UAH')}>USD</Button>
                <Button clicked={() => this.onChangeCurrency('RUR')}>RUR</Button>

                <div>
                     {`${this.state.volume} will be ${this.state.result} in ${this.state.currency}`}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCryptocurrency: state.cryptocurrency
    }
};

export default connect(mapStateToProps)(Calculator);