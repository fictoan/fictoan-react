import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type SidebarWrapperElementType      = HTMLDivElement;
export type SidebarHeaderElementType       = HTMLDivElement;
export type SidebarItemElementType         = HTMLDivElement;
export type SidebarItemIconElementType     = HTMLDivElement;
export type SidebarItemTextElementType     = HTMLParagraphElement;
export type SidebarSublinkGroupElementType = HTMLDivElement;

export interface SidebarWrapperCustomProps {
    collapsed ? : boolean;
}

export interface SidebarItemTextCustomProps {
    linkText : string;
}

export type SidebarWrapperProps      = BaseAndHTMLProps<SidebarWrapperElementType> & SidebarWrapperCustomProps;
export type SidebarHeaderProps       = BaseAndHTMLProps<SidebarHeaderElementType>;
export type SidebarItemProps         = BaseAndHTMLProps<SidebarItemElementType>;
export type SidebarItemTextProps     = BaseAndHTMLProps<SidebarItemTextElementType> & SidebarItemTextCustomProps;
export type SidebarItemIconProps     = BaseAndHTMLProps<SidebarItemIconElementType>;
export type SidebarSublinkGroupProps = BaseAndHTMLProps<SidebarSublinkGroupElementType>;
