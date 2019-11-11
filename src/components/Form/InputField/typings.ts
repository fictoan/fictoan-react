import { HTMLProps, ReactElement } from "react";

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
}
