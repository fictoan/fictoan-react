import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface HeadingProps extends BaseAndHTMLProps<HTMLDivElement> {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
}
declare const Heading: ({ type, weight, className, ...props }: HeadingProps) => JSX.Element;
export default Heading;
