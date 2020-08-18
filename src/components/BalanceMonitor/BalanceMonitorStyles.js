import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));

    return {
        isNotMobile,
        classes: makeStyles(() => ({
            wrap: {
                height: 100,
                width: '95%',
                margin: '0 auto 20px',
                backgroundColor: theme.palette.background.navPrimary,
                borderRadius: 8,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
            monitor: {
                margin: 0,
                color: theme.palette.primary.iconActive,
            },
        }))(),
    };
};
