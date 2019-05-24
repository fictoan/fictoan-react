import React from 'react'

function InputLabel(props) {
    return (
        <label id={props.id} className={`ff-input-label ${props.className || ""}`}>
            { props.value }

            {
                props.helpText && props.helpText.length > 0 &&
                <span className="ff-input-help">
                    {props.helpText}
                </span>
            }

            {
                props.errorText && props.errorText.length > 0 &&
                <span className="ff-input-error">
                    {props.errorText}
                </span>
            }
        </label>
    )
}

export default InputLabel
