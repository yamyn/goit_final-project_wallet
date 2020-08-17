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
                backgroundColor: theme.palette.background.navPrimary,
            },
        }))(),
    };
};
