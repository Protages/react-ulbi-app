import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defaultOption, value, change}) => {
    return (
        <select 
            className={classes.mySelect}
            value={value}
            onChange={e => change(e.target.value)}
        >
            <option disabled value="">{ defaultOption }</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    { option.name }
                </option>
            )}
        </select>
    )
}

export default MySelect