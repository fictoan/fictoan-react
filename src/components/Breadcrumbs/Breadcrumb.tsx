import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { createClassName } from "src/utils/classNames";

interface BreadcrumbProps extends HTMLProps<HTMLLIElement> {
    className?: string;
    text?: string;
}

const Breadcrumb = ({ text, className, ...props }: BreadcrumbProps) => {
    const classNames = [className];

    if (text) {
        props.children = text;
    }

    return (
        <BaseComponent
            Element="li"
            baseClassName={`ff-breadcrumb-item`}
            className={createClassName(classNames)}
            {...props}
        />
    );
}

export default Breadcrumb;
