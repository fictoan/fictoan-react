import React, { HTMLProps } from "react";

import { createClassName } from "../../../utils/classNames";
import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { BaseInputComponentProps } from "./typings";

import InputLabel from "../InputLabel/InputLabel";

export const BaseInputComponent = <K extends {}>({
    Element,
    baseClassName,
    className,
    label,
    helpText,
    errorText,
    iconLeft,
    iconRight,
    validateThis,
    ...inputProps
}: HTMLProps<K> & BaseInputComponentProps) => {
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
        <>
            <BaseComponent<HTMLInputElement>
                Element={Element}
                baseClassName={baseClassName}
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
        </>
    );
};
