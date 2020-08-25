import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));

    return {
        isNotMobile,
        classes: makeStyles(() => ({
            root: {
                paddingTop: 20,
                width: '90%',
                margin: '0 auto',
            },
            chartWrap: { marginBottom: 30 },
            pickerWrap: {
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 30,
            },
            picker: {
                flex: '0 0 45%',
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
            },
        }))(),
    };
};
