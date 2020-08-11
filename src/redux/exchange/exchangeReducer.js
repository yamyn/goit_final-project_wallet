import moment from 'moment';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { loadExchangeSuccess } from './exchangeActions';

const currencies = createReducer(null, {
    [loadExchangeSuccess]: (state, action) => action.payload.currencies,
});
const time = createReducer(moment().subtract(1, 'd'), {
    [loadExchangeSuccess]: () => moment(),
});
const exchangeReducer = combineReducers({
    currencies,
    time,
});

export default exchangeReducer;
