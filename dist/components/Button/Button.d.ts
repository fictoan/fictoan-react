import { HTMLProps } from "react";
declare type ButtonProps = HTMLProps<HTMLButtonElement> & {
    value: string;
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
    border?: string;
    isLoading?: boolean;
    hasDelete?: boolean;
};
declare const Button: ({ value, size, shape, shadow, border, className, isLoading, hasDelete, ...props }: ButtonProps) => JSX.Element;
export default Button;
