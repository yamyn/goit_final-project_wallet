import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/KeyboardBackspace';
import { useFormik } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import getCategory from '../../helpers/categoriesChooser';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';
import useStyles from './TransactionFormStyle';

const TransactionFormMobile = ({ addTransaction, diffrentPass }) => {
    const { classes } = useStyles();
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            type: '+',
            category: 'Другое',
            amount: null,
            comments: '',
            date: null,
        },

        onSubmit: values => {
            if (!values.amount) {
                diffrentPass(`amount is required!`);

                return;
            }
            addTransaction(values);
            setTimeout(() => {
                history.push('/home');
            }, 1200);
        },
    });
    return (
        <>
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
                <div className={classes.linkWrap}>
                    <Link to="/home" exact className={classes.link}>
                        <ArrowBack />
                    </Link>
                    <p className={classes.linkText}>ДОБАВИТЬ ТРАНЗАКЦИЮ</p>
                </div>
                <div className={classes.root}>
                    <RadioGroup
                        aria-label="gender"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel
                            checked={formik.values.type === '+'}
                            value="+"
                            control={<Radio />}
                            label="Доход"
                        />
                        <FormControlLabel
                            checked={formik.values.type === '-'}
                            value="-"
                            control={<Radio />}
                            label="Расход"
                        />
                    </RadioGroup>

                    <Select
                        className={classes.select}
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        variant="outlined"
                        size="small"
                        name="category"
                    >
                        {getCategory(formik.values.type).map(key => (
                            <MenuItem value={key} key={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </Select>

                    <div>
                        <Input
                            name="amount"
                            placeholder="0.00"
                            type="number"
                            onChange={formik.handleChange}
                        />
                        <Input
                            name="date"
                            type="date"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <span>Комментарий</span>
                        <Input
                            name="comments"
                            placeholder="Comment"
                            type="textarea"
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <CustomButton type="main" title="Добавить" />
            </form>
        </>
    )
};
export default TransactionFormMobile;
