import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import waletReducer from './walet/waletReducer';
import alertReducer from './alert/alertReducer';
import sessionReducer from './session/sessionReducer';
import exchangeReducer from './exchange/exchangeReducer';
import appReducer from './app/appReducer';

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
        app: appReducer,
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        errorHandler,
        validation,
    ],
});

export const persistor = persistStore(store);
