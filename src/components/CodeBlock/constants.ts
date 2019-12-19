import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type  CodeBlockElementType = HTMLPreElement;

export interface CodeBlockCustomProps {
    source: object | string;
}

export type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
