import React, { HTMLProps } from "react";

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
            className={classNames.join(" ")}
            {...props}
        >
            {value}
        </BaseComponent>
    );
};

export default Button;
