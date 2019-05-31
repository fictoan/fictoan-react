import React from 'react'

function TextArea(props) {
    return (
        <textarea
            id={props.id}
            className={`ff-input ${props.className || ""}`}
            placeholder=" "
            rows={props.rows}
            required={props.required}
            readOnly={props.readonly}
        />
    )
}

export default TextArea
