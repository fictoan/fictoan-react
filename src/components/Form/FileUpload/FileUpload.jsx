import React from 'react'

function FileUpload(props) {
    return (
        <input
            id={props.id}
            className={`ff-input ${props.className || ""}`}
            placeholder=" "
            value={props.value}
            type="file"
            required={props.required}
        />
    )
}

export default FileUpload
