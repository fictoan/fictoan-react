import React from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface CardProps extends BaseAndHTMLProps<HTMLDivElement> {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
}

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
            className={createClassName(classNames)}
            baseClassName="ff-card"
            {...props}
        />
    )
};

export default Card;
