import React from 'react';
import s from './LoginRegisterContainer.module.css';

const LoginRegisterContainer = () => {
    return (
        <div className={s.LoginRegisterContainer}>
            <div className={s.Prewiv}>
                <img src="../../img/LoginRegister/LoginBG.jpg" alt="" />
                <span>Finance App</span>
            </div>
            <div className={s.FormContainer}>
                <h2 className={s.WalletHeading}>Wallet</h2>
            </div>
        </div>
    );
};

export default LoginRegisterContainer;
