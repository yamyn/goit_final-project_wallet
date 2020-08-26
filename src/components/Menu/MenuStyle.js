import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));

    return {
        isNotMobile,
        isDesktop,
        classes: makeStyles(() => ({
            list: {
                margin: '0 auto',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                [theme.breakpoints.up('tablet')]: {
                    minWidth: '70%',
                },
                [theme.breakpoints.up('desktop')]: {
                    display: 'block',
                    width: '100%',
                },
            },
            item: {
                padding: '0 7px',
                [theme.breakpoints.up('tablet')]: {
                    flex: '0 0 25%',
                },
                [theme.breakpoints.up('desktop')]: {
                    flex: 'none',
                    width: '100%',
                    padding: 0,
                },
            },
            link: {
                margin: '0 auto',
                width: 31,
                height: 28,
                borderRadius: 8,
                backgroundColor: theme.palette.background.secondary,
                fill: theme.palette.primary.secondary,
                [theme.breakpoints.up('tablet')]: {
                    textDecoration: 'none',
                    margin: 0,
                    color: theme.palette.primary.secondary,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                },
                [theme.breakpoints.up('desktop')]: {
                    paddingLeft: 25,
                    borderRadius: 0,
                    minHeight: 50,
                    alignItems: 'center',
                    color: theme.palette.primary.iconActive,
                    fill: theme.palette.primary.iconActive,
                    justifyContent: 'flex-start',
                },
            },
            linkText: {
                paddingTop: 4,
                fontSize: 18,
                marginRight: 13,
                [theme.breakpoints.up('desktop')]: {
                    padding: 0,
                },
            },
            balance: {
                fontSize: 18,
                marginRight: 13,
                color: theme.palette.primary.secondary,
            },
            active: {
                backgroundColor: theme.palette.primary.secondary,
                fill: theme.palette.primary.iconActive,
                [theme.breakpoints.up('tablet')]: {
                    fill: theme.palette.background.navPrimary,
                    color: theme.palette.background.navPrimary,
                    backgroundColor: 'transparent',
                },
                [theme.breakpoints.up('desktop')]: {
                    color: theme.palette.primary.iconActive,
                    fill: theme.palette.primary.iconActive,
                    backgroundColor: theme.palette.background.navPrimary,
                },
            },
            icon: {
                paddingLeft: 3.5,
                paddingTop: 2,
                [theme.breakpoints.up('tablet')]: {
                    marginRight: 8,
                },
            },
        }))(),
    };
};
