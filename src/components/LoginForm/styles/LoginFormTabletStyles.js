import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../img/LoginRegister/LoginBG.jpg';

export default () => {
    return {
        classesTablet: makeStyles(() => ({
            containerTablet: {
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            },
            containerFormTabletStyle: {
                width: '550px',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
                backgroundColor: '#fff',
            },
            finAppParagr: {
                color: '#fff',
            },
        }))(),
    };
};
