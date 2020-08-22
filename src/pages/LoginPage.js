import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import LoginForm from '../components/LoginForm/LoginForm';
import LoginPromo from '../components/LoginForm/LoginPromo';
import logo from '../img/icons/logo.svg';
import Background from '../img/LoginRegister/LoginBG.jpg';

const containerDesktop = {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    height: '100vh',
};

const containerTablet = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    'justify-content': 'center',
    'align-items': 'center',
    height: '100vh',
};

const headerMobileStyle = {
    color: 'rgb(44, 44, 44)',
    'font-size': '24px',
    'line-height': '1.25',
    'margin-left': '8px',
};

const containerFormDesktopStyle = {
    margin: 'auto',
    width: '550px',
    // height: '390px',
    'box-shadow': '10px 17.321px 40px 0px rgba(112, 124, 130, 0.3)',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'border-radius': '4px',
};

const containerFormTabletStyle = {
    margin: '0px auto 20px auto',
    width: '550px',
    // height: '390px',
    'box-shadow': '10px 17.321px 40px 0px rgba(112, 124, 130, 0.3)',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'border-radius': '4px',
    'background-color': '#fff',
};

const headingDesktopStyles = {
    display: 'flex',
    'flex-direction': 'raw',
    'justify-content': 'center',
    'align-items': 'center',
};

const finAppParagr = {
    color: '#fff',
};

const LoginPage = () => {
    const theme = useTheme();
    const upMobile = useMediaQuery(theme.breakpoints.up('mobile'));
    const upTablet = useMediaQuery(theme.breakpoints.up('tablet'));

    if (!upMobile && !upTablet) {
        return <LoginForm />;
    }

    if (!upTablet) {
        return (
            <div style={containerTablet}>
                <div style={containerFormTabletStyle}>
                    <LoginForm />
                </div>
                <p style={finAppParagr}>Finance App</p>
            </div>
        );
    }

    return (
        <div style={containerDesktop}>
            <LoginPromo />

            <div style={containerFormDesktopStyle}>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
