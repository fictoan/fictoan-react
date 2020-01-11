import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element } from "../../Element/Element";

import { SidebarWrapperStyled } from "./SidebarWrapper.styled";
import { SidebarWrapperProps, SidebarWrapperElementType } from "../constants";

export const SidebarWrapper = ({collapsed, className, ...props}: SidebarWrapperProps) => {
    const classNames = [ className ]

    if (collapsed) {
        classNames.push("collapsed")
    }

    return (
        <Element<SidebarWrapperElementType>
            as={SidebarWrapperStyled}
            className={createClassName(classNames)}
            {...props}
        />
    );
}
