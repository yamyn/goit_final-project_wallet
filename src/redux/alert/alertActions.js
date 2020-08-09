import { createAction } from '@reduxjs/toolkit';

export const toShowAlert = createAction('SHOWALERT', message => ({
    payload: { message },
}));
export const toHideAlert = createAction('HIDEALERT');
