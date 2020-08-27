import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import CustomSelect from '../Inputs/Select/Select';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';
import useStyles from './TransactionFormStyle';

const TransactionFormMobile = () => {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.linkWrap}>
                <Link to="/home" exact className={classes.link}>
                    <ArrowBack />
                </Link>
                <p className={classes.linkText}>ДОБАВИТЬ ТРАНЗАКЦИЮ</p>
            </div>
            <div className={classes.root}>
                <CustomSelect data={[1, 2, 3, 4]} />
                <div>
                    <Input name="number" placeholder="0.00" type="number" />
                    <Input name="number" type="date" />
                </div>
                <div>
                    <span>Комментарий</span>
                    <Input
                        name="textarea"
                        placeholder="Comment"
                        type="textarea"
                    />
                </div>
            </div>
            <CustomButton type="main" title="Добавить" />
        </>
    )
};
export default TransactionFormMobile;