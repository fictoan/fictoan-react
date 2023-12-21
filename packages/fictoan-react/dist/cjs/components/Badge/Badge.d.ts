import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface BadgeCustomProps {
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    shape?: "rounded" | "curved";
}
export declare type BadgeElementType = HTMLDivElement;
export declare type BadgeProps = Omit<CommonAndHTMLProps<BadgeElementType>, keyof BadgeCustomProps> & BadgeCustomProps;
export declare const Badge: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof BadgeCustomProps> & BadgeCustomProps & React.RefAttributes<HTMLDivElement>>;
