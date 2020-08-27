import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinkStyled } from "./SidebarLink.styled";

export type SidebarLinkElementType = HTMLDivElement;
export type SidebarLinkProps = CommonAndHTMLProps<SidebarLinkElementType>;

export const SidebarLink = React.forwardRef(
    ({ ...props }: SidebarLinkProps, ref: React.Ref<SidebarLinkElementType>) => {
        return <Element<SidebarLinkElementType> as={SidebarLinkStyled} ref={ref} {...props} />;
    }
);
