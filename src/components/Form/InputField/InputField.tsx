import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

const InputField = (props: PropType) => {
    return (
        <BaseComponent
            Element="input"
            baseClassName="ff-input"
            {...props}
        />
    )
}

export default InputField
