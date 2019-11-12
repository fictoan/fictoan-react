import React from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface PortionProps extends BaseAndHTMLProps<HTMLDivElement> {
    desktopWidth? : string;
    tabPTWidth? : string;
    tabLSWidth? : string;
    mobileWidth? : string;
}

const Portion = ({ desktopWidth, mobileWidth, tabLSWidth, tabPTWidth, className, ...props }: PortionProps) => {
    const classNames = [className];

    if (desktopWidth || tabLSWidth || tabPTWidth || mobileWidth) {
        if (desktopWidth) {
            classNames.push(`${desktopWidth}`);
        }
        if (tabLSWidth) {
            classNames.push(`${tabLSWidth}-on-tab-ls`);
        }
        if (tabPTWidth) {
            classNames.push(`${tabPTWidth}-on-tab-pt`);
        }
        if (mobileWidth) {
            classNames.push(`${mobileWidth}-on-mobile`);
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
