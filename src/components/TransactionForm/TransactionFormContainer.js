import { connect } from 'react-redux';
import { addTransaction } from '../../redux/walet/waletOperations';

import TransactionForm from './TransactionForm';
import TransactionFormMobile from './TransactionFormMobile';

const mapDispatchToProps = {
    addTransaction,
};

export default isNotMobile => {
    const form = isNotMobile ? TransactionForm : TransactionFormMobile;

    return connect(null, mapDispatchToProps)(form);
};
