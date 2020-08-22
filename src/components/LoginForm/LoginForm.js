import React from 'react';
import { useFormik } from 'formik';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';

import logo from '../../img/icons/logo.svg';
import useStyles from './LoginFormStyles';

const LoginForm = () => {
    const { classes } = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.loginFormContainer}>
            <div className={classes.headingMobileTabletStyles}>
                <img src={logo} alt="WalletLogo" />
                <h2 className={classes.headerMobileStyle}>Wallet</h2>
            </div>
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
                <Input
                    withIcon
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Input
                    withIcon
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <CustomButton title="Войти" type="submit" />
            </form>
            <a href="/register">Регистрация</a>
        </div>
    );
};

export default LoginForm;
