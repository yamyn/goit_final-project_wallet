import { connect } from 'react-redux';

import getAlert from '../../redux/alert/alertSelectors';
import { fetchTransactions } from '../../redux/walet/waletOperations';
import {
    getTransUpTime,
    getTransCount,
} from '../../redux/walet/waletSelectors';
import fetchExchange from '../../redux/exchange/exchangeOperations';

import App from './App';

const mapStateToProps = state => ({
    alert: getAlert(state),
    transUpTime: getTransUpTime(state),
    transCount: getTransCount(state),
});

const mapDispatchToProps = {
    fetchTransactions,
    fetchExchange,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
