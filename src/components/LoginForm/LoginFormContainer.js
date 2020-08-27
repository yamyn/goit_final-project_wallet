import { connect } from 'react-redux';
import { login } from '../../redux/session/sessionOperations';

import LoginForm from './LoginForm';
import { diffrentPass } from '../../redux/session/sessionAction';

const mapDispatchToProps = {
    onLogin: login,
    diffrentPass,
};

export default connect(null, mapDispatchToProps)(LoginForm);
