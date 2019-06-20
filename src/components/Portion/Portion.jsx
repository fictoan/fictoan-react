import React from 'react'

function Portion(props) {
    return (
        <div id={props.id} className={`portion ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default Portion
