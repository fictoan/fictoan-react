import { Language } from "prism-react-renderer";

import { CommonAndHTMLProps } from "../Element/constants";

export type  CodeBlockElementType = HTMLPreElement;

export interface CodeBlockCustomProps {
    source     : object | string;
    language ? : Language;
}

export type CodeBlockProps = CommonAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
