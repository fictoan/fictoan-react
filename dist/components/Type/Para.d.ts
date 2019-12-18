import { RFTheme } from "../../ts/Theme";
import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface Props extends BaseAndHTMLProps<HTMLParagraphElement> {
    theme: typeof RFTheme;
}
export declare const Para: ({ ref, theme, ...props }: Props) => JSX.Element;
export {};
