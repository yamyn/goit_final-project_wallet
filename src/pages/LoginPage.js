import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '../components/Inputs/Input/Input';
import RadioButton from '../components/Inputs/RadioButton/RadioButton';
import CustomSelect from '../components/Inputs/Select/Select';
import CustomButton from '../components/Inputs/Button/CutomButton';

import withAuthRedirect from '../components/hoc/withAuthRedirect';

const LoginPage = () => (
    <>
        <h1>Login page!</h1>
        <Input
            withIcon
            name="password"
            placeholder="Password"
            type="password"
            errorText="Some error"
        />
        <Input
            withIcon
            name="email"
            placeholder="E-mail"
            type="email"
        />
        <Input
            withIcon
            name="name"
            placeholder="Name"
        />
        <Input
            name="number"
            placeholder="0.00"
            type="date"
            errorText="Required"
        />
        <Input
            name="number"
            placeholder="0.00"
            type="number"
        />
        <Input
            name="textarea"
            placeholder="Comment"
            type="textarea"
        />
        <RadioGroup defaultValue="debit">
            <FormControlLabel
                value="debit"
                control={<RadioButton />}
                label="Доход"
            />
            <FormControlLabel
                value="credit"
                control={<RadioButton />}
                label="Расход"
            />
        </RadioGroup>
        <CustomSelect data={[1, 2, 3, 4]} />
        <CustomButton title="Добавить" type="main" />
        <CustomButton title="Регистрация" type="secondary" />
    </>
);

export default withAuthRedirect(LoginPage);
