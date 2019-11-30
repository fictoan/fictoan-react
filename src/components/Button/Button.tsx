import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
    value: string;
    loading?: boolean;
};

const Button = ({ value, className, loading, ...props }: ButtonProps) => {
    const classNames = [];

    if (className) {
        classNames.push(className);
    }

    if (loading) {
        classNames.push("with-loader");
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
