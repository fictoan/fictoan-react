import React from 'react'

function SidebarItemText(props) {
    return (
        <div id={props.id} className={`sidebar-text ${props.className}`}>
            {props.children}
        </div>
    )
}

export default SidebarItemText
