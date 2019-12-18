import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface RowProps extends BaseAndHTMLProps<HTMLDivElement> {
    sidePadding?: "tiny" | "small" | "medium" | "large" | "huge";
    gutters?: "none" | "tiny" | "small" | "medium" | "large" | "huge";
    retainLayoutOnTabLS?: boolean;
    retainLayoutOnTabPT?: boolean;
    retainLayoutOnMobile?: boolean;
    retainLayoutAlways?: boolean;
}
declare const Row: ({ sidePadding, className, gutters, retainLayoutOnTabLS, retainLayoutOnTabPT, retainLayoutOnMobile, retainLayoutAlways, ...props }: RowProps) => JSX.Element;
export default Row;
