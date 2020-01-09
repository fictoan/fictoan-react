import { Language } from "prism-react-renderer";

import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type  CodeBlockElementType = HTMLPreElement;

export interface CodeBlockCustomProps {
    source     : object | string;
    language ? : Language;
}

export type CodeBlockProps = BaseAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;
