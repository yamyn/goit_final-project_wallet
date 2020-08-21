import React, { Link } from 'react';
import { useFormik } from 'formik';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';

import s from './LoginForm.module.css';

const LoginForm = () => {
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
        <form className={s.loginForm} onSubmit={formik.handleSubmit}>
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
            <a href="/register">Регистрация</a>
        </form>
    );
};

export default LoginForm;
