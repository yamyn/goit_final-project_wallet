import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

import LoginForm from '../components/LoginForm/LoginFormContainer';
import LoginPromo from '../components/LoginForm/LoginPromo';

import useTabletStyles from '../components/LoginForm/styles/LoginFormTabletStyles';
import useDesktopStyles from '../components/LoginForm/styles/LoginFormDesktopStyles';

const LoginPage = () => {
    const theme = useTheme();
    const upMobile = useMediaQuery(theme.breakpoints.up('mobile'));
    const upTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    const { classesTablet } = useTabletStyles();
    const { classesDesktop } = useDesktopStyles();

    if (!upMobile && !upTablet) {
        return <LoginForm />;
    }

    if (!upTablet) {
        return (
            <div className={classesTablet.containerTablet}>
                <div className={classesTablet.containerFormTabletStyle}>
                    <LoginForm />
                </div>
                <p className={classesTablet.finAppParagr}>Finance App</p>
            </div>
        );
    }

    return (
        <div className={classesDesktop.containerDesktop}>
            <LoginPromo />

            <div className={classesDesktop.containerFormDesktopStyle}>
                <LoginForm />
            </div>
        </div>
    );
};

export default withAuthRedirect(LoginPage);
