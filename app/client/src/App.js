import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './store/actions';

import './App.css';
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';

class App extends Component {

  // state = {
  //     currencies: []
  // };

  componentDidMount() {
      this.props.onCryptocurrenciesInit();
  }

  render() {
      return (
          <div className="App">
              <Cryptocurrencies currencies={this.props.cryptocurrencies} />
              <div>
                  <p>Selected coin: {this.props.selectedCurrency}</p>
              </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        cryptocurrencies: state.cryptocurrencies,
        selectedCurrency: state.selectedCurrency
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (currencyName) => dispatch(actions.changeCurrency(currencyName)),
        onCryptocurrenciesInit: () => dispatch(actions.cryptocurrenciesInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
