import { BaseAndHTMLProps } from "../BaseComponent/typings";
export declare type CodeBlockElementType = HTMLPreElement;
export interface CodeBlockCustomProps {
    source: object | string;
    language?: string;
}
export declare type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
