import { connect } from 'react-redux';
import { getBalance } from '../../redux/walet/waletSelectors';
import Menu from './Menu';

const mapStateToProps = state => ({
    balance: getBalance(state),
});

export default connect(mapStateToProps, null)(Menu);
