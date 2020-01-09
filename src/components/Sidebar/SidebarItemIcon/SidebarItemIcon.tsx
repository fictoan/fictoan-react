import React, { HTMLProps } from "react";

import { Element } from "../../Element/Element";

import { SidebarItemIconStyled } from "./SidebarItemIcon.styled";
import { SidebarItemIconProps, SidebarItemIconElementType } from "../constants";

export const SidebarItemIcon = (props: SidebarItemIconProps) => (
    <Element<SidebarItemIconElementType>
        as={SidebarItemIconStyled}
        {...props}
    />
);
