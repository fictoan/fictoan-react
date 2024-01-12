import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

import "./row.css";

// prettier-ignore
interface RowCommonProps {
    sidePadding                   ? : "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    gutters                       ? : SpacingTypes;
    retainLayoutOnTabletLandscape ? : boolean;
    retainLayoutOnTabletPortrait  ? : boolean;
    retainLayoutOnMobile          ? : boolean;
    retainLayoutAlways            ? : boolean;
}

type ConditionalLayoutProps = | {
    layout             : "grid";
    equaliseChildren ? : never;
    equalizeChildren ? : never;
} | {
    layout             : "flexbox";
    equaliseChildren ? : boolean;
    equalizeChildren ? : boolean;
};

export type RowElementType = HTMLDivElement;
export type RowCustomProps = RowCommonProps & ConditionalLayoutProps;
export type RowProps       = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;

export const Row = React.forwardRef(
    (
        {
            layout = "grid",
            gutters,
            retainLayoutOnTabletLandscape,
            retainLayoutOnTabletPortrait,
            retainLayoutOnMobile,
            retainLayoutAlways,
            equaliseChildren,
            equalizeChildren,
            ...props
        }: RowProps,
        ref: React.Ref<RowElementType>
    ) => {
        let classNames = [];

        // TOP LEVEL CHECK =====================================================
        if (layout) {
            classNames.push(`layout-${layout}`);
        }

        // CONDITIONAL GUTTERS =================================================
        // Add medium gutters by default for grid layouts only, remove them for flexbox layouts
        const conditionalGutters = gutters ?? (layout === "grid" ? "medium" : "none");

        if (conditionalGutters) {
            classNames.push(conditionalGutters === "none" ? "no-gutters" : `${conditionalGutters}-gutters`);
        }

        // FLEXBOX-SPECIFIC CLASSNAMES =========================================
        if (equaliseChildren || equalizeChildren) {
            classNames.push("equalise-children");
        }

        // COMMON CLASSNAMES ===================================================
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
            classNames.push(
                "retain-layout-on-tablet-landscape retain-layout-on-tablet-portrait retain-layout-on-mobile"
            );
        }

        return (
            <Element<RowElementType>
                as="div"
                data-row
                ref={ref}
                classNames={[classNames.join(" ")]}
                marginBottom="tiny"
                {...props}
            />
        );
    }
);
