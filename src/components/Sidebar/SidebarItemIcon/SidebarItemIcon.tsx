import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarItemIconStyled } from "./SidebarItemIcon.styled";
import { SidebarItemIconProps, SidebarItemIconElementType } from "../constants";

export const SidebarItemIcon = (props: SidebarItemIconProps) => (
    <BaseComponent<SidebarItemIconElementType>
        Element={SidebarItemIconStyled}
        {...props}
    />
);
