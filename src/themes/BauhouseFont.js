import BauhouseCL from '../fonts/bauhouse/BauhausC_Light.ttf';
import BauhouseCR from '../fonts/bauhouse/BauhausC_Light_Regular.ttf';
import BauhouseCM from '../fonts/bauhouse/BauhausC_Medium_Regular.ttf';
import BauhouseCB from '../fonts/bauhouse/BauhausC_Medium_Bold.ttf';

const BauhouseLight = {
    fontFamily: 'Bauhouse',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
    local('Bauhouse'),
    local('Bauhouse-Light'),
    url(${BauhouseCL}) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const BauhouseRegular = {
    fontFamily: 'Bauhouse',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Bauhouse'),
    local('Bauhouse-Regular'),
    url(${BauhouseCR}) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const BauhouseMedium = {
    fontFamily: 'Bauhouse',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
    local('Bauhouse'),
    local('Bauhouse-Medium'),
    url(${BauhouseCM}) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const BauhouseBold = {
    fontFamily: 'Bauhouse',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
    local('Bauhouse'),
    local('Bauhouse-Bold'),
    url(${BauhouseCB}) format('ttf')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default { BauhouseLight, BauhouseRegular, BauhouseMedium, BauhouseBold };
