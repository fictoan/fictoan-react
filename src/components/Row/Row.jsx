import React from 'react'

function Row(props) {
    return (
        <div id={props.id} className={`row ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default Row
