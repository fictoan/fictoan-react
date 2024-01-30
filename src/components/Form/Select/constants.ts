import { CommonAndHTMLProps } from "@/components/Element/constants";
import React from "react";

export type SelectElementType = HTMLSelectElement;
export type SelectWithSearchElementType = HTMLSelectElement;

export type OptionElementType = HTMLOptionElement;

export interface OptionProps {
    value      : string;
    label      : string;
    disabled ? : boolean;
}

export interface OptionForSearchWithSelectProps {
    value      : string;
    label      : React.ReactNode;
    searchKey  : string;
    disabled ? : boolean;
}

export interface OptGroupProps {
    label   : string;
    options : OptionProps[] | OptionForSearchWithSelectProps[];
}

export interface SelectCustomProps {
    options     : (OptionProps | OptionForSearchWithSelectProps | OptGroupProps)[];
    label     ? : string;
    helpText  ? : string;
    errorText ? : string;
}

export interface SelectWithSearchCustomProps extends SelectCustomProps {
    onChange ? : (value: string) => void;
}

export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;
export type SelectWithSearchProps = Omit<CommonAndHTMLProps<SelectWithSearchElementType>, keyof SelectCustomProps> & SelectWithSearchCustomProps;
