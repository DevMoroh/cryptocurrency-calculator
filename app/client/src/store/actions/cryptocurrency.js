import * as actionTypes from './actionTypes';

export const setCryptocurrencies = (cryptocurrencies) => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SUCCESS,
        cryptocurrencies
    };
};

export const cryptocurrenciesInit = () => {
    return dispatch => {
        const data = [];
        dispatch(setCryptocurrencies(data));
    }
};