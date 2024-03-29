import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cryptocurrencies: [],
    cryptocurrency: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CRYPTOCURRENCY_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CRYPTOCURRENCY_SUCCESS:
            return {
                ...state,
                cryptocurrencies: action.cryptocurrencies,
                loading: false
            };
        case actionTypes.CRYPTOCURRENCY_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.CRYPTOCURRENCY_SELECT:
            return {
                ...state,
                cryptocurrency: {
                    ...action.cryptocurrency,
                    exchanges: [...action.cryptocurrency.exchanges]
                }
            };
        default:
            return state;
    }
};

export default reducer;
