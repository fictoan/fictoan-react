import React from 'react'

function InputLabel(props) {
    return (
        <label id={props.id} className={`ff-input-label ${props.className}`}>
            {props.value}
        </label>
    )
}

export default InputLabel
