import { put, takeEvery, all, select } from 'redux-saga/effects'
import axios from 'axios';

import * as actionType from '../store/actions/actionTypes';
import * as actions from '../store/actions';

function* InitCurrencies() {
    // yield delay(1000)
    yield put(actions.initStart());

    try {
        const response = yield axios.get('http://localhost:3000/api/exchanges');

        yield put(actions.setCryptocurrencies(response.data))
    } catch (error) {
        yield put(actions.initFail())
    }
}

function* CalculateResult (action) {
    let result = 0;
    if (action.exchange) {
        result = action.exchange.sale * action.volume;
    }
    yield put(actions.setCalculatorResult(result.toFixed(2)));
}

function* CryptocurrencySelect (action) {

    yield put(actions.changeCryptocurrency(action.cryptocurrency));
    const state = yield select();
    let exchange = {...state.calculator.exchange};

    if (exchange) {
        exchange = action.cryptocurrency.exchanges.find((exg) =>
            exg.ccy === exchange.ccy
        );
    }

    yield put(actions.calculate(exchange, state.calculator.volume))
}

export function* watchInitCurrencies() {
    yield takeEvery(actionType.CRYPTOCURRENCY_INIT, InitCurrencies);

    yield takeEvery(actionType.CALCULATOR_CALCULATE, CalculateResult);

    yield takeEvery(actionType.CRYPTOCURRENCY_SET, CryptocurrencySelect);
}

export default function* rootSaga() {
    yield all([
        watchInitCurrencies()
    ])
}