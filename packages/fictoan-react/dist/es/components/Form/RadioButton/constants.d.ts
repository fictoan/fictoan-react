import { BaseInputComponentProps } from "../BaseInputComponent/constants";
export declare type RadioButtonElementType = HTMLDivElement;
export declare type RadioButtonProps = Omit<BaseInputComponentProps<RadioButtonElementType>, "as">;
export interface RadioGroupOption extends RadioButtonProps {
    id: string;
    label: string;
    value: string;
}
export interface RadioGroupCustomProps {
    options: RadioGroupOption[];
}
export declare type RadioGroupProps = RadioButtonProps & RadioGroupCustomProps;
