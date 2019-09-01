import {combineReducers} from 'redux';

import cryptocurrencyReducer from '../../store/reducers/cryptocurrency';
import calculatorReducer from '../../store/reducers/calculator';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    cryptocurrency: cryptocurrencyReducer,
});

export default rootReducer;