import React from "react";
import { Language } from "prism-react-renderer";
import { CommonAndHTMLProps } from "../Element/constants";
export interface CodeBlockCustomProps {
    source?: object | string;
    language?: Language;
}
export declare type CodeBlockElementType = HTMLPreElement;
export declare type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> & CodeBlockCustomProps;
export declare const CodeBlock: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLPreElement>, keyof CodeBlockCustomProps> & CodeBlockCustomProps & React.RefAttributes<HTMLPreElement>>;
