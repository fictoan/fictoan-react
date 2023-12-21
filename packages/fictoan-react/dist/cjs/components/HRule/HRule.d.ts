import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface HRCustomProps {
    kind?: "primary" | "secondary" | "tertiary";
    sideMargin?: "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}
export declare type HRElementType = HTMLHRElement;
export declare type HRProps = Omit<CommonAndHTMLProps<HRElementType>, keyof HRCustomProps> & HRCustomProps;
export declare const HRule: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLHRElement>, keyof HRCustomProps> & HRCustomProps & React.RefAttributes<HTMLHRElement>>;
