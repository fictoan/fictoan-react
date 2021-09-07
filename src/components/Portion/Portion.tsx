import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { PortionStyled } from "./Portion.styled";

// prettier-ignore
export interface PortionCustomProps {
    desktopSpan  ? : string;
    tabPTSpan    ? : string;
    tabLSSpan    ? : string;
    mobileSpan   ? : string;
    isHorizontal ? : boolean;
}

export type PortionElementType = HTMLDivElement;
export type PortionProps = Omit<CommonAndHTMLProps<PortionElementType>, keyof PortionCustomProps> & PortionCustomProps;

export const Portion = React.forwardRef(
    (
        { desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, isHorizontal, ...props }: PortionProps,
        ref: React.Ref<PortionElementType>
    ) => {
        let classNames = [];

        if (desktopSpan || tabLSSpan || tabPTSpan || mobileSpan) {
            if (desktopSpan) {
                classNames.push(`${desktopSpan}`);
            }

            if (tabLSSpan) {
                classNames.push(`${tabLSSpan}-on-tab-ls`);
            }

            if (tabPTSpan) {
                classNames.push(`${tabPTSpan}-on-tab-pt`);
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
