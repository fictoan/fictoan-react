import React, { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import diff from "react-syntax-highlighter/dist/esm/languages/prism/diff";
import django from "react-syntax-highlighter/dist/esm/languages/prism/django";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import http from "react-syntax-highlighter/dist/esm/languages/prism/http";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import makefile from "react-syntax-highlighter/dist/esm/languages/prism/makefile";
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import scala from "react-syntax-highlighter/dist/esm/languages/prism/scala";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("diff", diff);
SyntaxHighlighter.registerLanguage("django", django);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("http", http);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("makefile", makefile);
SyntaxHighlighter.registerLanguage("markup", markup);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("ruby", ruby);
SyntaxHighlighter.registerLanguage("scala", scala);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { CodeStyled } from "./Code.styled";

// prettier-ignore
export interface CodeBlockCustomProps {
    source   ? : object | string;
    language ? : string;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = CommonAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;

export const CodeBlock = React.forwardRef(
    ({ source, language, ...props }: CodeBlockProps, ref: React.Ref<CodeBlockElementType>) => {
        const [show, setShow] = useState<boolean>(false);

        useEffect(() => {
            setShow(true);
        }, []);

        return (
            <Element<HTMLDivElement> as={CodeStyled} ref={ref} {...props}>
                {show && (
                    <SyntaxHighlighter key={JSON.stringify(source)} language={language || "json"} useInlineStyles={false}>
                        {source}
                    </SyntaxHighlighter>
                )}
            </Element>
        );
    }
);
