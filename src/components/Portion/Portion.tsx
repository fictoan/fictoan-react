import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent/BaseComponent";
import { createClassName } from "src/utils/classNames";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface PortionProps extends BaseAndHTMLProps<HTMLDivElement> {
    desktopWidth : string;
    tabletPTWidth : string;
    tabletLSWidth : string;
    mobileWidth : string;
}

const Portion = ({ desktopWidth, mobileWidth, tabletLSWidth, tabletPTWidth, className, ...props }: PortionProps) => {
    const classNames = [className];

    if (desktopWidth || tabletLSWidth || tabletPTWidth || mobileWidth) {
        if (desktopWidth) {
            classNames.push(`${desktopWidth}`);
        }
        if (tabletLSWidth) {
            classNames.push(`${tabletLSWidth}-on-tab-ls`);
        }
        if (tabletPTWidth) {
            classNames.push(`${tabletPTWidth}-on-tab-pt`);
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
