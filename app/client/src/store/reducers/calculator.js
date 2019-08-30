import * as actionTypes from '../actions/actionTypes';

const initialState = {
    volume: 0,
    exchange: null,
    result: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CALCULATOR_CALCULATE:
            return {
                ...state,
                exchange: action.exchange,
                volume: action.volume
            };
        case actionTypes.CALCULATOR_SET_RESULT:
            return {
                ...state,
                result: action.result
            };
        default:
            return state;
    }
};

export default reducer;
