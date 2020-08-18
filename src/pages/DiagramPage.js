import React from 'react';
import Header from '../components/Header/HeaderContainer';
import NavBar from '../components/NavBar/NavBar';
import { Pie } from 'react-chartjs-2';

const getChart = statistic => {
    return {
        labels: [
            'Основные расходы',
            'Продукты',
            'Машина',
            'Забота о себе',
            'Забота о детях',
            'Товары для дома',
        ],
        datasets: [
            {
                label: '#ываываыва',
                data: statistic,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
};
const statistic = [12, 19, 3, 5, 2, 3];

const DiagramPage = statisticGET => {
    return (
        <>
            <Header />
            <NavBar />
            <Pie
                data={getChart(statistic)}
                width={200}
                height={70}
                options={{ maintainAspectRatio: false }}
            />
        </>
    );
};

export default DiagramPage;
