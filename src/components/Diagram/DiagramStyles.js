import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default () => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('tablet'));
    const chartSize = Math.round(window.innerWidth * 0.75);

    return {
        isNotMobile,
        chartSize,
        classes: makeStyles(() => ({
            root: {
                paddingTop: 20,
                width: '90%',
                margin: '0 auto',
            },
            pickerWrap: {
                display: 'flex',
            },
            picker: {
                padding: 0
            }
        }))(),
    };
};
