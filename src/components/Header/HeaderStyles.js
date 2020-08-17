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
            },
            headerWrap: {
                minHeight: 40,
                paddingRight: 8,
                paddingLeft: 8,
                backgroundColor: theme.palette.background.secondary,
            },
            logo: {
                marginRight: 8,
                width: 24,
                height: 24,
                fill: theme.palette.primary.secondary,
            },
            logout: {
                width: 18,
                height: 18,
                fill: theme.palette.primary.secondary,
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
                fontFamily: '../../fonts/bauhouse/BauhausC_Medium_Bold.ttf',
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
            },
            name: {
                marginRight: 17,
                color: theme.palette.primary.secondary,
            },
        }))(),
    };
};
