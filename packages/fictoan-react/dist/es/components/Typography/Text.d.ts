import React from "react";
import { CommonAndHTMLProps, SpacingTypes, WeightTypes } from "../Element/constants";
export interface TextCustomProps {
    style?: "sans-serif" | "serif" | "monospace";
    weight?: WeightTypes;
    isSubtext?: boolean;
    size?: SpacingTypes;
    align?: "left" | "centre" | "center" | "right";
}
export declare type TextElementType = HTMLParagraphElement;
export declare type TextProps = Omit<CommonAndHTMLProps<TextElementType>, keyof TextCustomProps> & TextCustomProps;
export declare const Text: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLParagraphElement>, keyof TextCustomProps> & TextCustomProps & React.RefAttributes<HTMLParagraphElement>>;
