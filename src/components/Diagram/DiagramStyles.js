import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const laptop = theme.breakpoints.between('740', '1023');
    const isLaptop = useMediaQuery(laptop);

    return {
        isNotMobile,
        isLaptop,
        classes: makeStyles(() => ({
            container: {
                [theme.breakpoints.up('desktop')]: {
                    flex: '0 0 70%',
                    boxShadow: '4px 4px 15px rgba(0,0,0,0.3)',
                },
            },
            main: {
                [theme.breakpoints.up('desktop')]: {
                    display: 'flex',
                    position: 'relative',
                    paddingTop: 80,
                },
            },
            root: {
                paddingTop: 20,
                width: '90%',
                margin: '0 auto',
                [theme.breakpoints.up('tablet')]: {
                    padding: 0,
                },
                [theme.breakpoints.up('desktop')]: {
                    margin: 0,
                    width: '100%',
                    flex: '0 0 45%',
                    height: 500,
                },
            },
            chartWrap: {
                marginBottom: 30,
                [laptop]: {
                    paddingBottom: 70,
                    boxShadow: '18px 18px 20px rgba(0,0,0,0.1)',
                },
                [theme.breakpoints.up('desktop')]: {
                    paddingTop: 50,
                    flex: '0 0 45%',
                },
            },
            chartHead: {
                height: 90,
                width: '100%',
                backgroundColor: theme.palette.background.secondary,
                textAlign: 'center',
                marginBottom: 70,
                [laptop]: {
                    width: '90%',
                    margin: '0 auto 70px',
                },
                [theme.breakpoints.up('desktop')]: {
                    marginBottom: 30,
                },
            },
            chartText: {
                margin: 0,
                paddingTop: 33,
                color: theme.palette.primary.iconActive,
                fontSize: 24,
            },
            pickerWrap: {
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 30,
                [laptop]: {
                    width: 360,
                    margin: '0 auto',
                },
                [theme.breakpoints.up('desktop')]: {
                    position: 'absolute',
                    width: 360,
                    top: 0,
                    right: 70,
                },
            },
            picker: {
                flex: '0 0 48%',
            },
            tableWrap: {
                width: '90%',
                margin: '0 auto',
            },
            tbody: {
                [laptop]: { display: 'flex' },
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            },
            trow: {
                [laptop]: {
                    flex: '0 0 45%',
                    position: 'relative',
                },
            },
            hCeil: {
                [theme.breakpoints.up('tablet')]: {
                    border: 0,
                },
            },
            ceil: {
                [theme.breakpoints.up('tablet')]: {
                    border: 0,
                },
                [theme.breakpoints.up('desktop')]: {
                    padding: '10px 16px',
                },
            },
            amountCeil: {
                [laptop]: {
                    position: 'absolute',
                    margin: '0 0 0 auto',
                    textAlign: 'right',
                    right: 0,
                    top: 0,
                },
            },
            thead: {
                backgroundColor: theme.palette.primary.tableSecondary,
            },
            colorPick: {
                width: 15,
                height: 15,
                margin: '0 auto',
            },
            balanceWrap: {
                width: '90%',
                margin: '0 auto',
                minWidth: 90,
                [theme.breakpoints.up('tablet')]: {
                    margin: 0,
                },
            },
            balanceRow: {
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.up('tablet')]: {
                    width: 220,
                    margin: '0 0 0 auto',
                },
            },
        }))(),
    };
};
