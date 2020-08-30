import React from 'react';
// Material UI
import { withStyles, useTheme } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// components
import TableWithTransactionsForMobile from './TableForMobile/TableWithTransactions';

const StyledTableCell = withStyles({
    head: { backgroundColor: '#fff', textTransform: 'capitalize' },
    body: {
        fontSize: 13,
    },
})(TableCell);

const isStyledTableRow = isDesc => {
    if (isDesc) {
        return TableRow;
    }

    return withStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: '#f3f6f6',
            },
        },
    })(TableRow);
};

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
              backgroundColor: theme.palette.background.primary,
              boxShadow: '-2px -2px 2px rgba(0,0,0,0.1)',
          };

    const StyledTableRow = isStyledTableRow(isNotTablet);

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
                            <TableRow>
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
            )
        </>
    );
};

export default TableWithTransactions;
