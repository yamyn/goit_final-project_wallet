import moment from 'moment';

import { getExchange } from '../../helpers/apiService';
import { getTime } from './exchangeSelectors';

import {
    loadExchangeStart,
    loadExchangeSuccess,
    loadExchangeError,
} from './exchangeActions';

export default () => (dispatch, getState) => {
    const stateTime = getTime(getState());
    const condTime = moment().subtract(5, 'm');
    if (stateTime.isSameOrAfter(condTime)) return;

    dispatch(loadExchangeStart());

    getExchange()
        .then(response => {
            const currencies = {};
            response.data.forEach(({ ccy, buy, sale }) => {
                currencies[ccy] = { buy, sale };
            });

            dispatch(loadExchangeSuccess(currencies));
        })
        .catch(error => dispatch(loadExchangeError(error)));
};
