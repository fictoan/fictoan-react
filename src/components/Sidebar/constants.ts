import { CommonAndHTMLProps } from "../Element/constants";

export type SidebarWrapperElementType      = HTMLDivElement;
export type SidebarHeaderElementType       = HTMLDivElement;
export type SidebarItemElementType         = HTMLDivElement;
export type SidebarItemIconElementType     = HTMLDivElement;
export type SidebarItemTextElementType     = HTMLParagraphElement;
export type SidebarSublinkGroupElementType = HTMLDivElement;
export type SidebarFooterElementType       = HTMLDivElement;

export interface SidebarWrapperCustomProps {
    collapsed ? : boolean;
}

export interface SidebarItemIconCustomProps {
    iconType ? : "stroked" | "filled";
}

export interface SidebarItemTextCustomProps {
    linkText : string;
}

export type SidebarWrapperProps      = CommonAndHTMLProps<SidebarWrapperElementType> & SidebarWrapperCustomProps;
export type SidebarHeaderProps       = CommonAndHTMLProps<SidebarHeaderElementType>;
export type SidebarItemProps         = CommonAndHTMLProps<SidebarItemElementType>;
export type SidebarItemTextProps     = CommonAndHTMLProps<SidebarItemTextElementType> & SidebarItemTextCustomProps;
export type SidebarItemIconProps     = CommonAndHTMLProps<SidebarItemIconElementType> & SidebarItemIconCustomProps;
export type SidebarSublinkGroupProps = CommonAndHTMLProps<SidebarSublinkGroupElementType>;
export type SidebarFooterProps       = CommonAndHTMLProps<SidebarFooterElementType>;