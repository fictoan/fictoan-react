import React from 'react'

function Button(props) {
    return (
        <button id={props.id} className={`ff-button ${props.className || ""}`} disabled={props.disabled}>
            {props.value}
        </button>
    )
}

export default Button
