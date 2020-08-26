import React from 'react';
import CustomSelect from '../Inputs/Select/Select';
import Input from '../Inputs/Input/Input';
import CustomButton from '../Inputs/Button/CutomButton';

import styles from './TransactionForm.module.css';

const TransactionForm = () => {
    return (
        <div className={styles.container}>
            <h3>ДОБАВИТЬ ТРАНЗАКЦИЮ</h3>
            <CustomSelect data={[1, 2, 3, 4]} />
            <div className={styles.row}>
                <Input name="number" placeholder="0.00" type="number" />
                <Input name="number" type="date" />
            </div>
            <div>
                <span>Комментарий</span>
                <Input name="textarea" placeholder="Comment" type="textarea" />
            </div>
            <CustomButton type="main" title="Добавить" />
        </div>
    );
};

export default TransactionForm;
