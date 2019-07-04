import React from 'react';

import { BaseComponent } from '../../BaseComponent';

function InputLabel({
    value,
    helpText,
    errorText,
    ...props
}) {
    return (
        <BaseComponent
            Element="label"
            baseClassName="ff-input-label"
            {...props}
        >
            {value}

            {
                helpText && helpText.length > 0 &&
                <span className="ff-input-help">
                    {helpText}
                </span>
            }

            {
                errorText && errorText.length > 0 &&
                <span className="ff-input-error">
                    {errorText}
                </span>
            }
        </BaseComponent>
    )
}

export default InputLabel
