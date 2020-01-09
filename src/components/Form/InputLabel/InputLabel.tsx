import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { InputLabelProps } from "./constants";

function InputLabel({
    label,
    helpText,
    errorText,
    ...props
}: InputLabelProps) {
    return (
        <BaseComponent<HTMLLabelElement>
            Element="label"
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
        </BaseComponent>
    );
}

export default InputLabel;
