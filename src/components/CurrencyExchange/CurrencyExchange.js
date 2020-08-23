/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { colors } from '@material-ui/core';
import styles from './CurrencyExchange.module.css';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: colors.grey[100],
        color: theme.palette.common.black,
        fontSize: 15,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 13,
        fontWeight: 'roman',
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        width: 310,
    },
    root: {
        width: 310,
        height: 380,
    },
});

// eslint-disable-next-line react/prop-types
export default function CurrencyExchange({ currencies }) {
    const classes = useStyles();

    return (
        <div className={styles.tableContainer}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="currency table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                Валюта
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Покупка
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Продажа
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currencies.map(currencies => (
                            <TableRow key={currencies}>
                                <StyledTableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {currencies.ccy}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {currencies.buy}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {currencies.sale}
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
