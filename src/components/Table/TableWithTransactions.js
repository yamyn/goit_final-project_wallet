import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import styles from './TableWithTransactions.module.css';

const arr = [
    {
        comments: 'cool',
        _id: '5c93a50a9fd94dd958fb18df1',
        dateEvent: '1994824666',
        typeEvent: '+',
        category: 'Other',
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
    },
    {
        comments: 'cool',
        _id: '5c93a50a9fd9f4d958fb18df1',
        dateEvent: '1994824666',
        typeEvent: '+',
        category: 'Other',
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
    },
    {
        comments: 'cool',
        _id: '5c93a50a9fds94d958fb18df1',
        dateEvent: '1994824666',
        typeEvent: '+',
        category: 'Other',
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
    },
];

const StyledTableCell = withStyles({
    head: { backgroundColor: '#ffffff', textTransform: 'capitalize' },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#ffffff',
        },
    },
})(TableRow);

function createTransctionItem({
    _id,
    dateEvent,
    typeEvent,
    category,
    comments,
    amountEvent,
    balanceAfter,
}) {
    return {
        _id,
        date: new Date(dateEvent),
        type: typeEvent,
        category,
        comments,
        amount: amountEvent,
        balanceAfter,
    };
}

const mapTransactionsForRender = transactions =>
    transactions.map(item => createTransctionItem(item));

const useStyles = makeStyles({
    table: {
        width: 855,
    },
});

export default function TableWithTransactions({ transactions = arr }) {
    const classes = useStyles();

    // преобразовать массив транзакций

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="transation table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Дата</StyledTableCell>
                        <StyledTableCell align="center">Тип</StyledTableCell>
                        <StyledTableCell align="center">
                            Категория
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Комментарий
                        </StyledTableCell>
                        <StyledTableCell align="center">Сумма</StyledTableCell>
                        <StyledTableCell align="center">Баланс</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map(transaction => (
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell component="th" scope="row">
                                {transaction.date}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.type}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.category}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.comments}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.amount}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.balanceAfter}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
