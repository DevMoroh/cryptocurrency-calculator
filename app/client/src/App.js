import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';

class App extends Component {

  state = {
      currencies: []
  };

  componentDidMount() {

  }

  render() {
      return (
          <div className="App">
              <Cryptocurrencies currencies={this.props.currencies} />
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.cryptocurrencies
    }
};

export default connect(mapStateToProps)(App);
