import React from "react";

import { Element } from "../Element/Element";

import { ButtonStyled } from "./Button.styled"
import { ButtonProps, ButtonElementType } from "./constants";

export const Button = ({ size, shape, shadow, border, kind, isLoading, hasDelete, className, ...props }: ButtonProps) => {
    const classNames = [className];

    if (className) {
        classNames.push(className);
    }

    if (kind) {
        classNames.push(kind);
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
            classNames={classNames}
            {...props}
        />
    );
}
