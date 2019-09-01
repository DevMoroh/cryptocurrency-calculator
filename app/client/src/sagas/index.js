import { put, takeEvery, select, takeLatest } from 'redux-saga/effects'
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
    if (action.sale) {
        result = action.sale * action.volume;
    }
    yield put(actions.setCalculatorResult(result.toFixed(2)));
}

const getExchange = (state) => state.calculator.exchange;

const getVolume = (state) => state.calculator.volume;

function* CalculateVolume(action) {

    yield put(actions.setVolume(action.volume));

    const exchange = yield select(getExchange);

    const sale = exchange ? exchange.sale : null;

    if (sale) {
        yield put(actions.calculate(sale, action.volume))
    }
}

function* CryptocurrencySelect (action) {

    yield put(actions.changeCryptocurrency(action.cryptocurrency));

    const exchange = yield select(getExchange);
    const volume = yield select(getVolume);
    let exchangeNew = null;

    if (exchange) {
        exchangeNew = action.cryptocurrency.exchanges.find((exg) =>
            exg.ccy === exchange.ccy
        );
        if (exchangeNew) {
            yield put(actions.setExchange(exchangeNew));
        }
    }
    const sale = exchangeNew ? exchangeNew.sale : null;

    if (sale) {
        yield put(actions.calculate(sale, volume))
    }
}

export default function* rootSaga() {
    yield takeEvery(actionType.CRYPTOCURRENCY_INIT, InitCurrencies);

    yield takeLatest(actionType.CALCULATOR_CALCULATE, CalculateResult);

    yield takeEvery(actionType.CRYPTOCURRENCY_SET, CryptocurrencySelect);

    yield takeEvery(actionType.CALCULATOR_CALC_VOLUME, CalculateVolume);
}