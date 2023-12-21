import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface SidebarHeaderCustomProps {
    isSticky?: boolean;
}
export declare type SidebarHeaderElementType = HTMLDivElement;
export declare type SidebarHeaderProps = Omit<CommonAndHTMLProps<SidebarHeaderElementType>, keyof SidebarHeaderCustomProps> & SidebarHeaderCustomProps;
export declare const SidebarHeader: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "isSticky"> & SidebarHeaderCustomProps & React.RefAttributes<HTMLDivElement>>;
