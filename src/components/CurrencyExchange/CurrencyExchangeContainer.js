import { connect } from 'react-redux';
import { getCurrencies } from '../../redux/exchange/exchangeSelectors';
import { getTransCount } from '../../redux/walet/waletSelectors';
import CurrencyExchange from './CurrencyExchange';

const mapStateToProps = state => ({
    currencies: getCurrencies(state),
    rowCount: getTransCount(state),
});

export default connect(mapStateToProps)(CurrencyExchange);
