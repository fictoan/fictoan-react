import React from "react";

import { Element } from "../../Element/Element";

import { SidebarSublinkGroupStyled } from "./SidebarSublinkGroup.styled";
import { SidebarSublinkGroupProps, SidebarSublinkGroupElementType } from "../constants";

export const SidebarSublinkGroup = (props: SidebarSublinkGroupProps) => (
    <Element<SidebarSublinkGroupElementType>
        as={SidebarSublinkGroupStyled}
        {...props}
    />
);
