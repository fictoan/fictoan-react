import { HTMLProps } from "react";
declare type SelectProps = HTMLProps<HTMLSelectElement>;
interface Props extends SelectProps {
    options: HTMLProps<HTMLOptionElement>[];
    fullWidth?: boolean;
}
declare const Select: ({ fullWidth, className, options, ...props }: Props) => JSX.Element;
export default Select;
