import { connect } from 'react-redux';
import { getCurrencies } from '../../redux/exchange/exchangeSelectors';
import CurrencyExchange from './CurrencyExchange';

const mapStateToProps = state => ({
    currencies: getCurrencies(state),
});

export default connect(mapStateToProps)(CurrencyExchange);
