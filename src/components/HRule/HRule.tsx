import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./h-rule.css";

// prettier-ignore
export interface HRCustomProps {
    kind       ? :  "primary" | "secondary" | "tertiary";
    sideMargin ? :  "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}

export type HRElementType = HTMLHRElement;
export type HRProps = Omit<CommonAndHTMLProps<HRElementType>, keyof HRCustomProps> & HRCustomProps;

export const HRule = React.forwardRef(({ kind, sideMargin, ...props }: HRProps, ref: React.Ref<HRElementType>) => {
    let classNames = [];

    if (kind) {
        classNames.push(kind);
    }

    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`);
    }

    return (
        <Element<HRElementType>
            as="hr"
            ref={ref}
            classNames={classNames}
            marginTop="small"
            marginBottom="small"
            {...props}
        />
    );
});
