import React from 'react';
import { useFormik } from 'formik';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';
import useStyles from '../LoginForm/styles/LoginFormStyles';
import s from './RegisterForm.module.css';
import logo from '../../img/icons/logo.svg';

const RegisterForm = ({ onSignUp }) => {
    const { classes } = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmedPassword: '',
            name: '',
        },
        onSubmit: values => {
            onSignUp(values)
        },
    });

    return (
        <>
            <div className={classes.headingMobileTabletStyles}>
                <img src={logo} alt="WalletLogo" />
                <h2 className={classes.headerMobileStyle}>Wallet</h2>
            </div>
            <form className={s.registerForm} onSubmit={formik.handleSubmit}>
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
                <Input
                    withIcon
                    id="confirmedPassword"
                    name="confirmedPassword"
                    type="password"
                    placeholder="Подтвердите пароль"
                    onChange={formik.handleChange}
                    value={formik.values.confirmedPassword}
                />
                <Input
                    withIcon
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Ваше имя"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <CustomButton title="Регистрация" type="submit" />
                <a href="/login">Войти</a>
            </form>
        </>
    );
};

export default RegisterForm;
