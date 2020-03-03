import React from "react";

import { Element } from "../Element/Element";

import { RowStyled } from "./Row.styled"
import { RowProps, RowElementType } from "./constants";

export const Row = ({ sidePadding, className, gutters, retainLayoutOnTabLS, retainLayoutOnTabPT, retainLayoutOnMobile, retainLayoutAlways, ...props }: RowProps) => {

    const classNames = [className]

    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`)
    }

    if (["tiny", "small", "large", "huge"].includes(gutters)) {
        classNames.push(`${gutters}-gutters`)
    }
    else if (gutters == "none") {
        classNames.push("no-gutters")
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
        classNames.push("retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile")
    }

    return (
        <Element<RowElementType>
            as={RowStyled}
            classNames={classNames}
            {...props}
        />
    );
}
