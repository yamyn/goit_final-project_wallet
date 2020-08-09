import { createAction } from '@reduxjs/toolkit';

export const loginStart = createAction('LOGIN/START');

export const loginSuccess = createAction('LOGIN/SUCCESS', response => ({
    payload: { response },
}));

export const loginError = createAction('LOGIN/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const signupStart = createAction('SIGNUP/START');

export const signupSuccess = createAction('SIGNUP/SUCCESS', response => ({
    payload: { response },
}));

export const signupError = createAction('SIGNUP/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const logout = createAction('LOGOUT');
