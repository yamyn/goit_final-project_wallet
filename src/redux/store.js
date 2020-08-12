import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import waletReducer from './walet/waletReducer';
import alertReducer from './alert/alertReducer';
import sessionReducer from './session/sessionReducer';
import exchangeReducer from './exchange/exchangeReducer';

import validation from './middleware/validation';
import errorHandler from './middleware/errorHandler';

const persistConfig = {
    key: 'session',
    storage,
};

const persistedReducer = persistReducer(persistConfig, sessionReducer);

export const store = configureStore({
    reducer: {
        walet: waletReducer,
        alert: alertReducer,
        session: persistedReducer,
        exchange: exchangeReducer,
    },
    middleware: [...getDefaultMiddleware(), errorHandler, validation],
});

export const persistor = persistStore(store);
