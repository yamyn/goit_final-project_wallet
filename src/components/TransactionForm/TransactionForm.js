import React from 'react';
import { useFormik } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import getCategory from '../../helpers/categoriesChooser';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';

import styles from './TransactionForm.module.css';

const TransactionForm = ({ addTransaction, diffrentPass }) => {
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
        },
    });

    return (
        <div className={styles.container}>
            <form onSubmit={formik.handleSubmit}>
                <h3>ДОБАВИТЬ ТРАНЗАКЦИЮ</h3>
                <RadioGroup
                    aria-label="type"
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
                <div className={styles.row}>
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
                <CustomButton type="main" title="Добавить" />
            </form>
        </div>
    );
};

export default TransactionForm;
