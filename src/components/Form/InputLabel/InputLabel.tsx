import React from "react";

import { Element } from "../../Element/Element";

import { InputLabelProps } from "./constants";

function InputLabel({
    label,
    helpText,
    errorText,
    ...props
}: InputLabelProps) {
    return (
        <Element<HTMLLabelElement>
            as="label"
            baseClassName="ff-input-label"
            {...props}
        >
            {label}

            {helpText && helpText.length > 0 && (
                <span className="ff-input-help">{helpText}</span>
            )}

            {errorText && errorText.length > 0 && (
                <span className="ff-input-error">{errorText}</span>
            )}
        </Element>
    );
}

export default InputLabel;
