import React from "react";

import { BaseInputComponentProps } from "../BaseInputComponent/constants";
import { SpacingTypes } from "@/components/Element/constants";

// RADIO BUTTON ////////////////////////////////////////////////////////////////////////////////////////////////////////
export type RadioButtonElementType = HTMLDivElement;
export type RadioButtonProps = Omit<BaseInputComponentProps<RadioButtonElementType>, "as" | "onChange" | "value"> & {
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    value: string;  // Making value required for radio buttons
};

// RADIO GROUP OPTIONS /////////////////////////////////////////////////////////////////////////////////////////////////
export interface RadioGroupOptionProps extends Omit<RadioButtonProps, "onChange" | "checked" | "name"> {
    id: string;
    label: string;
    value: string;
}

// RADIO GROUP /////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface RadioGroupCustomProps {
    name: string;
    options: RadioGroupOptionProps[];
    value?: string;  // For controlled usage
    defaultValue ?: string;  // For uncontrolled usage
    onChange?: (value: string) => void;  // Updated to handle direct values
}

export type RadioGroupProps = Omit<RadioButtonProps, keyof RadioGroupCustomProps> & RadioGroupCustomProps;

// RADIO TAB GROUP /////////////////////////////////////////////////////////////////////////////////////////////////////
export interface RadioTabGroupCustomProps {
    size ? : SpacingTypes;
}

export type RadioTabGroupProps = Omit<RadioGroupProps, keyof RadioTabGroupCustomProps> & RadioTabGroupCustomProps;
