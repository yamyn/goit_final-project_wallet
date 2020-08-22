import React from 'react';
import loginPreview from '../../img/LoginRegister/LoginPhoneExample.png';
import Background from '../../img/LoginRegister/LoginBG.jpg';

const promoStyle = {
    width: '35vw',
    height: '100%',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
    'align-items': 'center',
};

const finAppParagr = {
    color: '#fff',
};

const LoginPromo = () => {
    return (
        <div style={promoStyle}>
            <img src={loginPreview} alt="phone" width="280" />
            <p style={finAppParagr}>Finance App</p>
        </div>
    );
};

export default LoginPromo;
