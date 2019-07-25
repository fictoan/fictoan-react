import React from 'react'

import { BaseComponent } from '../BaseComponent';
import { PropType } from "../typings";

const Form = (props: PropType) =>
    <BaseComponent
        Element="form"
        baseClassName="ff-form"
        {...props}
    />

export default Form
