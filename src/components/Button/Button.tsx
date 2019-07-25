import React from "react";

import { BaseComponent } from "../BaseComponent";
import { PropType } from "../typings";

type ButtonProps = PropType & {value: string; loading:boolean}
const Button = ({ value, className, loading, ...props }:ButtonProps) => {
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (loading) {
        classNames.push("with-loader");
    }

    return (
        // @ts-ignore
        <BaseComponent
            Element="button"
            baseClassName="ff-button"
            className={classNames.join(' ')}
            {...props}
        >
            {value}
        </BaseComponent>
    );
};

export default Button;
