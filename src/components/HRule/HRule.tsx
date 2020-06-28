import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { HRStyled } from "./HRule.styled";


export interface HRCustomProps {
    kind       ? :  "primary" | "secondary" | "tertiary";
    sideMargin ? :  "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}

export type HRElementType = HTMLHRElement;
export type HRProps       = CommonAndHTMLProps<HRElementType> & HRCustomProps;

export const HRule = ({
    kind,
    sideMargin,
    ...props
}: HRProps) => {
    let classNames = [];

    if (kind) {
        classNames.push(kind);
    }

    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`);
    }

    return (
        <Element<HRElementType>
            as={HRStyled}
            classNames={classNames}
            {...props}
        />
    );
}

HRule.defaultProps = {
    kind : "primary"
}
