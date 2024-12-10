// FRAMEWORK ============================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES =============================================================================================================
import "./row.css";

// TYPES =============================================================================================================
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

// prettier-ignore
interface RowCustomProps {
    layout                        ? : "grid" | "flexbox";
    gutters                       ? : SpacingTypes;
    retainLayoutOnTabletLandscape ? : boolean;
    retainLayoutOnTabletPortrait  ? : boolean;
    retainLayoutOnMobile          ? : boolean;
    retainLayoutAlways            ? : boolean;
    groupLabel                    ? : string;     // Accessible label for the group
}

export type RowElementType = HTMLDivElement;
export type RowProps = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;

// TODO: Fix fixed gutter widths

// COMPONENT //////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Row = React.forwardRef(
    (
        {
            layout = "grid",
            gutters = "medium",
            retainLayoutOnTabletLandscape,
            retainLayoutOnTabletPortrait,
            retainLayoutOnMobile,
            retainLayoutAlways,
            groupLabel,
            ...props
        }: RowProps,
        ref: React.Ref<RowElementType>
    ) => {
        // CLASS NAMES -------------------------------------------------------------------------------------------------
        let classNames = [];

        if (layout) {
            classNames.push(`layout-${layout}`);
        }

        if (gutters) {
            classNames.push(gutters === "none" ? "no-gutters" : `${gutters}-gutters`);
        }

        // CONDITIONAL GUTTERS =========================================================================================
        // Add medium gutters by default for grid layouts only, remove them for flexbox layouts
        // const conditionalGutters = gutters ?? (layout === "grid" ? "medium" : "none");
        //
        // if (conditionalGutters) {
        //     classNames.push(conditionalGutters === "none" ? "no-gutters" : `${conditionalGutters}-gutters`);
        // }

        // FLEXBOX-SPECIFIC CLASSNAMES =================================================================================
        // if (equaliseChildren || equalizeChildren) {
        //     classNames.push("equalise-children");
        // }

        // COMMON CLASSNAMES ===========================================================================================
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

        // RENDER -----------------------------------------------------------------------------------------------------
        return (
            <Element<RowElementType>
                as="div"
                data-row
                ref={ref}
                classNames={[classNames.join(" ")]}
                marginBottom="tiny"
                role="grid"
                aria-label={groupLabel}
                {...props}
            />
        );
    }
);
