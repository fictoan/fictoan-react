import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    value: string;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
    border?: string;
    isLoading?: boolean;
    hasDelete?: boolean;
};

const Button = ({ value, size, shape, shadow, border, className, isLoading, hasDelete, ...props }: ButtonProps) => {
    const classNames = [];

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
        <BaseComponent<HTMLButtonElement>
            Element="button"
            baseClassName="ff-button"
            className={createClassName(classNames)}
            {...props}
        >
            {value}
        </BaseComponent>
    );
};

export default Button;
