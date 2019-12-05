import React from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface PortionProps extends BaseAndHTMLProps<HTMLDivElement> {
    desktopSpan?: string;
    tabPTSpan?: string;
    tabLSSpan?: string;
    mobileSpan?: string;
}

const Portion = ({ desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, className, ...props }: PortionProps) => {
    const classNames = [className];

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

    return <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="portion"
        className={createClassName(classNames)}
        {...props}
    />
};

export default Portion;
