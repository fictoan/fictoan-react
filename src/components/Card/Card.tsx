import React from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { CardProps } from "./typings";

const Card = ({shadow, shape, className, ...props}: CardProps) => {
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
        <BaseComponent<HTMLDivElement>
            Element="div"
            baseClassName="ff-card"
            className={createClassName(classNames)}
            {...props}
        />
    )
};

export default Card;
