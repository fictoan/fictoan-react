import React from 'react'

function SidebarHeader(props) {
    return (
        <div id={props.id} className={`sidebar-header ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default SidebarHeader
