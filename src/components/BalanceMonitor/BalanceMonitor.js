import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './BalanceMonitorStyles';

export default function BalanceMonitor({ balance }) {
    const { classes } = useStyles();

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
