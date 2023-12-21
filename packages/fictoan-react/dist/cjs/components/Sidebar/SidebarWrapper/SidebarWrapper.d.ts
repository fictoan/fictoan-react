import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface SidebarWrapperCustomProps {
    collapsed?: boolean;
}
export declare type SidebarWrapperElementType = HTMLDivElement;
export declare type SidebarWrapperProps = Omit<CommonAndHTMLProps<SidebarWrapperElementType>, keyof SidebarWrapperCustomProps> & SidebarWrapperCustomProps;
export declare const SidebarWrapper: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "collapsed"> & SidebarWrapperCustomProps & React.RefAttributes<HTMLDivElement>>;
