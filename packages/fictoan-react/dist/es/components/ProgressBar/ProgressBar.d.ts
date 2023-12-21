import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
export interface ProgressBarLabelCustomProps {
    unit?: string;
}
export interface ProgressBarCustomProps {
    barBg?: string;
    barFill?: string;
    unit?: string;
}
export declare type ProgressBarElementType = HTMLProgressElement;
export declare type ProgressBarProps = Omit<CommonAndHTMLProps<ProgressBarElementType>, keyof ProgressBarCustomProps> & ProgressBarCustomProps;
export declare type ProgressBarMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof ProgressBarLabelCustomProps> & ProgressBarLabelCustomProps;
export declare const ProgressBar: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLProgressElement>, keyof ProgressBarCustomProps> & ProgressBarCustomProps & React.RefAttributes<HTMLProgressElement>>;
