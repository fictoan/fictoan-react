import React from 'react'

import { BaseComponent } from '../BaseComponent';

const Form = (props) =>
    <BaseComponent
        Element="form"
        baseClassName="ff-form"
        {...props}
    />

export default Form
