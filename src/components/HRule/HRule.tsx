import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";
import { createClassName } from "../../utils/classNames";

interface HRuleProps extends BaseAndHTMLProps<HTMLDivElement> {
    sideMargin?: "tiny" | "small" | "medium" | "large" | "huge";
}

const HRule = ({sideMargin, className, ...props}: HRuleProps) => {
    const classNames = [
        className
    ]

    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`)
    }

    return (
        <BaseComponent<HTMLHRElement>
            Element="hr"
            className={createClassName(classNames)}
            {...props}
        />
    )
};

export default HRule;
