import React from 'react';

import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../img/icons/logo.svg';

const containerStyle = {
    'margin-top': '100px',
    display: 'flex',
    width: '100%',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
    'background-color': '#fff',
};

const headerStyle = {
    color: 'rgb(44, 44, 44)',
    'font-size': '24px',
    'line-height': '1.25',
};

const LoginPage = () => (
    <div style={containerStyle}>
        <img src={logo} alt="WalletLogo" />
        <h2 style={headerStyle}>Wallet</h2>
        <LoginForm />
    </div>
);

export default LoginPage;
