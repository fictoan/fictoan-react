import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

import { RowStyled } from "./Row.styled";

// prettier-ignore
export interface RowCustomProps {
    sidePadding                    ? : "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    gutters                        ? : SpacingTypes;
    retainLayoutOnTabletLandscape  ? : boolean;
    retainLayoutOnTabletPortrait   ? : boolean;
    retainLayoutOnMobile           ? : boolean;
    retainLayoutAlways             ? : boolean;
}

export type RowElementType = HTMLDivElement;
export type RowProps = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;

export const Row = React.forwardRef(
    (
        {
            sidePadding,
            gutters = "medium",
            retainLayoutOnTabletLandscape,
            retainLayoutOnTabletPortrait,
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

        if (retainLayoutOnTabletLandscape) {
            classNames.push("retain-layout-on-tablet-landscape");
        }

        if (retainLayoutOnTabletPortrait) {
            classNames.push("retain-layout-on-tablet-portrait");
        }

        if (retainLayoutOnMobile) {
            classNames.push("retain-layout-on-mobile");
        }

        if (retainLayoutAlways) {
            classNames.push("retain-layout-on-tablet-landscape retain-layout-on-tablet-portrait retain-layout-on-mobile");
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
