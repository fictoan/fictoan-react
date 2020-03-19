import { CommonAndHTMLProps } from "../Element/constants";

export type SidebarWrapperElementType      = HTMLDivElement;
export type SidebarHeaderElementType       = HTMLDivElement;
export type SidebarItemElementType         = HTMLDivElement;
export type SidebarItemIconElementType     = HTMLDivElement;
export type SidebarItemTextElementType     = HTMLParagraphElement;
export type SidebarSectionElementType      = HTMLDivElement;
export type SidebarSublinkGroupElementType = HTMLDivElement;
export type SidebarFooterElementType       = HTMLDivElement;

export interface SidebarWrapperCustomProps {
    collapsed ? : boolean;
}

export interface SidebarItemIconCustomProps {
    iconType ? : "stroked" | "filled";
}

export interface SidebarItemTextCustomProps {
    linkText  : string;
    weight  ? : "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size    ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type SidebarWrapperProps      = CommonAndHTMLProps<SidebarWrapperElementType> & SidebarWrapperCustomProps;
export type SidebarHeaderProps       = CommonAndHTMLProps<SidebarHeaderElementType>;
export type SidebarItemProps         = CommonAndHTMLProps<SidebarItemElementType>;
export type SidebarItemTextProps     = CommonAndHTMLProps<SidebarItemTextElementType> & SidebarItemTextCustomProps;
export type SidebarItemIconProps     = CommonAndHTMLProps<SidebarItemIconElementType> & SidebarItemIconCustomProps;
export type SidebarSectionProps      = CommonAndHTMLProps<SidebarSectionElementType>;
export type SidebarSublinkGroupProps = CommonAndHTMLProps<SidebarSublinkGroupElementType>;
export type SidebarFooterProps       = CommonAndHTMLProps<SidebarFooterElementType>;