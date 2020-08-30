import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { invert } from 'lodash';

const moment = extendMoment(Moment);
const rangeYear = moment.range(moment().subtract(30, 'year'), moment());

export const yearArray = Array.from(rangeYear.by('year', { excludeEnd: false }))
    .map(time => time.format('yyyy'))
    .reverse();

export const monthEnum = {
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
export const invMonth = invert(monthEnum);

export const categoryColor = [
    '#ecb22a',
    '#e28b20',
    '#d25925',
    '#67b7d0',
    '#5593d7',
    '#3a68a6',
    '#9cc254',
    '#73ad57',
    '#507c3a',
];

export const getChart = statistic => {
    return {
        labels: Object.keys(statistic),
        datasets: [
            {
                label: 'diagram',
                data: Object.values(statistic),
                backgroundColor: categoryColor,
            },
        ],
    };
};
