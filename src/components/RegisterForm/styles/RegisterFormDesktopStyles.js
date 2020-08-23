import { makeStyles } from '@material-ui/core/styles';

export default () => {
    return {
        classesDesktop: makeStyles(() => ({
            containerDesktop: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            },
            containerFormDesktopStyle: {
                margin: 'auto',
                width: '550px',
                height: '500px',
                boxShadow: '0px 0px 35px 8px rgba(112, 124, 130, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
            },
            headingDesktopStyles: {
                display: 'flex',
                flexDirection: 'raw',
                justifyContent: 'center',
                alignItems: 'center',
            },
            finAppParagr: {
                color: '#fff',
            },
        }))(),
    };
};
