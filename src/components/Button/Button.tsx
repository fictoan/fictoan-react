import React from "react";

import { createClassName } from "src/utils/classNames"
import { Element } from "../Element/Element";

import { ButtonStyled } from "./Button.styled"
import { ButtonProps, ButtonElementType } from "./constants";

export const Button = ({ value, size, shape, shadow, border, className, isLoading, hasDelete, ...props }: ButtonProps) => {
    const classNames = [ className ];

    if (className) {
        classNames.push(className);
    }

    if (size) {
        classNames.push(`size-${size}`)
    }

    if (shape) {
        classNames.push(`shape-${shape}`)
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`)
    }

    if (border) {
        classNames.push(`border-${border}`)
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
        >
            {value}
        </Element>
    );
};
