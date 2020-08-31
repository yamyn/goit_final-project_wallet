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
        width: '50%',
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f3f6f6',
        },
        borderLeft: '4px solid',
    },
})(TableRow);

const StyledTable = withStyles({
    root: {
        width: '95%',
        margin: '0 auto 20px auto',
        borderCollapse: 'collapse',
    },
})(Table);

const TableWithTransactions = ({ transactions, colors }) => {
    return (
        <div>
            {transactions.map(transaction => (
                <StyledTable
                    aria-label="transaction table"
                    key={transaction._id}
                >
                    <TableBody>
                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">Дата</StyledTableCell>
                            <StyledTableCell align="left">
                                {transaction.date}
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">Тип</StyledTableCell>
                            <StyledTableCell
                                align="left"
                                style={{ color: colors[transaction.type] }}
                            >
                                {transaction.type}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">
                                Категория
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {transaction.category}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">
                                Комментарий
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {transaction.comments}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">
                                Сумма
                            </StyledTableCell>
                            <StyledTableCell
                                align="left"
                                style={{ color: colors[transaction.type] }}
                            >
                                {transaction.amount}
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow
                            style={{ borderColor: colors[transaction.type] }}
                        >
                            <StyledTableCell align="left">
                                Баланс
                            </StyledTableCell>
                            <StyledTableCell align="left">
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
