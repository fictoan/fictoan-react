import { HTMLProps } from "react";
declare type ButtonProps = HTMLProps<HTMLButtonElement> & {
    value: string;
    loading?: boolean;
};
declare const Button: ({ value, className, loading, ...props }: ButtonProps) => JSX.Element;
export default Button;
