import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './store/actions';

import './App.css';
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';
import Calculator from './components/Calculator/Calculator';

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
              <Calculator />
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        cryptocurrencies: state.cryptocurrency.cryptocurrencies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCryptocurrenciesInit: () => dispatch(actions.cryptocurrenciesInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
