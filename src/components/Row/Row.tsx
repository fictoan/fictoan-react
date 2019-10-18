import React, { HTMLProps } from "react";

import { createClassName } from "../../utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface RowProps extends BaseAndHTMLProps<HTMLDivElement> {
    sidePadding?: "tiny" | "small" | "medium" | "large" | "huge";
    gutters?: "none" | "tiny" | "small" | "medium" | "large" | "huge";
    retainLayoutOnTabLS?: boolean;
    retainLayoutOnTabPT?: boolean;
    retainLayoutOnMobile?: boolean;
    retainLayoutAlways?: boolean;
}

const Row = ({ sidePadding, className, gutters, retainLayoutOnTabLS, retainLayoutOnTabPT, retainLayoutOnMobile, retainLayoutAlways, ...props }: RowProps) => {

    const classNames = [
        className
    ]

    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`)
    }

    if (["tiny", "small", "large", "huge"].includes(gutters)) {
        classNames.push(`${gutters}-gutters`)
    }
    else if (gutters == "none") {
        classNames.push("no-gutters")
    } else {
        classNames.push("medium-gutters")
    }

    if (retainLayoutOnTabLS) {
        classNames.push("retain-layout-on-tab-ls")
    }

    if (retainLayoutOnTabPT) {
        classNames.push("retain-layout-on-tab-pt")
    }

    if (retainLayoutOnMobile) {
        classNames.push("retain-layout-on-mobile")
    }

    if (retainLayoutAlways) {
        classNames.push("retain-layout-on-mobile retain-layout-on-tab-ls retain-layout-on-tab-pt")
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
