/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './BalanceMonitorStyles';

export default function BalanceMonitor({ balance }) {
    const { classes, isNotMobile } = useStyles();
    console.log(balance);
    return (
        <div className={classes.wrap}>
            <p className={classes.monitor}>Баланс</p>
            <p className={classes.monitor}>{balance} грн</p>
        </div>
    );
}

BalanceMonitor.defaultProps = {
    balance: 0,
};

BalanceMonitor.propTypes = {
    balance: PropTypes.number,
};
