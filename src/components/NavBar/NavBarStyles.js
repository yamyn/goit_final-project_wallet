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
            root: {
                minHeight: 40,
                paddingRight: 8,
                paddingLeft: 8,
                backgroundColor: theme.palette.background.navPrimary,
                marginBottom: 20,
                [theme.breakpoints.up('tablet')]: {
                    minHeight: 80,
                    backgroundColor: theme.palette.background.primary,
                },
            },
            wrap: {
                [theme.breakpoints.only('tablet')]: {
                    position: 'relative',
                },
            },
        }))(),
    };
};
