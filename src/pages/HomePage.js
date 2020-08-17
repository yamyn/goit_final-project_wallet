import React from 'react';
import Header from '../components/Header/HeaderContainer';
import TableWithTransactions from '../components/Table/TableWithTransactionsContainer';
import NavBar from '../components/NavBar/NavBar';
const HomePage = () => (
    <>
        <Header />
        <NavBar />
        <TableWithTransactions />
    </>
);

export default HomePage;
