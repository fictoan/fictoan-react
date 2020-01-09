import { HTMLProps } from "react";

export interface InputLabelProps extends HTMLProps<HTMLLabelElement> {
    label?: string;
    helpText?: string;
    errorText?: string;
    htmlFor?: string;
}
