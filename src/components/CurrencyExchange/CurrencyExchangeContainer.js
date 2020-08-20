import { connect } from 'react-redux';
import { getCurrencies } from '../../redux/exchange/exchangeSelectors';
import fetchExchange from '../../redux/exchange/exchangeOperations';
import CurrencyExchange from './CurrencyExchange';

const mapStateToProps = state => ({
    currencies: getCurrencies(state),
});

const mapDispatchToProps = {
    fetchExchange,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange);
