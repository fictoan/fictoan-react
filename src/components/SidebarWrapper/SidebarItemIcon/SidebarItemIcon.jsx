import React from 'react'

function SidebarItemIcon(props) {
    return (
        <picture id={props.id} className={`sidebar-icon ${props.className || ""}`}>
            {props.children}
        </picture>
    )
}

export default SidebarItemIcon
