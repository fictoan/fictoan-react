import React from 'react'
import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";

const Portion = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="portion"
        {...props}
    />

export default Portion
