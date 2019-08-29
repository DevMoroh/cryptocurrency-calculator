import * as actionTypes from './actionTypes';

export const setCryptocurrencies = (cryptocurrencies) => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SUCCESS,
        cryptocurrencies
    };
};

export const cryptocurrenciesInit = () => {
    return  {
        type: actionTypes.CRYPTOCURRENCY_INIT
    }
};

export const changeCurrency = (currencyName) => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SELECT,
        currencyName
    };
};

export const initSuccess = () => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SUCCESS
    };
};

export const initStart = () => {
    return {
        type: actionTypes.CRYPTOCURRENCY_START
    };
};

export const initFail = () => {
    return {
        type: actionTypes.CRYPTOCURRENCY_FAIL
    };
};