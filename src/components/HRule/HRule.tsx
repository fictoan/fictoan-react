import React, { HTMLProps } from "react";

import { createClassName } from "../../utils/classNames";
import { Element }   from "../Element/Element";

import { HRStyled }               from "./HRule.styled"
import { HRProps, HRElementType } from "./constants"

export const HRule = ({ sideMargin, className, thick, slim, ...props }: HRProps) => {
    const classNames = [ className ]

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
        <Element<HRElementType>
            as={HRStyled}
            className={createClassName(classNames)}
            {...props}
        />
    )
};
