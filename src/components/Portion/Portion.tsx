import React from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent } from "../BaseComponent/BaseComponent";

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

    return <BaseComponent<PortionElementType>
        Element={PortionStyled}
        baseClassName="portion"
        className={createClassName(classNames)}
        {...props}
    />
};
