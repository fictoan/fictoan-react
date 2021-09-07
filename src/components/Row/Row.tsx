import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { RowStyled } from "./Row.styled";

// prettier-ignore
export interface RowCustomProps {
    sidePadding          ? : "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    gutters              ? : "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    retainLayoutOnTabLS  ? : boolean;
    retainLayoutOnTabPT  ? : boolean;
    retainLayoutOnMobile ? : boolean;
    retainLayoutAlways   ? : boolean;
}

export type RowElementType = HTMLDivElement;
export type RowProps = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;

export const Row = React.forwardRef(
    (
        {
            sidePadding,
            gutters = "medium",
            retainLayoutOnTabLS,
            retainLayoutOnTabPT,
            retainLayoutOnMobile,
            retainLayoutAlways,
            ...props
        }: RowProps,
        ref: React.Ref<RowElementType>
    ) => {
        let classNames = [];

        if (sidePadding) {
            classNames.push(`side-padding-${sidePadding}`);
        }

        if (gutters) {
            classNames.push(gutters === "none" ? "no-gutters" : `${gutters}-gutters`);
        }

        if (retainLayoutOnTabLS) {
            classNames.push("retain-layout-on-tab-ls");
        }

        if (retainLayoutOnTabPT) {
            classNames.push("retain-layout-on-tab-pt");
        }

        if (retainLayoutOnMobile) {
            classNames.push("retain-layout-on-mobile");
        }

        if (retainLayoutAlways) {
            classNames.push("retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile");
        }

        return (
            <Element<RowElementType>
                as={RowStyled}
                ref={ref}
                classNames={classNames}
                marginBottom="tiny"
                isFullWidth
                {...props}
            />
        );
    }
);
