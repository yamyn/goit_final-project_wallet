import { fetch, setAuthToken } from '../../helpers/apiService';
import { getToken } from './sessionSelectors';

import {
    loginStart,
    loginSuccess,
    loginError,
    signupStart,
    signupSuccess,
    signupError,
    logout,
} from './sessionAction';

export const login = credentials => dispatch => {
    dispatch(loginStart());

    fetch
        .post('/login', credentials)
        .then(response => dispatch(loginSuccess(response.data)))
        .catch(error => dispatch(loginError(error)));
};

export const signup = credentials => dispatch => {
    dispatch(signupStart());

    fetch
        .post('/register', credentials)
        .then(response => dispatch(signupSuccess(response.data)))
        .catch(error => dispatch(signupError(error)));
};

export const logOut = () => (dispatch, getState) => {
    dispatch(logout());
    const token = getToken(getState());
    if (!token) {
        return;
    }

    fetch.post('/logout', setAuthToken(token));
};
