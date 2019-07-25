import React from 'react'
import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";


const ContentWrapper = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="content-wrapper"
        {...props}
    />

export default ContentWrapper
