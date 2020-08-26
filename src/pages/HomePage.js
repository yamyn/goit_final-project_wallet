import React from 'react';
import Header from '../components/Header/HeaderContainer';
import NavBar from '../components/NavBar/NavBar';
import TableWithTransactions from '../components/Table/TableWithTransactionsContainer';
import useStyles from './pageStyle';

const HomePage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Header />

            <div className={classes.mainWrap}>
                <NavBar />
                <TableWithTransactions />
            </div>
        </>
    );
};

export default HomePage;
