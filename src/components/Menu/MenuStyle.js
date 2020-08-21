import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));

    return {
        isNotMobile,
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
            },
            item: {
                padding: '0 7px',
                [theme.breakpoints.up('tablet')]: {
                    flex: '0 0 25%',
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
                    color: theme.palette.primary.secondary,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                },
            },
            linkText: {
                marginRight: 13,
            },
            active: {
                width: 31,
                height: 28,
                borderRadius: 8,
                backgroundColor: theme.palette.primary.secondary,
                fill: theme.palette.primary.iconActive,
                [theme.breakpoints.up('tablet')]: {
                    fill: theme.palette.background.navPrimary,
                    color: theme.palette.background.navPrimary,
                    width: 70,
                    display: 'flex',
                    backgroundColor: 'transparent',
                },
            },
            icon: {
                paddingLeft: 3.5,
                paddingTop: 2,
            },
        }))(),
    };
};
