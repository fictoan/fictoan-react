import React from 'react'

function SidebarItemText(props) {
    return (
        <p id={props.id} className={`sidebar-text ${props.className || ""}`}>
            {props.children}
        </p>
    )
}

export default SidebarItemText
