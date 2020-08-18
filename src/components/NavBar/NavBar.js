/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import BalanceMonitor from '../BalanceMonitor/BalanceMonitorContainer';
import useStyles from './NavBarStyles';
import Menu from '../Menu/Menu';

export default function NavBar() {
    const { classes, isNotMobile } = useStyles();

    return (
        <>
            <Toolbar className={classes.root}>
                <Menu />
            </Toolbar>
            <BalanceMonitor />
        </>
    );
}
