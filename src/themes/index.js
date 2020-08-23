import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    breakpoints: {
        values: {
            mobile: 319,
            tablet: 740,
            desktop: 1023,
        },
    },
    palette: {
        primary: {
            main: '#a52a2a',
            secondary: '#828fa1',
            iconActive: '#fff',
            tableSecondary: '#f3f6f6',
        },
        background: {
            primary: '#fff',
            secondary: '#284060',
            navPrimary: '#3a5374',
        },
    },
    typography: {
        fontFamily: '"HelveticaNeueCyr", "BauhausC"',
        fontSize: 14,
    },
});
