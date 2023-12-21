import React, { ReactNode } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface ExpandableContentCustomProps {
    open?: boolean;
    summary: ReactNode;
    children: ReactNode;
}
export declare type ExpandableContentElementType = HTMLDetailsElement;
export declare type ExpandableContentProps = Omit<CommonAndHTMLProps<ExpandableContentElementType>, keyof ExpandableContentCustomProps> & ExpandableContentCustomProps;
export declare const ExpandableContent: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDetailsElement>, keyof ExpandableContentCustomProps> & ExpandableContentCustomProps & React.RefAttributes<HTMLDetailsElement>>;
