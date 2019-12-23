import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type  CodeBlockElementType = HTMLPreElement;

export interface CodeBlockCustomProps {
    source: object | string;
    language?: string;
}

export type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
