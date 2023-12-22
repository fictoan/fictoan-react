import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./sidebar-footer.css";

export type SidebarFooterElementType = HTMLDivElement;
export type SidebarFooterProps = CommonAndHTMLProps<SidebarFooterElementType>;

export const SidebarFooter = React.forwardRef((props: SidebarFooterProps, ref: React.Ref<SidebarFooterElementType>) => {
    return <Element<SidebarFooterElementType> as="footer" data-sidebar-footer ref={ref} {...props} />;
});
