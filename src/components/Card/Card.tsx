import React from "react";

import { createClassName } from "src/utils/classNames"
import { CardStyled } from "./Card.styled"
import { CardProps } from "./typings";

const Card = ({ shadow, shape, className, theme, ...props }: CardProps) => {
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
        <CardStyled
            Element="div"
            className={createClassName(classNames)}
            // {...props}
            theme={theme}
        />
    )
};

export default Card;
