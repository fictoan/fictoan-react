import React from "react";

import { createClassName } from "src/utils/classNames"
import { BaseComponent } from "../BaseComponent/BaseComponent";

import { CardStyled } from "./Card.styled";
import { CardProps, CardElementType } from "./constants";

export const Card = ({ shadow, shape, className, ...props }: CardProps) => {
    const classNames = [
        className
    ]

    if (shape) {
        classNames.push(`shape-${shape}`)
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`)
    }

    return (
        <BaseComponent<CardElementType>
            Element={CardStyled}
            className={createClassName(classNames)}
            {...props}
        />
    )
};
