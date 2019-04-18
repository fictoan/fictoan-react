import React from 'react'

function SidebarItemIcon(props) {
    return (
        <div id={props.id} className={`sidebar-icon ${props.className}`}>
            {props.children}
        </div>
    )
}

export default SidebarItemIcon
