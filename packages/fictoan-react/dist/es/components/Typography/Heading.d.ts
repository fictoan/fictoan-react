import React from "react";
import { CommonAndHTMLProps, WeightTypes } from "../Element/constants";
export interface HeadingCustomProps {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    style?: "sans-serif" | "serif" | "monospace";
    weight?: WeightTypes;
    align?: "left" | "centre" | "center" | "right";
}
export declare type HeadingElementType = HTMLHeadingElement;
export declare type HeadingProps = Omit<CommonAndHTMLProps<HeadingElementType>, keyof HeadingCustomProps> & HeadingCustomProps;
export declare const Heading: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLHeadingElement>, keyof HeadingCustomProps> & HeadingCustomProps & React.RefAttributes<HTMLHeadingElement>>;
