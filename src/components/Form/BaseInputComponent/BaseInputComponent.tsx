import React from "react";

import { Element } from "../../Element/Element";
import { createClassName } from "../../../utils/classNames";
import { BaseInputComponentWithIconProps } from "./constants";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

export const BaseInputComponent = <K extends {}>({
    as: Component,
    className,
    label,
    helpText,
    errorText,
    iconLeft,
    iconRight,
    validateThis,
    ...inputProps
}: BaseInputComponentWithIconProps<K>) => {
    const classNames = [className];

    if (iconLeft) {
        classNames.push("with-icon-left");
    }

    if (iconRight) {
        classNames.push("with-icon-right");
    }

    if (validateThis) {
        classNames.push("validate-this");
    }

    return (
        <FormItem>
            <Element<HTMLInputElement>
                as={Component}
                className={createClassName(classNames)}
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
};
