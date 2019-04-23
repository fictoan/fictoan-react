import React from 'react'

function InputLabel(props) {
    return (
        <label id={props.id} className={`ff-input-label ${props.className || ""}`}>
            {props.value}
            {
                props.help.length > 0 &&
                <span className="ff-input-help">
                    {props.help}
                </span>
            }
        </label>
    )
}

export default InputLabel
