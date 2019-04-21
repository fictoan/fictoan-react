import React from 'react'

function Form(props) {
    return (
        <div id={props.id} className={`ff-form ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Form
