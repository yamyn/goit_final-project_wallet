import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { Pie } from 'react-chartjs-2';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Divider,
    Select,
    MenuItem,
} from '@material-ui/core';
import useStyles from './DiagramStyles';

import {
    yearArray,
    monthEnum,
    invMonth,
    categoryColor,
    getChart,
} from '../../helpers/parseStatistic';

const StyledSelect = withStyles({
    select: {
        padding: '9px 14px',
    },
})(Select);

export default function Diagram({ statisticData, date, onChange }) {
    const { classes, isNotMobile, isLaptop } = useStyles();

    const { statistic, сosts, profit } = statisticData;
    const [year, month] = date.split('-');
    const isEmpty = _.isEmpty(statistic);

    const onChangeYear = event => {
        const { value } = event.target;
        onChange(`${value}-${month}`);
    };
    const onChangeMonth = event => {
        const { value } = event.target;
        onChange(`${year}-${monthEnum[value]}`);
    };

    return (
        <div className={classes.container}>
            {isNotMobile && (
                <div className={classes.chartHead}>
                    <p className={classes.chartText}>СТАТИСТИКА</p>
                </div>
            )}
            {isEmpty ? (
                <>
                    <img
                        className={classes.ammount}
                        src="https://contacts-api-bucket.s3.eu-central-1.amazonaws.com/image-from-rawpixel-id-472105-jpeg.jpg"
                        alt="finance"
                        width="100"
                    />
                    <p className={classes.emptyInfo}>
                        Нет расходов за указаный период
                    </p>
                    <div
                        className={`${classes.pickerWrap} ${classes.emptyData}`}
                    >
                        <div className={classes.picker}>
                            <StyledSelect
                                value={year}
                                onChange={onChangeYear}
                                variant="outlined"
                                name="year"
                                fullWidth
                            >
                                {yearArray.map(key => (
                                    <MenuItem value={key} key={key}>
                                        {key}
                                    </MenuItem>
                                ))}
                            </StyledSelect>
                        </div>
                        <div className={classes.picker}>
                            <StyledSelect
                                value={invMonth[month]}
                                onChange={onChangeMonth}
                                variant="outlined"
                                name="month"
                                fullWidth
                            >
                                {Object.keys(monthEnum).map(key => (
                                    <MenuItem value={key} key={key}>
                                        {key}
                                    </MenuItem>
                                ))}
                            </StyledSelect>
                        </div>
                    </div>
                </>
            ) : (
                <div className={classes.main}>
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
                                        label: Object.keys(statistic),
                                        displayColors: false,
                                    },
                                }}
                            />
                        </div>
                        <div className={classes.pickerWrap}>
                            <div className={classes.picker}>
                                <StyledSelect
                                    value={year}
                                    onChange={onChangeYear}
                                    variant="outlined"
                                    name="year"
                                    fullWidth
                                >
                                    {yearArray.map(key => (
                                        <MenuItem value={key} key={key}>
                                            {key}
                                        </MenuItem>
                                    ))}
                                </StyledSelect>
                            </div>
                            <div className={classes.picker}>
                                <StyledSelect
                                    value={invMonth[month]}
                                    onChange={onChangeMonth}
                                    variant="outlined"
                                    name="month"
                                    fullWidth
                                >
                                    {Object.keys(monthEnum).map(key => (
                                        <MenuItem value={key} key={key}>
                                            {key}
                                        </MenuItem>
                                    ))}
                                </StyledSelect>
                            </div>
                        </div>
                    </div>
                    <div className={classes.tableWrap}>
                        <Table aria-label="diagram table">
                            {!isLaptop && (
                                <TableHead>
                                    <TableRow className={classes.thead}>
                                        <TableCell className={classes.hCeil} />
                                        <TableCell className={classes.hCeil}>
                                            Категория
                                        </TableCell>
                                        <TableCell className={classes.hCeil}>
                                            Сума
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            )}
                            <TableBody className={classes.tbody}>
                                {Object.keys(statistic).map(
                                    (category, index) => (
                                        <TableRow
                                            className={classes.trow}
                                            key={category}
                                        >
                                            <TableCell className={classes.ceil}>
                                                <div
                                                    className={
                                                        classes.colorPick
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            categoryColor[
                                                                index
                                                            ],
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell className={classes.ceil}>
                                                {category}
                                            </TableCell>
                                            <TableCell
                                                className={`${classes.ceil} ${classes.amountCeil}`}
                                            >
                                                {statistic[category]}
                                            </TableCell>
                                        </TableRow>
                                    ),
                                )}
                            </TableBody>
                        </Table>
                        <Divider orientation="horizontal" />
                        <div className={classes.balanceWrap}>
                            <div className={classes.balanceRow}>
                                <p>РАСХОДЫ: </p>
                                <p style={{ color: '#e20505' }}>{profit}</p>
                            </div>
                            <div className={classes.balanceRow}>
                                <p>ДОХОДЫ:</p>
                                <p style={{ color: '#25a805' }}>{сosts}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

Diagram.propTypes = {
    statisticData: PropTypes.shape({
        statistic: PropTypes.objectOf(PropTypes.number),
        сosts: PropTypes.number,
        profit: PropTypes.number,
    }).isRequired,
    date: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
