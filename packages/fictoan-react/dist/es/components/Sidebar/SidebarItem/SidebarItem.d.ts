import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface SidebarItemCustomProps {
    hasAlert?: boolean;
}
export declare type SidebarItemElementType = HTMLDivElement;
export declare type SidebarItemProps = Omit<CommonAndHTMLProps<SidebarItemElementType>, keyof SidebarItemCustomProps> & SidebarItemCustomProps;
export declare const SidebarItem: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "hasAlert"> & SidebarItemCustomProps & React.RefAttributes<HTMLDivElement>>;
