import React from "react";

import { createClassName } from "src/utils/classNames";
import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarWrapperStyled } from "./SidebarWrapper.styled"
import { SidebarWrapperProps, SidebarWrapperElementType } from "../constants"

export const SidebarWrapper = ({collapsed, className, ...props}: SidebarWrapperProps) => {
    const classNames = [ className ]

    if (collapsed) {
        classNames.push("collapsed")
    }

    return (
        <BaseComponent<SidebarWrapperElementType>
            Element={SidebarWrapperStyled}
            className={createClassName(classNames)}
            {...props}
        />
    )
};
