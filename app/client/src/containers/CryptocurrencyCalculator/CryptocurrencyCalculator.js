import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import Calculator from '../../components/Calculator/Calculator';

class CryptocurrencyCalculator extends Component {

    componentDidMount() {
        this.props.onCryptocurrenciesInit();
    }

    render() {
        return (<React.Fragment>
            <Cryptocurrencies
                changeHandler={this.props.onChangeCryptocurrency}
                currencies={this.props.cryptocurrencies}
            />
            <Calculator
                calculateResult={this.props.calculateResult}
                volume={this.props.volume}
                exchange={this.props.exchange}
                result={this.props.result}
                selectedCryptocurrency={this.props.selectedCryptocurrency}
                setExchange={this.props.setExchange}
                calculateVolume={this.props.calculateVolume}
            />
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        cryptocurrencies: state.cryptocurrency.cryptocurrencies,
        selectedCryptocurrency: state.cryptocurrency.cryptocurrency,
        volume: state.calculator.volume,
        exchange: state.calculator.exchange,
        result: state.calculator.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCryptocurrenciesInit: () => dispatch(actions.cryptocurrenciesInit()),
        onChangeCryptocurrency: (cryptocurrency) => dispatch(actions.setCryptocurrency(cryptocurrency)),
        calculateResult: (exchange, volume) => dispatch(actions.calculate(exchange, volume)),
        setExchange: (exchange) => dispatch(actions.setExchange(exchange)),
        calculateVolume: (volume) => dispatch(actions.calculateVolume(volume))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyCalculator);