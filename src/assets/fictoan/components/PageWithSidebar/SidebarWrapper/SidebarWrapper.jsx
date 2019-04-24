import React from 'react'

function SidebarWrapper(props) {
    return (
        <div id={props.id} className={`sidebar-wrapper ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default SidebarWrapper
