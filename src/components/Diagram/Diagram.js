/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import Moment from 'moment';
import { extendMoment } from 'moment-range';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Select from '../Inputs/Select/Select';

import useStyles from './DiagramStyles';

const moment = extendMoment(Moment);
const rangeYear = moment.range(moment().subtract(30, 'year'), moment());
const yearArray = Array.from(rangeYear.by('year', { excludeEnd: false }))
    .map(time => time.format('yyyy'))
    .reverse();

const monrthArray = {
    'Январь': '01',
    'Февраль': '02',
    'Март': '03',
    'Апрель': '04',
    'Май': '05',
    'Июнь': '06',
    'Июль': '07',
    'Август': '08',
    'Сентябрь': '09',
    'Октябрь': '10',
    'Ноябрь': '11',
    'Декабрь': '12',
};

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
    const { classes, isNotMobile, chartSize } = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

    const onClick = (res) => {

    };

    return (
        <>
            <div className={classes.root}>
                <div>
                    <Pie
                        data={getChart(statistic)}
                        width={chartSize}
                        height={chartSize}
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
                <div>
                    <Select data={yearArray} onClick={onClick} value="Год" />
                    <Select
                        data={monrthArray}
                        onClick={onClick}
                        value="Месяц"
                    />
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
