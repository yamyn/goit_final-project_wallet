import { createReducer } from '@reduxjs/toolkit';
import { toHideAlert, toShowAlert } from './alertActions';

const alertReducer = createReducer('', {
    [toShowAlert]: (state, action) => action.payload.message,
    [toHideAlert]: () => '',
});

export default alertReducer;
