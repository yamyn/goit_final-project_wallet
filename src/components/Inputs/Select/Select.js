import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Select.module.css'

const CustomSelect = ({ data, onClick, value }) => {
    const isArr = Array.isArray(data);
    const keys = isArr ? data : Object.keys(data);
    const values = isArr ? data : Object.values(data);
    const [newValue, setValue] = React.useState();
    value = newValue || value;

    const handleChange = event => {
        onClick(event.target.value);
        setValue(event.target.value);
    };

    return (
        <Select
            className={styles.root}
            value={value}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="small"
            displayEmpty
            renderValue={(value => {
                console.log(value);
                return value
            })}
        >
            {keys.map((key, i) => (
                <MenuItem value={values[i]} key={key}>
                    {key}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CustomSelect;
