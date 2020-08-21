import React, { Link } from 'react';
import { useFormik } from 'formik';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';
import s from './RegisterForm.module.css';

const regFormStyles = {
    width: '300px',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
    'font-family': 'Arial, Helvetica, sans-serif',
};

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmedPassword: '',
            name: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
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
    );
};

export default RegisterForm;
