import React from 'react'

function FormGroup(props) {
    return (
        <div id={props.id} className={`ff-input-group ${props.className || ""}`} >
            {props.children}
        </div>
    )
}

export default FormGroup
