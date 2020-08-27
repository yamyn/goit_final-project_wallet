import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    loadTransactionsSuccess,
    addTransactionSuccess,
    getStatistic,
} from './waletActions';

import { logout } from '../session/sessionAction';

const balance = createReducer(0, {
    [loadTransactionsSuccess]: (state, action) => action.payload.balance,
    [addTransactionSuccess]: (state, action) => action.payload.balance,
});

const statistic = createReducer(null, {
    [getStatistic]: (state, action) => action.payload.statistic,
});

const costs = createReducer(0, {
    [getStatistic]: (state, action) => action.payload.costs,
});
const profit = createReducer(0, {
    [getStatistic]: (state, action) => action.payload.profit,
});

const transactions = createReducer([], {
    [loadTransactionsSuccess]: (state, action) => action.payload.transactions,
    [addTransactionSuccess]: (state, action) => [
        ...action.payload.transactions,
    ],
    [logout]: () => [],
});

const waletReducer = combineReducers({
    balance,
    transactions,
    statistic,
    costs,
    profit,
});

export default waletReducer;
