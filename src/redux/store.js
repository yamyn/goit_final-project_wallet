import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import transactionsReducer from './transactions/transactionsReducer';
import alertReducer from './alert/alertReducer';
import sessionReducer from './session/sessionReducer';

import validation from './middleware/validation';
import errorHandler from './middleware/errorHandler';

const persistConfig = {
    key: 'session',
    storage,
};

const persistedReducer = persistReducer(persistConfig, sessionReducer);

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        alert: alertReducer,
        session: persistedReducer,
    },
    middleware: [...getDefaultMiddleware(), errorHandler, validation],
});

export const persistor = persistStore(store);
