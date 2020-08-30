import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const isNotTablet = useMediaQuery(theme.breakpoints.up('desktop'));

    return {
        isNotMobile,
        isNotTablet,
        classes: makeStyles(() => ({
            root: { padding: '0 15px' },
            form: {
                height: '100%',
            },
            link: {
                display: 'block',
                color: theme.palette.primary.iconActive,
                marginRight: 20,
            },
            linkWrap: {
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                padding: '0 15px',
                widh: '100%',
                height: 40,
                textDecoration: 'none',
                color: theme.palette.primary.iconActive,
                backgroundColor: theme.palette.background.navPrimary,
            },
            linkText: {
                margin: '0',
            },
        }))(),
    };
};
