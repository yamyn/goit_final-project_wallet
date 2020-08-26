import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Select.module.css';

const CustomSelect = ({ data, onClick, initValue, className }) => {
    const [newValue, setValue] = React.useState();

    const value = newValue || initValue;

    const handleChange = event => {
        onClick(event.target.value);
        setValue(event.target.value);
    };

    return (
        <Select
            className={`${className} ${styles.root}`}
            value={value}
            onChange={handleChange}
            variant="outlined"
            size="small"
        >
            {data.map(key => (
                <MenuItem value={key} key={key}>
                    {key}
                </MenuItem>
            ))}
        </Select>
    );
};

export default CustomSelect;
