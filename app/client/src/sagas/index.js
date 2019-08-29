import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';

import * as actionType from '../store/actions/actionTypes';
import * as actions from '../store/actions';

function* InitCurrencies() {
    // yield delay(1000)
    yield put(actions.initStart());

    try {
        const response = yield axios.get('localhost:3000/api/exchanges');

        yield put(actions.setCryptocurrencies(response.data))
    } catch (error) {
        yield put(actions.initFail())
    }
}

export function* watchInitCurrencies() {
    yield takeEvery(actionType.CRYPTOCURRENCY_INIT, InitCurrencies);
}

export default function* rootSaga() {
    yield all([
        watchInitCurrencies()
    ])
}