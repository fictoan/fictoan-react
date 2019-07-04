import React from 'react';

import { BaseComponent } from '../../BaseComponent';

const FormGroup = (props) =>
    <BaseComponent
        Element="div"
        baseClassName="ff-input-group"
        {...props}
    />

export default FormGroup
