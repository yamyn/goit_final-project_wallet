import { createReducer, combineReducers } from '@reduxjs/toolkit';
import moment from 'moment';
import {
    loadTransactionsSuccess,
    addTransactionSuccess,
    changeStatisticDate,
} from './waletActions';

import { logout } from '../session/sessionAction';

const statDate = createReducer(moment().format('yyyy-MM'), {
    [changeStatisticDate]: (state, action) => action.payload.time,
    [logout]: () => moment().format('yyyy-MM'),
});

const balance = createReducer(0, {
    [loadTransactionsSuccess]: (state, action) => action.payload.balance,
    [addTransactionSuccess]: (state, action) => action.payload.balance,
    [logout]: () => 0,
});

const transactions = createReducer([], {
    [loadTransactionsSuccess]: (state, action) => action.payload.transactions,
    [addTransactionSuccess]: (state, action) => [
        ...action.payload.transactions,
    ],
    [logout]: () => [],
});

const transUpTime = createReducer(0, {
    [loadTransactionsSuccess]: () => moment().valueOf(),
    [addTransactionSuccess]: () => moment().valueOf(),
    [logout]: () => 0,
});

const waletReducer = combineReducers({
    balance,
    transactions,
    statDate,
    transUpTime,
});

export default waletReducer;
