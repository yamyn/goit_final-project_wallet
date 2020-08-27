import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import RegisterForm from '../components/RegisterForm/RegisterFormContainer';
import LoginPromo from '../components/LoginForm/LoginPromo';

import useTabletStyles from '../components/RegisterForm/styles/RegisterFormTabletStyles';
import useDesktopStyles from '../components/RegisterForm/styles/RegisterFormDesktopStyles';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

const SignupPage = () => {
    const theme = useTheme();
    const upMobile = useMediaQuery(theme.breakpoints.up('mobile'));
    const upTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    const { classesTablet } = useTabletStyles();
    const { classesDesktop } = useDesktopStyles();

    if (!upMobile && !upTablet) {
        return <RegisterForm />;
    }

    if (!upTablet) {
        return (
            <div className={classesTablet.containerTablet}>
                <div className={classesTablet.containerFormTabletStyle}>
                    <RegisterForm />
                </div>
                {/* <p className={classesTablet.finAppParagr}>Finance App</p> */}
            </div>
        );
    }

    return (
        <div className={classesDesktop.containerDesktop}>
            <LoginPromo />

            <div className={classesDesktop.containerFormDesktopStyle}>
                <RegisterForm />
            </div>
        </div>
    );
};
// import RegisterForm from '../components/RegisterForm/RegisterForm';
// import logo from '../img/icons/logo.svg';

// const containerStyle = {
//     'margin-top': '100px',
//     display: 'flex',
//     width: '100%',
//     'flex-direction': 'column',
//     'justify-content': 'space-between',
//     'align-items': 'center',
//     'background-color': '#fff',
// };

// const headerStyle = {
//     color: 'rgb(44, 44, 44)',
//     'font-size': '24px',
//     'line-height': '1.25',
// };

// const SignupPage = () => (
//     <div style={containerStyle}>
//         <img src={logo} alt="WalletLogo" />
//         <h2 style={headerStyle}>Wallet</h2>
//         <RegisterForm />
//     </div>
// );
export default withAuthRedirect(SignupPage);
