import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { PortionStyled } from "./Portion.styled";


export interface PortionCustomProps {
    desktopSpan  ? : string;
    tabPTSpan    ? : string;
    tabLSSpan    ? : string;
    mobileSpan   ? : string;
    isHorizontal ? : boolean;
}

export type PortionElementType = HTMLDivElement;
export type PortionProps = CommonAndHTMLProps<PortionElementType> & PortionCustomProps;

export const Portion = ({
    desktopSpan,
    mobileSpan,
    tabLSSpan,
    tabPTSpan,
    isHorizontal,
    ...props
}: PortionProps) => {
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
        <Element<PortionElementType>
            as={PortionStyled}
            classNames={classNames}
            {...props}
        />
    );
}
