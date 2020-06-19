import React from "react";

import { Element } from "../../Element/Element";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";
import { InputFieldElementType } from "../InputField/constants";
import { BaseInputComponentWithIconProps } from "./constants";

export const BaseInputComponent = <K extends InputFieldElementType>({
    as: Component,
    className,
    label,
    helpText,
    errorText,
    iconLeft,
    iconRight,
    validateThis,
    classNames,
    ...inputProps
}: BaseInputComponentWithIconProps<K>) => (
    <FormItem>
        <Element<K>
            as={Component}
            classNames={[
                className,
                iconLeft && "with-icon-left",
                iconRight && "with-icon-right",
                validateThis && "validate-this"
            ].concat(classNames)}
            {...inputProps}
        />

        {iconLeft && <span className="icon-left">{iconLeft}</span>}
        {iconRight && <span className="icon-right">{iconRight}</span>}

        {label && (
            <InputLabel
                label={label}
                helpText={helpText}
                errorText={errorText}
                htmlFor={inputProps.id}
            />
        )}
    </FormItem>
);
