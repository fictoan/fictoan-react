import React from 'react'

function FormUnit(props) {
    return (
        <div id={props.id} className={`ff-form-unit ${props.className || ""}`} >
            {props.children}
        </div>
    )
}

export default FormUnit
