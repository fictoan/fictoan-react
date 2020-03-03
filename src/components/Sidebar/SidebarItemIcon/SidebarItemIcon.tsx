import React from "react";

import { Element } from "../../Element/Element";

import { SidebarItemIconStyled } from "./SidebarItemIcon.styled";
import { SidebarItemIconProps, SidebarItemIconElementType } from "../constants";

export const SidebarItemIcon = ({ iconType, className, ...props }: SidebarItemIconProps) => {
    const classNames = [ className ]

    if (iconType) {
        classNames.push(`icon-${iconType}`);
    }

    return (
        <Element<SidebarItemIconElementType>
            as={SidebarItemIconStyled}
            classNames={classNames}
            {...props}
        />
    );
}
