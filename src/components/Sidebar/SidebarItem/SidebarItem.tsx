import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarItemStyled } from  "./SidebarItem.styled";
import { SidebarItemProps, SidebarItemIconElementType } from "../constants"

export const SidebarItem = (props: SidebarItemProps) => (
    <BaseComponent<SidebarItemIconElementType>
        Element={SidebarItemStyled}
        baseClassName="sidebar-item"
        {...props}
    />
);