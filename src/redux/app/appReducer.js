import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { showModal, hideModal } from './appAction';

const modalReducer = createReducer(false, {
    [showModal]: () => true,
    [hideModal]: () => false,
});

const appReducer = combineReducers({
    isModal: modalReducer,
});

export default appReducer;
