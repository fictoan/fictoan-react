import React, { HTMLProps } from "react";

import { createClassName } from "../../utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface RowProps extends BaseAndHTMLProps<HTMLDivElement> {
    contentPadding?: "tiny" | "small" | "medium" | "large" | "huge";
}

const Row = ({contentPadding, className, ...props}: RowProps) => {
    const classNames = [
        className
    ]

    if (contentPadding) {
        classNames.push(`content-padding-${contentPadding}`)
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            baseClassName="row"
            className={createClassName(classNames)}
            {...props}
        />
    )
};

export default Row;
