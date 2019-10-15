import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent";
import { createClassName } from "../../utils/classNames"

interface CardProps extends HTMLProps<HTMLDivElement> {
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
