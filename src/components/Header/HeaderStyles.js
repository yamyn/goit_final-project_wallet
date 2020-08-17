import { makeStyles, useTheme } from '@material-ui/core/styles';

export default makeStyles(() => {
    const theme = useTheme();
    console.log(theme);
    return {
        root: {
            maxHeight: 40,
            flexGrow: 1,
        },
        headerWrap: {
            backgroundColor: theme.palette.background.secondary,
            color: theme.palette.primary.secondary,
        },

        menuButton: {
            paddingRight: 5,
        },
        title: {
            flexGrow: 1,
            fontSize: 25,

            fontWeight: theme.typography.fontWeightBold,
            fontFamily: '../../fonts/bauhouse/BauhausC_Medium_Bold.ttf',
        },
        buttonWallet: {
            color: theme.palette.primary.secondary,
        },
        icon: {
            paddingLeft: 10,
        },
        LogOut: {
            padding: 0,
        },
    };
});
