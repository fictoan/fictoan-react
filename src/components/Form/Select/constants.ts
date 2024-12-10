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
    options     : OptionProps[] | OptGroupProps[];
    label     ? : string;
    helpText  ? : string;
    errorText ? : string;
    onChange  ? : (value: string) => void;
}

export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;
