import React from 'react'
import istyle from './input.module.css'

const Input = ({ type, label, name, value, onChange, error }) => {
    return (
        <div className={istyle.inputBox}>
            <input
                type={type}
                className={istyle.inputGroup}
                placeholder=''
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className={istyle.placeholder}>{label}</label>
            <p>{error}</p>
        </div>
    )
}

export default Input
