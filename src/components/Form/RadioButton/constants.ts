import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export type RadioButtonElementType = HTMLDivElement;
export type RadioButtonProps = BaseInputComponentProps<RadioButtonElementType>;

interface RadioGroupCustomProps {
    options: {
        name: string;
        value: string;
    }[];
}
export type RadioGroupProps = BaseInputComponentProps<RadioButtonElementType> & RadioGroupCustomProps;
