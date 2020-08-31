/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

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

TableWithTransactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            date: PropTypes.string,
            type: PropTypes.string,
            category: PropTypes.string,
            amount: PropTypes.number,
            balanceAfter: PropTypes.number,
            typeBalanceAfter: PropTypes.string,
        }),
    ).isRequired,
    colors: PropTypes.shape({
        '-': PropTypes.string,
        '+': PropTypes.string,
    }).isRequired,
};

export default TableWithTransactions;
