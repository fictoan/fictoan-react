import React from "react";

import { Element } from "../Element/Element";

import { CardStyled } from "./Card.styled";
import { CardProps, CardElementType } from "./constants";

export const Card = ({ shadow, shape, className, ...props }: CardProps) => {
    const classNames = [ className ]

    if (shape) {
        classNames.push(`shape-${shape}`)
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`)
    }

    return (
        <Element<CardElementType>
            as={CardStyled}
            classNames={classNames}
            {...props}
        />
    );
}
