import { connect } from 'react-redux';
import { getBalance } from '../../redux/walet/waletSelectors';
import BalanceMonitor from './BalanceMonitor';

const mapStateToProps = state => ({
    balance: getBalance(state),
});

export default connect(mapStateToProps, null)(BalanceMonitor);
