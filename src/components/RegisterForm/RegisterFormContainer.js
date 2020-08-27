import { connect } from 'react-redux';
import { signup } from '../../redux/session/sessionOperations';

import {
    getUser,
    getIsAuthenticated,
} from '../../redux/session/sessionSelectors';
import RegisterForm from './RegisterForm';

const mapStateToProps = state => ({
    user: getUser(state),
    authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
    onSignUp: credentials => signup(credentials),
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
