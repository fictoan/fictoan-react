import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface RowProps extends BaseAndHTMLProps<HTMLDivElement> {
    contentPadding?: "tiny" | "small" | "medium" | "large" | "huge";
    gutters?: "no" | "tiny" | "small" | "medium" | "large" | "huge";
}
declare const Row: ({ contentPadding, className, gutters, ...props }: RowProps) => JSX.Element;
export default Row;
