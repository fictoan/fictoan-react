import React from "react";
import { ColourPropTypes, CommonAndHTMLProps } from "@/components/Element/constants";

export type SelectElementType = HTMLSelectElement;
export type ListBoxElementType = HTMLSelectElement;

export interface OptionForListBoxProps {
    value         : string;
    label         : string;
    customLabel ? : React.ReactNode;
    disabled    ? : boolean;
}

export interface ListBoxCustomProps {
    options              : OptionForListBoxProps[];
    label              ? : string;
    helpText           ? : string;
    errorText          ? : string;
    allowMultiSelect   ? : boolean;
    onChange           ? : (value: string | string[]) => void;
    disabled           ? : boolean;
    placeholder        ? : string;
    id                 ? : string;
    defaultValue       ? : string;
    badgeBgColour      ? : ColourPropTypes;
    badgeBgColor       ? : ColourPropTypes;
    badgeTextColour    ? : ColourPropTypes;
    badgeTextColor     ? : ColourPropTypes;
    selectionLimit     ? : number;
    allowCustomEntries ? : boolean;
}

export type ListBoxProps =
    Omit<CommonAndHTMLProps<ListBoxElementType>, keyof ListBoxCustomProps>
    & ListBoxCustomProps;
