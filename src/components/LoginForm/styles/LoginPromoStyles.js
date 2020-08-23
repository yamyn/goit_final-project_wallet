import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../img/LoginRegister/LoginBG.jpg';

export default () => {
    
    return {
        classes: makeStyles(() => ({
            promoStyle: {    
                width: '35vw',
                height: '100%',
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            },
            finAppParagr: {
                color: '#fff',
            },
        }))(),
    };
};
