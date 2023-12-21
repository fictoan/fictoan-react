import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface SidebarItemIconCustomProps {
    iconType?: "stroked" | "filled";
}
export declare type SidebarItemIconElementType = HTMLDivElement;
export declare type SidebarItemIconProps = Omit<CommonAndHTMLProps<SidebarItemIconElementType>, keyof SidebarItemIconCustomProps> & SidebarItemIconCustomProps;
export declare const SidebarItemIcon: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "iconType"> & SidebarItemIconCustomProps & React.RefAttributes<HTMLDivElement>>;
