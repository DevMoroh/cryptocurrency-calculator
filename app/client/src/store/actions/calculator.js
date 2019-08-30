import * as actionTypes from './actionTypes';

export const setCalculatorResult = (result) => {
    return {
        type: actionTypes.CALCULATOR_SET_RESULT,
        result
    };
};

export const calculate = (exchange, volume) => {
    return  {
        type: actionTypes.CALCULATOR_CALCULATE,
        exchange,
        volume
    }
};