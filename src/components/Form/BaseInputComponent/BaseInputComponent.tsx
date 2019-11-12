import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import InputLabel from "../InputLabel/InputLabel";

import { createClassName } from "../../../utils/classNames";

import { BaseInputComponentProps } from "./typings";

export const BaseInputComponent = <K extends {}>({
    Element,
    baseClassName,
    className,
    iconLeft,
    iconRight,
    label,
    helpText,
    errorText,
    ...inputProps
}: HTMLProps<K> & BaseInputComponentProps) => {
    const classNames = [
        className
    ]

    if (iconLeft) {
        classNames.push("with-icon-left")
    }

    if (iconRight) {
        classNames.push("with-icon-right")
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
                    value={label}
                    helpText={helpText}
                    errorText={errorText}
                />
            )}
        </>
    );
}
