import React from 'react';
import loginPreview from '../../img/LoginRegister/LoginPhoneExample.png';

import useStyles from './styles/LoginPromoStyles';

const LoginPromo = () => {
        const { classes } = useStyles();

    return (
        <div className={classes.promoStyle}>
            <img src={loginPreview} alt="phone" width="280" />
            <p className={classes.finAppParagr}>Finance App</p>
        </div>
    );
};

export default LoginPromo;
