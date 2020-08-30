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
});

const balance = createReducer(0, {
    [loadTransactionsSuccess]: (state, action) => action.payload.balance,
    [addTransactionSuccess]: (state, action) => action.payload.balance,
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
    statDate,
});

export default waletReducer;
