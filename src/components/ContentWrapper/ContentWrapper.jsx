import React from 'react'
import { BaseComponent } from '../BaseComponent';

const ContentWrapper = (props) =>
    <BaseComponent
        Element="div"
        baseClassName="content-wrapper"
        {...props}
    />

export default ContentWrapper
