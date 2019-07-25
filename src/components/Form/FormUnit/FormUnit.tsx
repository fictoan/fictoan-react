import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

const FormUnit = (props: PropType) =>
    <BaseComponent
        Element="div"
        baseClassName="ff-form-unit"
        {...props}
    />

export default FormUnit
