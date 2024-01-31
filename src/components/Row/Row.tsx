import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

import "./row.css";

// prettier-ignore
interface RowCustomProps {
    gutters                       ? : SpacingTypes;
    retainLayoutOnTabletLandscape ? : boolean;
    retainLayoutOnTabletPortrait  ? : boolean;
    retainLayoutOnMobile          ? : boolean;
    retainLayoutAlways            ? : boolean;
}

export type RowElementType = HTMLDivElement;
export type RowProps = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;

export const Row = React.forwardRef(
    (
        {
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

        if (gutters) {
            classNames.push(gutters === "none" ? "no-gutters" : `${gutters}-gutters`);
        }

        // TOP LEVEL CHECK =====================================================
        // if (layout) {
        //     classNames.push(`layout-${layout}`);
        // }

        // CONDITIONAL GUTTERS =================================================
        // Add medium gutters by default for grid layouts only, remove them for flexbox layouts
        // const conditionalGutters = gutters ?? (layout === "grid" ? "medium" : "none");
        //
        // if (conditionalGutters) {
        //     classNames.push(conditionalGutters === "none" ? "no-gutters" : `${conditionalGutters}-gutters`);
        // }

        // FLEXBOX-SPECIFIC CLASSNAMES =========================================
        // if (equaliseChildren || equalizeChildren) {
        //     classNames.push("equalise-children");
        // }

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
