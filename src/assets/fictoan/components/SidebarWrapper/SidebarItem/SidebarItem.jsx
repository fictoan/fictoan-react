import React from 'react'

function SidebarItem(props) {
    return (
        <div id={props.id} className={`sidebar-item ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default SidebarItem
