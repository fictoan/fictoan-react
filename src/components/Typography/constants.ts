import { CommonAndHTMLProps } from "../Element/constants";

export type HeadingElementType = HTMLHeadingElement;
export type TextElementType    = HTMLParagraphElement;

type Weight = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export interface HeadingCustomProps extends CommonAndHTMLProps<HTMLHeadingElement> {
    as       : "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    weight ? : Weight;
}

export interface TextCustomProps extends CommonAndHTMLProps<HTMLParagraphElement> {
    weight ? : Weight;
    size   ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type HeadingProps = CommonAndHTMLProps<HeadingElementType> & HeadingCustomProps;
export type TextProps    = CommonAndHTMLProps<TextElementType> & TextCustomProps;
