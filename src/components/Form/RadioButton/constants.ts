import React from "react";

import { BaseInputComponentProps } from "../BaseInputComponent/constants";
import { SpacingTypes } from "@/components/Element/constants";

export type RadioButtonElementType = HTMLDivElement;
export type RadioButtonProps = Omit<BaseInputComponentProps<RadioButtonElementType>, "as">;

export interface RadioGroupOptionProps extends RadioButtonProps {
    id    : string;
    label : string;
}

export interface RadioGroupCustomProps {
    name       : string;
    options    : RadioGroupOptionProps[];
    value    ? : string;
    onChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioTabGroupCustomProps {
    size ? : SpacingTypes;
}

export type RadioGroupProps = RadioGroupOptionProps & RadioGroupCustomProps;
export type RadioTabGroupProps = Omit<RadioGroupProps, keyof RadioTabGroupCustomProps> & RadioTabGroupCustomProps;
