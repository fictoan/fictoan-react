import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export declare type SelectElementType = HTMLSelectElement;
export declare type OptionElementType = HTMLOptionElement;
export interface SelectCustomProps {
    options: CommonAndHTMLProps<OptionElementType>[];
    label?: string;
    helpText?: string;
    errorText?: string;
}
export declare type OptionProps = CommonAndHTMLProps<OptionElementType>;
export declare type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;
export declare const Select: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLSelectElement>, keyof SelectCustomProps> & SelectCustomProps & React.RefAttributes<HTMLSelectElement>>;
