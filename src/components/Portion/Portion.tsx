import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element } from "../Element/Element";

import { PortionStyled } from "./Portion.styled";
import { PortionProps, PortionElementType } from "./constants";

export const Portion = ({ desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, className, ...props }: PortionProps) => {
    const classNames = [ className ];

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

    return (
        <Element<PortionElementType>
            as={PortionStyled}
            className={createClassName(classNames)}
            {...props}
        />
    );
}
