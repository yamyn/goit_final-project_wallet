import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { loadTransactionsSuccess, addTransactionSuccess } from './waletActions';

import { logout } from '../session/sessionAction';

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
});

export default waletReducer;
