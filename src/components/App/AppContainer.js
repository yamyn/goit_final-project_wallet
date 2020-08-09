import { connect } from 'react-redux';

import getAlert from '../../redux/alert/alertSelectors';

import App from './App';

const mapStateToProps = state => ({
    alert: getAlert(state),
});

export default connect(mapStateToProps)(App);
