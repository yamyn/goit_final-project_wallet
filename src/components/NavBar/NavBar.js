/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { ReactSVG } from 'react-svg';
import useStyles from './NavBarStyles';
import Menu from '../Menu/Menu';

import logo from '../../img/icons/logo.svg';
import logout from '../../img/icons/logout-2/logout.svg';

export default function NavBar() {
    const { classes, isNotMobile } = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.headerWrap}>
                    <Menu />
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.defaultProps = {
    user: PropTypes.shape({
        name: 'name',
        email: 'email',
    }),
};

NavBar.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    authenticated: PropTypes.bool.isRequired,
    onLogOut: PropTypes.func.isRequired,
};
