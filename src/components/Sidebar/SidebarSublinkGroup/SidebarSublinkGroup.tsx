import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarSublinkGroupStyled } from "./SidebarSublinkGroup.styled";
import { SidebarSublinkGroupProps, SidebarSublinkGroupElementType } from "../constants";

export const SidebarSublinkGroup = (props: SidebarSublinkGroupProps) => (
    <BaseComponent<SidebarSublinkGroupElementType>
        Element={SidebarSublinkGroupStyled}
        {...props}
    />
);
