import React from "react";

import { createClassName } from "src/utils/classNames"
import { Element } from "../Element/Element";

import { ButtonStyled } from "./Button.styled"
import { ButtonProps, ButtonElementType } from "./constants";

export const Button = ({ size, shape, shadow, border, type, isLoading, hasDelete, className, ...props }: ButtonProps) => {
    const classNames = [className];

    if (className) {
        classNames.push(className);
    }

    if (type) {
        classNames.push(type);
    }

    if (size) {
        classNames.push(`size-${size}`);
    }

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }

    if (border) {
        classNames.push(`border-${border}`);
    }

    if (isLoading) {
        classNames.push("with-loader");
    }

    if (hasDelete) {
        classNames.push("with-delete");
    }

    return (
        <Element<ButtonElementType>
            as={ButtonStyled}
            className={createClassName(classNames)}
            {...props}
        />
    );
}
