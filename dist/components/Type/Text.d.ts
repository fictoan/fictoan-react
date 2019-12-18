import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface TextProps extends BaseAndHTMLProps<HTMLDivElement> {
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size?: "tiny" | "small" | "medium" | "large" | "huge";
}
declare const Text: ({ weight, size, className, ...props }: TextProps) => JSX.Element;
export default Text;
