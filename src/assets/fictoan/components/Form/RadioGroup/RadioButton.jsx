import React from 'react'

function RadioButton(props) {
    return (
        <div className="ff-radio" onClick={()=>typeof props.onClick === 'function' && props.onClick(props.id, !props.isChecked)}>
            <input
                type="radio"
                id={props.id}
                name={props.name}
                checked={props.isChecked} />    
            <label htmlFor={props.id}>{props.value}</label>
        </div>
    )
}

export default RadioButton
