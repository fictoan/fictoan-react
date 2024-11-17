import React from "react";
import { ColourPropTypes, CommonAndHTMLProps } from "@/components/Element/constants";

type NonZeroNumber = Exclude<number, 0>;

export type ListBoxElementType = HTMLDivElement;

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
    selectionLimit     ? : NonZeroNumber;
    allowCustomEntries ? : boolean;
    isLoading          ? : boolean;
}

export type ListBoxProps =
    Omit<CommonAndHTMLProps<ListBoxElementType>, keyof ListBoxCustomProps>
    & ListBoxCustomProps;
