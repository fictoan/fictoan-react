import React from 'react'

function ContentWrapper(props) {
    return (
        <div id={props.id} className={`content-wrapper ${props.className || ""}`}>
            {props.children}
        </div>
    )
}

export default ContentWrapper
