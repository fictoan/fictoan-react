import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
interface TabType {
    key: string;
    label: string;
    content: React.ReactNode;
    hasAlert?: boolean;
}
export interface TabsCustomProps {
    tabs: TabType[];
    /** wrapper to render additional content inside the nav along with tab labels */
    additionalNavContentWrapper?: React.ReactNode;
}
export declare type TabsElementType = HTMLDivElement;
export declare type TabsProps = Omit<CommonAndHTMLProps<TabsElementType>, keyof TabsCustomProps> & TabsCustomProps;
export declare const Tabs: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof TabsCustomProps> & TabsCustomProps & React.RefAttributes<HTMLDivElement>>;
export {};
