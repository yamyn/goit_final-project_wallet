import { fetch, setAuthToken } from '../../helpers/apiService';
import { getToken } from '../session/sessionSelectors';

import {
    loadTransactionsStart,
    loadTransactionsSuccess,
    loadTransactionsError,
    addTransactionStart,
    addTransactionSuccess,
    addTransactionError,
} from './transactionsActions';
const prefix = '/finance';

export const fetchTransactions = () => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) {
        return;
    }

    dispatch(loadTransactionsStart());

    fetch
        .get(prefix, setAuthToken(token))
        .then(response => dispatch(loadTransactionsSuccess(response.data)))
        .catch(error => dispatch(loadTransactionsError(error)));
};

export const addTransaction = contact => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) {
        return;
    }

    dispatch(addTransactionStart());

    fetch
        .post(prefix, contact, setAuthToken(token))
        .then(response => dispatch(addTransactionSuccess(response.data)))
        .catch(error => dispatch(addTransactionError(error)));
};
