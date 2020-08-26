/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Route } from 'react-router-dom';

import BalanceMonitor from '../BalanceMonitor/BalanceMonitorContainer';
import useStyles from './NavBarStyles';
import Menu from '../Menu/Menu';
import CurrencyExchange from '../CurrencyExchange/CurrencyExchangeContainer';

export default function NavBar() {
    const { classes, isNotMobile, isNotTablet } = useStyles();
    const exPath = isNotTablet ? '/' : '/home';
    const path = isNotMobile ? exPath : '/exchange';

    return (
        <div className={classes.wrap}>
            <Toolbar className={classes.root}>
                <Menu />
            </Toolbar>
            {!isNotMobile && <Route path="/home" component={BalanceMonitor} />}
            {isNotTablet && <BalanceMonitor />}

            <Route path={path} component={CurrencyExchange} />
        </div>
    );
}
