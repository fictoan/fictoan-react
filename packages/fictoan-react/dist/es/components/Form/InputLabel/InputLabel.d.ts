import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface InputLabelCustomProps {
    label?: string;
    htmlFor?: string;
}
export declare type InputLabelElementType = HTMLLabelElement;
export declare type InputLabelProps = Omit<CommonAndHTMLProps<InputLabelElementType>, keyof InputLabelCustomProps> & InputLabelCustomProps;
export declare const InputLabel: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLLabelElement>, keyof InputLabelCustomProps> & InputLabelCustomProps & React.RefAttributes<HTMLLabelElement>>;
