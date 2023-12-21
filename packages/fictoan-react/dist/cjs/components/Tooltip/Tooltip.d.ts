import React from "react";
import { CardProps } from "../Card/Card";
export interface TooltipCustomProps {
    label: string;
    position?: "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
}
export declare type TooltipElementType = HTMLDivElement;
export declare type TooltipProps = Omit<CardProps, keyof TooltipCustomProps> & TooltipCustomProps;
export declare const Tooltip: React.ForwardRefExoticComponent<Omit<CardProps, keyof TooltipCustomProps> & TooltipCustomProps & React.RefAttributes<HTMLDivElement>>;
