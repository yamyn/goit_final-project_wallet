import * as alertActions from '../alert/alertActions';
import { addTransaction } from '../transactions/transactionsOperations';
import Validation, { META } from '../../helpers/Validation';
import { getTransactions } from '../transactions/transactionsSelectors';

const validation = store => next => action => {
    if (action.meta && action.meta.addTransaction) {
        const state = store.getState();
        const transactions = getTransactions(state);
        const { transaction } = action.payload;
        const validateRes = Validation.validate(transactions, transaction);
        if (validateRes.meta === META.success) {
            store.dispatch(addTransaction(validateRes.transaction));
        }
        const alertMessage = validateRes.message ? validateRes.message : '';

        store.dispatch(alertActions.toShowAlert(alertMessage));

        setTimeout(() => {
            store.dispatch(alertActions.toHideAlert());
        }, 3000);
        return;
    }

    next(action);
};

export default validation;
