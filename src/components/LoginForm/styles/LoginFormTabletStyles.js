import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../img/LoginRegister/LoginBG.jpg';

export default () => {
    
    return {
        classes: makeStyles(() => ({
            containerTablet: {    
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            },
            containerFormTabletStyle:{
                margin: '0px auto 20px auto',
                width: '550px',
                boxShadow: '10px 17.321px 40px 0px rgba(112, 124, 130, 0.3)',
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
