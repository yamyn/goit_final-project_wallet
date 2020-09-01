import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles, useTheme } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// components
import TableWithTransactionsForMobile from './TableForMobile/TableWithTransactions';

const StyledTableCell = withStyles({
    head: { textTransform: 'capitalize' },
    body: {
        fontSize: 13,
    },
})(TableCell);

const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f3f6f6',
        },
    },
})(TableRow);

const colorType = {
    '-': '#e20505',
    '+': '#25a805',
};

const TableWithTransactions = ({ transactions }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(
        theme.breakpoints.down(theme.breakpoints.values.tablet),
    );
    const isNotTablet = useMediaQuery(theme.breakpoints.up('desktop'));
    const wrapStyles = !isNotTablet
        ? {}
        : {
              flex: '0 0 70%',
          };
    const tHeadStyles = isMobile
        ? {}
        : {
              backgroundColor: theme.palette.primary.iconActive,
          };

    return (
        <>
            {isMobile ? (
                <TableWithTransactionsForMobile
                    transactions={transactions}
                    colors={colorType}
                />
            ) : (
                <div style={wrapStyles}>
                    <Table aria-label="transation table">
                        <TableHead>
                            <TableRow style={tHeadStyles}>
                                <StyledTableCell>Дата</StyledTableCell>
                                <StyledTableCell align="center">
                                    Тип
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Категория
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Комментарий
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Сумма
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    Баланс
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map(transaction => (
                                <StyledTableRow key={transaction._id}>
                                    <StyledTableCell component="th" scope="row">
                                        {transaction.date}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                        style={{
                                            color: colorType[transaction.type],
                                        }}
                                    >
                                        {transaction.type}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {transaction.category}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {transaction.comments}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                        style={{
                                            color: colorType[transaction.type],
                                        }}
                                    >
                                        {transaction.amount}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {transaction.balanceAfter}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </>
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
};

export default TableWithTransactions;
