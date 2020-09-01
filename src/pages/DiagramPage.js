import React from 'react';
import Header from '../components/Header/HeaderContainer';
import NavBar from '../components/NavBar/NavBar';
import Diagram from '../components/Diagram/DiagramContainer';
import useStyles from './pageStyle';

const DiagramPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Header />
            <div className={classes.mainWrap}>
                <NavBar />
                <Diagram />
            </div>
        </>
    );
};

export default DiagramPage;
