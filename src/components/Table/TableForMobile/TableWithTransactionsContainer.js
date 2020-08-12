import { connect } from 'react-redux';
import { getTransactions } from '../../../redux/walet/waletSelectors';
import TableWithTransactions from './TableWithTransactions';

const mapStateToProps = state => ({
    transactions: getTransactions(state),
});

export default connect(mapStateToProps)(TableWithTransactions);
