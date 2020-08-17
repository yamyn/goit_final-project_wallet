import { connect } from 'react-redux';
import { logOut } from '../../redux/session/sessionOperations';

import {
    getUser,
    getIsAuthenticated,
} from '../../redux/session/sessionSelectors';
import Header from './Header';

const mapStateToProps = state => ({
    user: getUser(state),
    authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
    onLogOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
