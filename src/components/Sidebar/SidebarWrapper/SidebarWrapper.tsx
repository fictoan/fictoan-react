import React from "react";

import { Element } from "../../Element/Element";

import { SidebarWrapperStyled } from "./SidebarWrapper.styled";
import { SidebarWrapperProps, SidebarWrapperElementType } from "../constants";

export const SidebarWrapper = ({collapsed, className, ...props}: SidebarWrapperProps) => {
    const classNames = [ className ]

    if (collapsed) {
        classNames.push("collapsed");
    }

    return (
        <Element<SidebarWrapperElementType>
            as={SidebarWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}
