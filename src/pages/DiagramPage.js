import React from 'react';
import { connect } from 'react-redux';
import TableWithTransactions from '../components/Table/TableWithTransactionsContainer';

const DiagramPage = () => {
    return (
        <>
            <h1>Diagram page!</h1> <TableWithTransactions />
        </>
    );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(DiagramPage);
