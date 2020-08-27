import { connect } from 'react-redux';
import { login } from '../../redux/session/sessionOperations';

import LoginForm from './LoginForm';

const mapDispatchToProps = {
    onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
