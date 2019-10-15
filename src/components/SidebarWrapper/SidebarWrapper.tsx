import React, { HTMLProps } from "react";

import { createClassName } from "../../utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface SidebarWrapperProps extends BaseAndHTMLProps<HTMLDivElement> {
    collapsed?: boolean;
}

const SidebarWrapper = ({collapsed, className, ...props}: SidebarWrapperProps) => {
    const classNames = [
        className
    ]

    if (collapsed) {
        classNames.push("collapsed")
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            className={createClassName(classNames)}
            baseClassName="sidebar-wrapper"
            {...props}
        />
    )
};

export default SidebarWrapper;
