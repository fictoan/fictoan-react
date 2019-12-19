import { BaseAndHTMLProps } from "../BaseComponent/typings";
export declare type CodeBlockElementType = HTMLPreElement;
export interface CodeBlockCustomProps {
    source: object | string;
}
export declare type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
