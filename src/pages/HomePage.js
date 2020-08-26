import React from 'react';
import Header from '../components/Header/HeaderContainer';
import NavBar from '../components/NavBar/NavBar';
import TableWithTransactions from '../components/Table/TableWithTransactionsContainer';
import useStyles from './pageStyle';
import FabBtn from '../components/Inputs/Fab/Fab';
import SimpleModal from '../components/Modal/Modal';
import TransactionForm from '../components/TransactionForm/TransactionForm';

const HomePage = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Header />

            <div className={classes.mainWrap}>
                <NavBar />
                <TableWithTransactions />
            </div>
            <SimpleModal>
                <TransactionForm />
            </SimpleModal>
            <FabBtn />
        </div>
    );
};

export default HomePage;
