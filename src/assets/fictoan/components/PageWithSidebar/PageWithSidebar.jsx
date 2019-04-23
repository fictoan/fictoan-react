import React from 'react'

function PageWithSidebar(props) {
    return (
        <div id={props.id} className={`page-with-sidebar ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default PageWithSidebar
