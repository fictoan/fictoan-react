// FRAMEWORK ============================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES =============================================================================================================
import "./portion.css";

// TYPES =============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";
import { SpanTypes } from "./types";

// prettier-ignore
export interface PortionCustomProps {
    desktopSpan         ? : SpanTypes;
    tabletLandscapeSpan ? : SpanTypes;
    tabletPortraitSpan  ? : SpanTypes;
    mobileSpan          ? : SpanTypes;
    isHorizontal        ? : boolean;
    role                ? : string;
}

export type PortionElementType = HTMLDivElement;
export type PortionProps = Omit<CommonAndHTMLProps<PortionElementType>, keyof PortionCustomProps> & PortionCustomProps;

// COMPONENT //////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Portion = React.forwardRef(
    (
        {
            desktopSpan,
            mobileSpan,
            tabletLandscapeSpan,
            tabletPortraitSpan,
            isHorizontal,
            role,
            ...props
        }: PortionProps,
        ref: React.Ref<PortionElementType>
    ) => {
        // CLASS NAMES -------------------------------------------------------------------------------------------------
        let classNames = [];

        if (desktopSpan || tabletLandscapeSpan || tabletPortraitSpan || mobileSpan) {
            if (desktopSpan) {
                classNames.push(`${desktopSpan}`);
            }

            if (tabletLandscapeSpan) {
                classNames.push(`${tabletLandscapeSpan}-on-tablet-landscape`);
            }

            if (tabletPortraitSpan) {
                classNames.push(`${tabletPortraitSpan}-on-tablet-portrait`);
            }

            if (mobileSpan) {
                classNames.push(`${mobileSpan}-on-mobile`);
            }
        } else {
            classNames.push("whole");
        }

        if (isHorizontal) {
            classNames.push("horizontal");
        }

        // RENDER ---------------------------------------------------------------------------------------------------
        return (
            <Element<PortionElementType>
                as="div"
                data-portion
                ref={ref}
                classNames={classNames}
                role={role}
                {...props}
            />
        );
    }
);
