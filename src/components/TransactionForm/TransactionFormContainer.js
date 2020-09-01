import { connect } from 'react-redux';
import { addTransaction } from '../../redux/walet/waletOperations';
import { diffrentPass } from '../../redux/session/sessionAction';

import TransactionForm from './TransactionForm';
import TransactionFormMobile from './TransactionFormMobile';

const forms = {
    mobile: TransactionFormMobile,
    desk: TransactionForm,
};

const mapDispatchToProps = {
    addTransaction,
    diffrentPass,
};

export default type => {
    const form = forms[type];

    return connect(null, mapDispatchToProps)(form);
};
