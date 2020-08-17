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
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './Header.module.css';
import useStyles from './HeaderStyles';

export default function Header({ user, authenticated, onLogOut }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.headerWrap}>
                    <IconButton
                        edge="start"
                        fontSize="large"
                        className={(classes.menuButton, classes.buttonWallet)}
                        color="primary"
                        aria-label="WalletIcon"
                    >
                        <AccountBalanceWalletIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Wallet
                    </Typography>
                    <Typography
                        email={user.email}
                        isAuth={authenticated}
                        variant="h6"
                        className={(classes.menuButton, styles.name)}
                    >
                        {user.name}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                        edge="start"
                        className={classes.icon}
                        color="grey"
                        aria-label="ExitToAppIconn"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                    <Button
                        color="grey"
                        className={classes.LogOut}
                        onClick={onLogOut}
                        alt=" Logout"
                    ></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.defaultProps = {
    user: PropTypes.shape({
        name: 'name',
        email: 'email',
    }),
};

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    authenticated: PropTypes.bool.isRequired,
    onLogOut: PropTypes.func.isRequired,
};
