import React from 'react';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles({
    head: { backgroundColor: '#ffffff', textTransform: 'capitalize' },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        borderLeft: '4px solid',
        borderColor: ' #669999',
        '&:nth-of-type(odd)': {
            backgroundColor: '#f3f6f6',
        },
    },
})(TableRow);

const StyledTable = withStyles({
    root: {
        width: '306px',
        margin: '0 auto',
        borderCollapse: 'collapse',
    },
})(Table);

const TableWithTransactions = ({ transactions }) => {
    return (
        <div>
            {transactions.map(transaction => (
                <StyledTable aria-label="transation table">
                    <TableBody>
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Дата
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.date}
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Тип
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.type}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Категория
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.category}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Комментарий
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.comments}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Сумма
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.amount}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow key={transaction._id}>
                            <StyledTableCell align="center">
                                Баланс
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {transaction.balanceAfter}
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </StyledTable>
            ))}
        </div>
    );
};

export default TableWithTransactions;
