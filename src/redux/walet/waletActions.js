import { createAction } from '@reduxjs/toolkit';

export const loadTransactionsStart = createAction('LOAD_TRANSACTIONS/START');

export const loadTransactionsSuccess = createAction(
    'LOAD_TRANSACTIONS/SUCCESS',
    wallet => ({
        payload: wallet,
    }),
);

export const loadTransactionsError = createAction(
    'LOAD_TRANSACTIONS/ERROR',
    error => ({
        payload: { message: error.message },
        meta: { error: true },
    }),
);

export const addTransactionValid = createAction(
    'ADD_TRANSACTION_VALID/START',
    transaction => ({
        payload: { transaction },
        meta: { addTransaction: true },
    }),
);

export const addTransactionStart = createAction('ADD_TRANSACTION/START');

export const addTransactionSuccess = createAction(
    'ADD_TRANSACTION/SUCCESS',
    wallet => ({
        payload: wallet,
    }),
);

export const addTransactionError = createAction(
    'ADD_TRANSACTION/ERROR',
    error => ({
        payload: { message: error.message },
        meta: { error: true },
    }),
);

export const changeStatisticDate = createAction('CHANGE_STAT_TIME', time => ({
    payload: { time },
}));
