import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface FormItemGroupCustomProps {
    isJoint?: boolean;
    retainLayout?: boolean;
    spacing?: string;
}
export declare type FormItemGroupElementType = HTMLDivElement;
export declare type FormItemGroupProps = Omit<CommonAndHTMLProps<FormItemGroupElementType>, keyof FormItemGroupCustomProps> & FormItemGroupCustomProps;
export declare const FormItemGroup: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof FormItemGroupCustomProps> & FormItemGroupCustomProps & React.RefAttributes<HTMLDivElement>>;
