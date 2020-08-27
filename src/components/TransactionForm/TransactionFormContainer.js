import { connect } from 'react-redux';
import { addTransaction } from '../../redux/walet/waletOperations';
import { diffrentPass } from '../../redux/session/sessionAction';

import TransactionForm from './TransactionForm';
import TransactionFormMobile from './TransactionFormMobile';

const mapDispatchToProps = {
    addTransaction,
    diffrentPass,
};

export default isNotMobile => {
    const form = isNotMobile ? TransactionForm : TransactionFormMobile;

    return connect(null, mapDispatchToProps)(form);
};
