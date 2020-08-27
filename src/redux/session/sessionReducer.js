import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { loginSuccess, signupSuccess, logout } from './sessionAction';

const mockSession = {
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzJmNjg1M2I2MmU0MGQwZjdiMGUxYyIsImVtYWlsIjoicmlja0BtYWlsLmNvbSIsIm5hbWUiOiJ5YV9teW4iLCJjcmVhdGVkQXQiOiIyMDIwLTA4LTExVDE5OjUwOjI5LjM3OVoiLCJpYXQiOjE1OTcxNzU0Mjl9.tcfbPbAha3JmEdJf0Qp8_-CEwl5SNm2wX7eKUoOrlco',
    user: {
        id: '5f32f6853b62e40d0f7b0e1c',
        email: 'rick@mail.com',
        name: 'ya_myn',
    },
    authenticated: true,
};
const status = true;
const toogleMock = status => {
    return comp => {
        return status ? mockSession[comp] : null;
    };
};

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
