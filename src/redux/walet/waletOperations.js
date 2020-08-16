import _ from 'lodash';
import { fetch, setAuthToken } from '../../helpers/apiService';
import { getReqUserData } from '../session/sessionSelectors';

import {
    loadTransactionsStart,
    loadTransactionsSuccess,
    loadTransactionsError,
    addTransactionStart,
    addTransactionSuccess,
    addTransactionError,
} from './waletActions';

const addPrefix = userId => `/finance/?userId=${userId}`;

export const fetchTransactions = () => (dispatch, getState) => {
    const { token, userId } = getReqUserData(getState());
    if (!token || !userId) {
        return;
    }

    dispatch(loadTransactionsStart());

    fetch
        .get(addPrefix(userId), setAuthToken(token))
        .then(response => {
            const transactions = _.get(response, 'data.finance.data');
            const balance = _.get(response, 'data.finance.totalBalance');

            dispatch(loadTransactionsSuccess({ transactions, balance }));
        })
        .catch(error => dispatch(loadTransactionsError(error)));
};

export const addTransaction = transaction => (dispatch, getState) => {
    const { token, userId } = getReqUserData(getState());
    if (!token || !userId) {
        return;
    }

    dispatch(addTransactionStart());

    fetch
        .post(addPrefix(userId), transaction, setAuthToken(token))
        .then(response => dispatch(addTransactionSuccess(response.data)))
        .catch(error => dispatch(addTransactionError(error)));
};
