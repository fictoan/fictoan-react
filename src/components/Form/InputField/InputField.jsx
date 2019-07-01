import React from 'react'

function InputField(props) {
    return (
        <input
            id={props.id}
            className={`ff-input ${props.className || ""}`}
            placeholder={props.placeholder}
            value={props.value}
            type={props.type}
            required={props.required}
            pattern={props.pattern}
            readOnly={props.readonly}
            onChange={props.onChange}
        />
    )
}

export default InputField
