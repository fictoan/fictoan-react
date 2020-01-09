import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type HeadingElementType = HTMLHeadingElement;
export type TextElementType    = HTMLParagraphElement;

type Weight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export interface HeadingCustomProps extends BaseAndHTMLProps<HTMLHeadingElement> {
    as       : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight ? : Weight;
}

export interface TextCustomProps extends BaseAndHTMLProps<HTMLParagraphElement> {
    weight ? : Weight;
    size   ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type HeadingProps = BaseAndHTMLProps<HeadingElementType> & HeadingCustomProps;
export type TextProps    = BaseAndHTMLProps<TextElementType> & TextCustomProps;
