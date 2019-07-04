import React from 'react';

import { BaseComponent } from '../../BaseComponent';

const InputField = (props) => {
    return (
        <BaseComponent
            Element="input"
            baseClassName="ff-input"
            {...props}
        />
    )
}

export default InputField
