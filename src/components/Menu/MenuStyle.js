import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));

    return {
        isNotMobile,
        classes: makeStyles(() => ({
            list: {
                margin: 0,
                padding: 0,
            },
            link: {
                width: 31,
                height: 28,
                borderRadius: 8,
                backgroundColor: theme.palette.background.secondary,
                fill: theme.palette.primary.secondary,
            },
            active: {
                width: 31,
                height: 28,
                borderRadius: 8,
                backgroundColor: theme.palette.primary.secondary,
                fill: theme.palette.primary.iconActive,
            },
            icon: {
                paddingLeft: 3.5,
                paddingTop: 2,
            },
        }))(),
    };
};
