import React, { ReactNode } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface CalloutCustomProps {
    kind: "info" | "success" | "warning" | "error";
    children: ReactNode;
}
export declare type CalloutElementType = HTMLDivElement;
export declare type CalloutProps = Omit<CommonAndHTMLProps<CalloutElementType>, keyof CalloutCustomProps> & CalloutCustomProps;
export declare const Callout: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof CalloutCustomProps> & CalloutCustomProps & React.RefAttributes<HTMLDivElement>>;
