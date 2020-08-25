import { connect } from 'react-redux';

import Diagram from './Diagram';

// const mapStateToProps = state => ({
//     user: getUser(state),
//     authenticated: getIsAuthenticated(state),
// });

// const mapDispatchToProps = {
//     onLogOut: logOut,
// };

export default connect()(Diagram);
