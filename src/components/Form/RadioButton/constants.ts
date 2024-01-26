import { BaseInputComponentProps } from "../BaseInputComponent/constants";
import { SpacingTypes } from "@/components/Element/constants";

export type RadioButtonElementType = HTMLDivElement;
export type RadioButtonProps = Omit<BaseInputComponentProps<RadioButtonElementType>, "as">;

export interface RadioGroupOptionProps extends RadioButtonProps {
    id    : string;
    label : string;
}

export interface RadioGroupCustomProps {
    name    : string;
    options : RadioGroupOptionProps[];
}

export type RadioGroupProps = RadioGroupOptionProps & RadioGroupCustomProps;

export interface RadioTabGroupProps extends Omit<RadioGroupProps, "size"> {
    size ? : SpacingTypes;
}
