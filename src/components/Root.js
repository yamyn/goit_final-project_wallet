import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import themes from '../themes';

import App from './App/AppContainer';
import { store, persistor } from '../redux/store';

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <ThemeProvider theme={themes.mobile}>
                    <Route component={App} />
                </ThemeProvider>
            </Router>
        </PersistGate>
    </Provider>
);

export default Root;
