import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#284060',
            },
        },
        MuiPickersDay: {
            day: {
                color: '#284060',
            },
            daySelected: {
                backgroundColor: '#284060',
            },
            dayDisabled: {
                color: '#284060',
            },
            current: {
                color: '#284060',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#284060',
            },
        },
    },
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
