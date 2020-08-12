import React from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles({
    head: { backgroundColor: '#ffffff', textTransform: 'capitalize' },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f3f6f6',
        },
    },
})(TableRow);

const StyledTable = withStyles({
    root: {
        maxWidth: '866px',
    },
})(Table);

const TableWithTransactions = ({ transactions }) => {
    return (
        <StyledTable aria-label="transation table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Дата</StyledTableCell>
                    <StyledTableCell align="center">Тип</StyledTableCell>
                    <StyledTableCell align="center">Категория</StyledTableCell>
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
        </StyledTable>
    );
};

export default TableWithTransactions;
