import _ from 'lodash';
import moment from 'moment';

import { fetch, setAuthToken } from '../../helpers/apiService';
import { getReqUserData } from '../session/sessionSelectors';
import { getBalance, getTransactions } from './waletSelectors';
import getCategory from '../../helpers/categoriesChooser';

import {
    loadTransactionsStart,
    loadTransactionsSuccess,
    loadTransactionsError,
    addTransactionStart,
    addTransactionSuccess,
    addTransactionError,
    getStatisticError,
    getStatistic
} from './waletActions';

import { hideModal } from '../app/appAction';

const categories = getCategory('-');
const addPrefix = userId => `/finance/?userId=${userId}`;
const parseTransDetail = ({ amount, type, date: strDate }, balance) => {
    const balanceAfter = type === '+' ? balance + amount : balance - amount;
    const typeBalanceAfter = balanceAfter >= 0 ? '+' : '-';
    const date = strDate ? moment(strDate).valueOf() : moment().valueOf();

    return { balanceAfter, date, typeBalanceAfter };
};

export const fetchTransactions = () => (dispatch, getState) => {
    const { token, userId } = getReqUserData(getState());
    if (!token || !userId) {
        return;
    }

    dispatch(loadTransactionsStart());

    fetch
        .get(addPrefix(userId), setAuthToken(token))
        .then(response => {
            const transactions = _.get(response, 'data.finance.data').map(
                transaction => {
                    const date = moment(transaction.date).format(`DD.mm.yy`);
                    return { ...transaction, date };
                },
            );

            const balance = _.get(response, 'data.finance.totalBalance');

            dispatch(loadTransactionsSuccess({ transactions, balance }));
        })
        .catch(error => dispatch(loadTransactionsError(error)));
};

export const addTransaction = transaction => (dispatch, getState) => {
    const state = getState();
    const { token, userId } = getReqUserData(state);
    const balance = getBalance(state);
    if (!token || !userId) {
        return;
    }
    const transDetail = parseTransDetail(transaction, balance);
    const transformTransaction = { ...transaction, ...transDetail };

    dispatch(addTransactionStart());

    fetch
        .post(addPrefix(userId), transformTransaction, setAuthToken(token))
        .then(response => {
            const transactions = _.get(response, 'data.finance.data').map(
                formedTransaction => {
                    const date = moment(formedTransaction.date).format(
                        `DD.mm.yy`,
                    );
                    return { ...formedTransaction, date };
                },
            );

            const newBalance = _.get(response, 'data.finance.totalBalance');
            dispatch(
                addTransactionSuccess({ transactions, balance: newBalance }),
            );
            return dispatch(hideModal());
        })
        .catch(error => {
            return dispatch(addTransactionError(error));
        });
};

export const getTransStatistic = time => (dispatch, getState) => {
    try {
        const transactions = getTransactions(getState());
        if (transactions.length === 0) return;
        const statistic = {};
        let сosts = 0;
        let profit = 0;

        transactions.forEach(trans => {
            if (trans.type === '+') {
                profit += trans.amount;

                return;
            }
            if (!statistic[trans.category]) {
                statistic[trans.category] = 0;
            }
            сosts += trans.amount;
            statistic[trans.category] += trans.amount;
        });

        dispatch(getStatistic({ statistic, сosts, profit }));
    } catch (error) {
        dispatch(getStatisticError(error));
    }
};
