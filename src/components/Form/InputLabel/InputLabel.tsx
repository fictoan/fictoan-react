import React from "react";

import { Element } from "../../Element/Element";

import { InputLabelProps, InputLabelElementType } from "./constants";

export const InputLabel = ({ label, helpText, errorText, ...props }: InputLabelProps) => {
    return (
        <Element<InputLabelElementType>
            as="label"
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
