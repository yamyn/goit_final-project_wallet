import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Select.module.css'

const CustomSelect = ({ data }) => {
    const [value, setValue] = React.useState('');

    const handleChange = event => {
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
        >
            {data.map(item => (
                <MenuItem value={item} key={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CustomSelect;
