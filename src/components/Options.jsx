import React from 'react'
import ostyle from './options.module.css'

const Options = ({options, optionLabel, name, value, onChange, error}) => {
    return (
        <div className={ostyle.selectBox}>
            <select
             className={ostyle.select}
             name={name}
             value={value}
             onChange={onChange}
             >
                {
                    optionLabel && (<option hidden className={ostyle.oLabel}>{optionLabel}</option>)
                }
                {
                    options.map((option) => (
                        <option key={option}>{option}</option>
                    ))
                }
            </select>
            <p>{error}</p>
        </div>
    )
}

export default Options
