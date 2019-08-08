import { HTMLProps } from "react";
declare function InputLabel({ value, helpText, errorText, ...props }: HTMLProps<HTMLLabelElement> & {
    value?: string;
    helpText?: string;
    errorText?: string;
}): JSX.Element;
export default InputLabel;
