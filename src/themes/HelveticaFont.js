import HelveticaL from '../fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.woff';
import HelveticaR from '../fonts/HelveticaNeueCyr/HelveticaNeueCyr-Regular.woff';
import HelveticaM from '../fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.woff';
import HelveticaB from '../fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.woff';

const HelveticaLight = {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
    local('Helvetica'),
    local('Helvetica-Light'),
    url(${HelveticaL}) format('woff')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const HelveticaRegular = {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
    local('Helvetica'),
    local('Helvetica-Regular'),
    url(${HelveticaR}) format('woff')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const HelveticaMedium = {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
    local('Helvetica'),
    local('Helvetica-Medium'),
    url(${HelveticaM}) format('woff')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const HelveticaBold = {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
    local('Helvetica'),
    local('Helvetica-Bold'),
    url(${HelveticaB}) format('woff')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default {
    HelveticaLight,
    HelveticaRegular,
    HelveticaMedium,
    HelveticaBold,
};
