import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { PortionStyled } from "./Portion.styled";

// prettier-ignore
export interface PortionCustomProps {
    desktopSpan        ? : string;
    tabletLandscape    ? : string;
    tabletPortraitSpan ? : string;
    mobileSpan         ? : string;
    isHorizontal       ? : boolean;
}

export type PortionElementType = HTMLDivElement;
export type PortionProps = Omit<CommonAndHTMLProps<PortionElementType>, keyof PortionCustomProps> & PortionCustomProps;

export const Portion = React.forwardRef(
    (
        { desktopSpan, mobileSpan, tabletLandscape, tabletPortraitSpan, isHorizontal, ...props }: PortionProps,
        ref: React.Ref<PortionElementType>
    ) => {
        let classNames = [];

        if (desktopSpan || tabletLandscape || tabletPortraitSpan || mobileSpan) {
            if (desktopSpan) {
                classNames.push(`${desktopSpan}`);
            }

            if (tabletLandscape) {
                classNames.push(`${tabletLandscape}-on-tablet-landscape`);
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
            <Element<PortionElementType> as={PortionStyled} ref={ref} classNames={classNames} isFullWidth {...props} />
        );
    }
);
