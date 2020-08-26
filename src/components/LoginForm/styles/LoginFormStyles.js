import { makeStyles } from '@material-ui/core/styles';

export default () => {
    return {
        classes: makeStyles(() => ({
            loginFormContainer: {
                paddingBottom: 20,
                display: 'flex',
                width: '100%',
                height: 'auto',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            },
            headingMobileTabletStyles: {
                display: 'flex',
                flexDirection: 'raw',
                justifyContent: 'center',
                alignItems: 'center',
            },
            headerMobileStyle: {
                color: 'rgb(44, 44, 44)',
                fontSize: '24px',
                lineHeight: '1.25',
                marginLeft: '8px',
            },
            loginForm: {
                width: 250,
                height: 'auto',
                marginBottom: 20,
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
                alignItems: `center`,
                fontFamily: `Arial, Helvetica, sansSerif`,
            },
        }))(),
    };
};
