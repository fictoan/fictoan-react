import React from 'react'

function Form(props) {
    return (
        <form id={props.id} className={`ff-form ${props.className || ""}`}>
            {props.children}
        </form>
    )
}

export default Form
