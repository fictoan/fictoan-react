import React from "react";

import { BaseComponent } from "../BaseComponent";

const Button = ({ value, className, loading, ...props }) => {
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (loading) {
        classNames.push("with-loader");
    }

    return (
        <BaseComponent
            Element="button"
            baseClassName="ff-button"
            className={className}
            {...props}
        >
            {value}
        </BaseComponent>
    );
};

export default Button;
