import { createSelector } from 'reselect';
import moment from 'moment';

export const getTransactions = state => state.walet.transactions;
export const getTransCount = state => state.walet.transactions.length;
export const getBalance = state => state.walet.balance;
export const getStatDate = state => state.walet.statDate;
export const getTransUpTime = state => state.walet.transUpTime;
export const getStatistic = createSelector(
    [getTransactions, getStatDate],
    (transactions, statDate) => {
        const statistic = {};
        let сosts = 0;
        let profit = 0;
        if (transactions.length !== 0) {
            transactions.forEach(trans => {
                const date = moment(trans.date, 'DD.MM.YY').format('yyyy-MM');
                if (date !== statDate) return;

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
        }

        return {
            statistic,
            сosts,
            profit,
        };
    },
);
