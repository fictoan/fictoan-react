import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./portion.css";
import { SpanTypes } from "./types";

// prettier-ignore
export interface PortionCustomProps {
    desktopSpan         ? : SpanTypes;
    tabletLandscapeSpan ? : SpanTypes;
    tabletPortraitSpan  ? : SpanTypes;
    mobileSpan          ? : SpanTypes;
    isHorizontal        ? : boolean;
}

export type PortionElementType = HTMLDivElement;
export type PortionProps = Omit<CommonAndHTMLProps<PortionElementType>, keyof PortionCustomProps> & PortionCustomProps;

export const Portion = React.forwardRef(
    (
        { desktopSpan, mobileSpan, tabletLandscapeSpan, tabletPortraitSpan, isHorizontal, ...props }: PortionProps,
        ref: React.Ref<PortionElementType>
    ) => {
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

        return (
            <Element<PortionElementType> as="div" data-portion ref={ref} classNames={classNames} {...props} />
        );
    }
);
