import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default count => {
    const mainMarg = 290;
    const top = mainMarg + count * 50;
    const theme = useTheme();
    const laptop = theme.breakpoints.between('319', '1023');
    const isLaptop = useMediaQuery(laptop);

    return {
        isLaptop,
        classes: makeStyles(() => ({
            root: {
                width: 310,
                height: 460,
                margin: '0 auto',
                [laptop]: {
                    position: 'absolute',
                    width: 350,
                    height: 270,
                    top,
                    left: 30,
                    backgroundColor: theme.palette.primary.iconActive,
                    marginBottom: 30,
                    boxShadow: '14px 14px 15px rgba(0,0,0,0.1)',
                },
            },
            ceilHead: {
                border: 0,
                fontWeight: 'bold',
                [laptop]: {
                    backgroundColor: theme.palette.primary.tableSecondary,
                },
            },
            ceil: {
                border: 0,
            },
        }))(),
    };
};
