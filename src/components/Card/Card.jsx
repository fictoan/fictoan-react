import React from 'react'

function Card(props) {
    return (
        <div id={props.id} className={`ff-card ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default Card
