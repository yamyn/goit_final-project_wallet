/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { invert } from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

import Select from '../Inputs/Select/Select';

import useStyles from './DiagramStyles';

const moment = extendMoment(Moment);
const rangeYear = moment.range(moment().subtract(30, 'year'), moment());
const yearArray = Array.from(rangeYear.by('year', { excludeEnd: false }))
    .map(time => time.format('yyyy'))
    .reverse();

const monthEnum = {
    Январь: '01',
    Февраль: '02',
    Март: '03',
    Апрель: '04',
    Май: '05',
    Июнь: '06',
    Июль: '07',
    Август: '08',
    Сентябрь: '09',
    Октябрь: '10',
    Ноябрь: '11',
    Декабрь: '12',
};
const invMonth = invert(monthEnum);

const categoryColor = {
    'Основные расходы': '#ecb22a',
    Продукты: '#e28b20',
    Машина: '#d25925',
    'Забота о себе': '#67b7d0',
    'Забота о детях': '#5593d7',
    'Товары для дома': '#3a68a6',
    Образование: '#9cc254',
    Развлечение: '#73ad57',
    Другое: '#507c3a',
};

const getChart = statistic => {
    return {
        labels: Object.keys(categoryColor),
        datasets: [
            {
                label: 'diagram',
                data: statistic,
                backgroundColor: Object.values(categoryColor),
            },
        ],
    };
};
const statistic = [12, 19, 3, 5, 2, 3];

export default function Diagram() {
    const { classes, isNotMobile } = useStyles();

    const onClick = res => {};
    const currentMonth = invMonth[moment().format('MM')];

    return (
        <>
            <div className={classes.root}>
                <div className={classes.chartWrap}>
                    <Pie
                        data={getChart(statistic)}
                        width={336}
                        height={336}
                        options={{
                            maintainAspectRatio: false,
                            legend: {
                                display: false,
                            },
                            tooltips: {
                                enabled: true,
                                label: Object.keys(categoryColor),
                                displayColors: false,
                            },
                        }}
                    />
                </div>
                <div className={classes.pickerWrap}>
                    <Select
                        data={yearArray}
                        onClick={onClick}
                        initValue={yearArray[0]}
                        className={classes.picker}
                    />
                    <Select
                        data={Object.keys(monthEnum)}
                        onClick={onClick}
                        initValue={currentMonth}
                        className={classes.picker}
                    />
                </div>
            </div>
            <div>
                <Table aria-label="diagram table">
                    <TableHead>
                        <TableRow className={classes.thead}>
                            <TableCell />
                            <TableCell>Категория</TableCell>
                            <TableCell>Сума</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(categoryColor).map(category => (
                            <TableRow>
                                <TableCell>
                                    <div
                                        className={classes.colorPick}
                                        style={{
                                            backgroundColor:
                                                categoryColor[category],
                                        }}
                                    ></div>
                                </TableCell>
                                <TableCell>{category}</TableCell>
                                <TableCell>1000</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Divider orientation="horizontal" />
                <div className={classes.balanceWrap}>
                    <p>Расходы:</p>
                    <p>Доходы:</p>
                </div>
            </div>
        </>
    );
}

Diagram.defaultProps = {
    // user: PropTypes.shape({
    //     name: 'name',
    //     email: 'email',
    // }),
};

Diagram.propTypes = {
    // user: PropTypes.shape({
    //     name: PropTypes.string,
    //     email: PropTypes.string,
    // }),
    // authenticated: PropTypes.bool.isRequired,
    // onLogOut: PropTypes.func.isRequired,
};
