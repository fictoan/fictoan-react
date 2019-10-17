import React, { HTMLProps } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";
import { createClassName } from "../../utils/classNames";

interface HRuleProps extends BaseAndHTMLProps<HTMLDivElement> {
    sideMargin?: "tiny" | "small" | "medium" | "large" | "huge";
    thick?: boolean;
    slim?: boolean;
}

const HRule = ({sideMargin, className, thick, slim, ...props}: HRuleProps) => {
    const classNames = [
        className
    ]

    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`)
    }

    if (thick) {
        classNames.push("thick")
    }

    if (slim) {
        classNames.push("slim")
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
