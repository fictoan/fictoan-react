import { CommonAndHTMLProps } from "../../Element/constants";

export type InputLabelElementType = HTMLLabelElement;

export interface InputLabelCustomProps {
    label?: string;
    helpText?: string;
    errorText?: string;
    htmlFor?: string;
}

export type InputLabelProps = CommonAndHTMLProps<InputLabelElementType> & InputLabelCustomProps;
