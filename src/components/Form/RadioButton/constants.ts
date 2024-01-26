import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export type RadioButtonElementType = HTMLDivElement;
export type RadioButtonProps = Omit<BaseInputComponentProps<RadioButtonElementType>, "as">;

export interface RadioGroupOption extends RadioButtonProps {
    id    : string;
    label : string;
    value : string;
}

export interface RadioGroupCustomProps {
    name    : string;
    options : RadioGroupOption[];
}

export type RadioGroupProps = RadioButtonProps & RadioGroupCustomProps;
