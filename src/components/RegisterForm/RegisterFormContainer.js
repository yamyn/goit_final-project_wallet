import { connect } from 'react-redux';
import { signup } from '../../redux/session/sessionOperations';
import { diffrentPass } from '../../redux/session/sessionAction';

import RegisterForm from './RegisterForm';

const mapDispatchToProps = {
    onSignUp: credentials => signup(credentials),
    diffrentPass,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
