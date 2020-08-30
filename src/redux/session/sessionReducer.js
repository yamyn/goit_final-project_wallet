import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { loginSuccess, signupSuccess, logout } from './sessionAction';

const user = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.user,
    [signupSuccess]: (state, action) => action.payload.response.user,
    [logout]: () => null,
});
const authenticated = createReducer(false, {
    [loginSuccess]: () => true,
    [signupSuccess]: () => true,
    [logout]: () => false,
});
const token = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.token,
    [signupSuccess]: (state, action) => action.payload.response.token,
    [logout]: () => null,
});

const sessionReducer = combineReducers({
    user,
    authenticated,
    token,
});

export default sessionReducer;
