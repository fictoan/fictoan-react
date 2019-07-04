import React from 'react'

import { BaseComponent } from '../BaseComponent';

const Button = ({ value, ...props }) =>
    <BaseComponent
        Element="button"
        baseClassName="ff-button"
        {...props}
    >
        {value}
    </BaseComponent>

export default Button
