import React from 'react'

function InputField(props) {
    return (
        <input id={props.id} className={`ff-input ${props.className || ""}`} placeholder=" " type={props.type} required={props.required} pattern={props.pattern} />
    )
}

export default InputField
