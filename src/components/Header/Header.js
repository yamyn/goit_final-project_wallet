/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './Header.module.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        paddingRight: 5,
    },
    title: {
        flexGrow: 1,
        fontSize: 25,
        color: theme.palette.primary.dark,
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: '../../fonts/bauhouse/BauhausC_Medium_Bold.ttf',
    },
    buttonWallet: {
        color: theme.palette.primary.dark,
    },
    icon: {
        paddingLeft: 10,
    },
    LogOut: {
        padding: 0,
    },
}));

export default function Header({ user, authenticated, onLogOut }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={styles.headerContainer}>
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
                    {user.map(({ name, email }) => (
                        <Typography
                            email={email}
                            isAuth={authenticated}
                            variant="h6"
                            className={(classes.menuButton, styles.name)}
                        >
                            {name}
                        </Typography>
                    ))}
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
                    >
                        Logout
                    </Button>
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
