import { ColourPropTypes, CommonAndHTMLProps } from "@/components/Element/constants";
import React from "react";

export type SelectElementType = HTMLSelectElement;
export type SelectWithSearchElementType = HTMLSelectElement;

export type OptionElementType = HTMLOptionElement;

export interface OptionProps {
    value: string;
    label: string;
    disabled?: boolean;
    selected?: boolean;
}

export interface OptionForSearchWithSelectProps {
    value: string;
    label: string;
    customLabel?: React.ReactNode;
    disabled?: boolean;
}

export interface OptGroupProps {
    label: string;
    options: OptionProps[];
}

export interface SelectCustomProps {
    options: OptionProps[];
    label?: string;
    helpText?: string;
    errorText?: string;
}

export interface SelectWithSearchCustomProps {
    options: OptionForSearchWithSelectProps[];
    label?: string;
    helpText?: string;
    errorText?: string;
    allowMultiSelect?: boolean;
    onChange?: (value: string | string[]) => void;
    disabled?: boolean;
    placeholder?: string;
    id?: string;
    defaultValue?: string;
    badgeBgColour?: ColourPropTypes;
    badgeBgColor?: ColourPropTypes;
    badgeTextColour?: ColourPropTypes;
    badgeTextColor?: ColourPropTypes;
    selectionLimit?: number;
    allowCustomEntries?: boolean;
}

export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;
export type SelectWithSearchProps = Omit<CommonAndHTMLProps<SelectWithSearchElementType>, keyof SelectWithSearchCustomProps> & SelectWithSearchCustomProps;
