import { createReducer } from '@reduxjs/toolkit';
import {
    loadTransactionsSuccess,
    addTransactionSuccess,
} from './transactionsActions';

import { logout } from '../session/sessionAction';

const transactionsReducer = createReducer([], {
    [loadTransactionsSuccess]: (state, action) => action.payload.transactions,
    [addTransactionSuccess]: (state, action) => [
        ...state,
        action.payload.transaction,
    ],
    [logout]: () => [],
});

export default transactionsReducer;
