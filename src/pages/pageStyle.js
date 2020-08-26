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
            mainWrap: {
                [theme.breakpoints.up('desktop')]: {
                    width: '90%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#f0f3f3',
                    minHeight: '1vh',
                },
            },
            root: {
                position: 'relative',
                [theme.breakpoints.up('desktop')]: {
                    // position: 'relative',
                },
            },
        }))(),
    };
};
