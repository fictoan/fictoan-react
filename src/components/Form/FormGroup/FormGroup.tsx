import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

const FormGroup = (props:PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="ff-input-group"
        {...props}
    />

export default FormGroup
