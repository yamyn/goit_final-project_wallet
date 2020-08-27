import React from 'react';

import Header from '../components/Header/HeaderContainer';
import getTransactionForm from '../components/TransactionForm/TransactionFormContainer';

const TransactionForm = getTransactionForm(false);

const AddTransMobilePage = () => (
    <div>
        <Header />
        <TransactionForm />
    </div>
);

export default AddTransMobilePage;
