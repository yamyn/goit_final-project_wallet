import React from 'react';
import Header from '../components/Header/HeaderContainer';
import NavBar from '../components/NavBar/NavBar';
import TableWithTransactions from '../components/Table/TableWithTransactionsContainer';

const HomePage = () => (
    <>
        <Header />
        <NavBar />
        <TableWithTransactions />
    </>
);

export default HomePage;
