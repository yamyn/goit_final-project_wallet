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
                    margin: 0,
                    minHeight: 80,
                    backgroundColor: theme.palette.background.primary,
                },
                [theme.breakpoints.up('desktop')]: {
                    width: '95%',
                    margin: '0 auto',
                    backgroundColor: theme.palette.background.secondary,
                    padding: '30px 0',
                    borderRadius: 5,
                    marginBottom: 30,
                    boxShadow: '4px 4px 15px rgba(0,0,0,0.3)',
                },
            },
            wrap: {
                [theme.breakpoints.between('mobile', 'desktop')]: {
                    position: 'relative',
                    backgroundColor: '#777',
                },
                [theme.breakpoints.up('desktop')]: {
                    flex: '0 0 25%',

                },
            },
        }))(),
    };
};
