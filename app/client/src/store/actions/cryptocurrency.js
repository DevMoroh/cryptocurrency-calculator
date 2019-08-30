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

export const changeCryptocurrency = (cryptocurrency) => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SELECT,
        cryptocurrency: cryptocurrency,
    };
};

export const setCryptocurrency = (cryptocurrency) => {
    return {
        type: actionTypes.CRYPTOCURRENCY_SET,
        cryptocurrency: cryptocurrency,
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