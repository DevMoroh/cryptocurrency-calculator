import * as actionTypes from './actionTypes';

export const setCalculatorResult = (result) => {
    return {
        type: actionTypes.CALCULATOR_SET_RESULT,
        result
    };
};

export const setVolume = (volume) => {
    return {
        type: actionTypes.CALCULATOR_SET_VOLUME,
        volume
    };
};

export const calculateVolume = (volume) => {
    return {
        type: actionTypes.CALCULATOR_CALC_VOLUME,
        volume
    };
};

export const setExchange = (exchange) => {
    return {
        type: actionTypes.CALCULATOR_SET_EXCHANGE,
        exchange: exchange
    };
};

export const calculate = (sale, volume) => {
    return  {
        type: actionTypes.CALCULATOR_CALCULATE,
        sale,
        volume
    }
};