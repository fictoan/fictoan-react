import React from 'react';

import { BaseComponent } from '../../BaseComponent';
import { PropType } from "../../typings";

function InputLabel({
    value,
    helpText,
    errorText,
    ...props
}: PropType & {value:string; helpText: string; errorText: string}) {
    return (
        // @ts-ignore
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
