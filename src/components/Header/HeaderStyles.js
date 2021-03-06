import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    return {
        isNotMobile,
        classes: makeStyles(() => ({
            root: {
                flexGrow: 1,
                [theme.breakpoints.up('desktop')]: {
                    boxShadow: '0 18px 20px rgba(0,0,0,0.1)',
                    marginBottom: 50,
                },
            },
            headerWrap: {
                minHeight: 40,
                padding: '0 8px',
                backgroundColor: theme.palette.background.secondary,
                [theme.breakpoints.up('tablet')]: {
                    minHeight: 80,
                    padding: '0 32px',
                    backgroundColor: theme.palette.background.primary,
                },
            },
            logo: {
                marginRight: 8,
                width: 24,
                height: 24,
                fill: theme.palette.primary.secondary,
                [theme.breakpoints.up('tablet')]: {
                    fill: theme.palette.background.navPrimary,
                },
            },
            logout: {
                width: 18,
                height: 18,
                fill: theme.palette.primary.secondary,
                [theme.breakpoints.up('tablet')]: {
                    marginRight: 5,
                },
            },
            divider: {
                marginRight: 18,
                width: 1,
            },
            menuButton: {
                margin: 0,
                padding: 0,
                color: theme.palette.primary.secondary,
            },
            title: {
                flexGrow: 1,
                fontSize: 18,
                color: theme.palette.primary.secondary,
                fontWeight: theme.typography.fontWeightBold,
                fontFamily: theme.typography.bauhouseFont,
                [theme.breakpoints.up('tablet')]: {
                    color: theme.palette.primary.black,
                },
            },
            buttonWallet: {
                margin: 0,
                padding: 0,
                color: theme.palette.primary.secondary,
            },
            icon: {
                margin: 0,
                padding: 0,
                color: theme.palette.primary.secondary,
            },
            LogOut: {
                padding: 0,
                color: theme.palette.primary.secondary,
                [theme.breakpoints.up('tablet')]: {
                    fontSize: 17,
                },
            },
            name: {
                marginRight: 17,
                color: theme.palette.primary.secondary,
            },
        }))(),
    };
};
