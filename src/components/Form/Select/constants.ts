import { CommonAndHTMLProps } from "@/components/Element/constants";

export type SelectElementType = HTMLSelectElement;

export type OptionElementType = HTMLOptionElement;

export interface OptionProps {
    value      : string;
    label      : string;
    disabled ? : boolean;
    selected ? : boolean;
}

export interface OptGroupProps {
    label   : string;
    options : OptionProps[];
}

export interface SelectCustomProps {
    options     : OptionProps[];
    label     ? : string;
    helpText  ? : string;
    errorText ? : string;
}

export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;
