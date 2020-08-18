import React from 'react';
import s from './LoginRegisterContainer.module.css';

const LoginRegisterContainer = () => {
    return (
        <div className={s.LoginRegisterContainer}>
            <div className={s.Prewiv}>
                <img src="../../img/LoginRegister/LoginBG.jpg" alt="" />
                <span>Finance App</span>
            </div>
        </div>
    );
};

export default LoginRegisterContainer;
