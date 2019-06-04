import React from 'react'

function RadioButton(props) {
    return (
        <div className="ff-radio">
            <input
                type="radio"
                id={props.id}
                name={props.name} />

            <label htmlFor={props.id}>{props.value}</label>
        </div>
    )
}

export default RadioButton
