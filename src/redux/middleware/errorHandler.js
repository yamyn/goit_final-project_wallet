import * as alertActions from '../alert/alertActions';

const errorHandler = store => next => action => {
    if (action.meta && action.meta.error) {
        store.dispatch(alertActions.toShowAlert(action.payload.message));

        setTimeout(() => {
            store.dispatch(alertActions.toHideAlert());
        }, 3000);
        return;
    }

    next(action);
};

export default errorHandler;
