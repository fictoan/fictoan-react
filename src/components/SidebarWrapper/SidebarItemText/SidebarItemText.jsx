import React from 'react'

function SidebarItemText(props) {
    return (
        <p id={props.id} className={`sidebar-text ${props.className || ""}`}>
            {props.linkText}
        </p>
    )
}

export default SidebarItemText
