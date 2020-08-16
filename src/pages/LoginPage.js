import React from 'react';
import { Link } from 'react-router-dom';

import LoginRegisterContainer from '../components/LoginRegisterContainer/LoginRegisterContainer';
import Input from '../components/Inputs/Input/Input';
import CustomButton from '../components/Inputs/Button/CutomButton';

const LoginPage = () => (
    <>
        <LoginRegisterContainer />

        <Input
            withIcon
            name="password"
            placeholder="Password"
            type="password"
            errorText="Some error"
        />
        <Input withIcon name="email" placeholder="E-mail" type="email" />
        <Input withIcon name="name" placeholder="Name" />

        <CustomButton title="Войти" type="secondary" />
        <Link to="/register">Регистрация</Link>
    </>
);

export default LoginPage;
