import React from "react";

import { Element } from "../../Element/Element";

import { SidebarSectionStyled } from "./SidebarSection.styled";
import { SidebarSectionProps, SidebarSectionElementType } from "../constants";

export const SidebarSection = (props: SidebarSectionProps) => {
    return (
        <Element<SidebarSectionElementType>
            as={SidebarSectionStyled}
            {...props}
        />
    );
};