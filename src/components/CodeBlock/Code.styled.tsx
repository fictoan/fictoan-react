import styled from "styled-components";

import { CodeBlockProps } from "./CodeBlock";


export const CodeStyled = styled.div`
    pre {
        display                : block;
        width                  : 100%;
        max-width              : 100%;
        font-family            : ${(props: CodeBlockProps) => props.theme.text.font.mono};
        color                  : ${(props: CodeBlockProps) => props.theme.text.code.block.text};
        font-size              : ${(props: CodeBlockProps) => props.theme.text.code.block.scale}%;
        line-height            : ${(props: CodeBlockProps) => props.theme.text.code.block.lineHeight};
        font-weight            : 400;
        padding                : 16px 24px;
        background-color       : ${(props: CodeBlockProps) => props.theme.text.code.block.bg};
        text-align             : left;
        overflow               : auto;
        direction              : ltr;
        white-space            : pre;
        word-spacing           : normal;
        word-break             : normal;
        letter-spacing         : -0.5px;
        font-variant-ligatures : none;
        -webkit-font-smoothing : subpixel-antialiased;
        -webkit-hyphens        : none;
        -ms-hyphens            : none;
        hyphens                : none;
        border-radius          : 4px;
        -moz-tab-size          : 4;
        tab-size               : 4;
    }

    @media print {
        pre[class*="language-"],
        code[class*="language-"] {
            text-shadow: none;
        }
    }
    /*********************************************************
    * Tokens
    */
    .token.tag         { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.tag}; }
    .token.atrule      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.atrule}; }
    .token.attr-name   { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.attrName}; }
    .token.attr-value  { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.attrValue}; }
    .token.boolean     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.boolean}; }
    .token.cdata       { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.cdata}; }
    .token.class-name  { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.className}; }
    .token.comment     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.comment}; }
    .token.constant    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.constant} }
    .token.deleted     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.deleted}; }
    .token.delimiter   { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.delimiter}; }
    .token.doctype     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.doctype}; }
    .token.entity      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.entity} }
    .token.function    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.function}; }
    .token.hexcode     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.hexcode}; }
    .token.inserted    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.inserted} }
    .token.keyword     { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.keyword}; }
    .token.number      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.number} }
    .token.operator    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.operator}; }
    .token.plain       { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.plain} }
    .token.prolog      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.prolog}; }
    .token.property    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.property}; }
    .token.punctuation { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.punctuation}; }
    .token.regex       { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.regex} }
    .token.selector    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.selector}; }
    .token.string      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.string}; }
    .token.symbol      { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.symbol} }
    .token.url         { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.url} }
    .token.variable    { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.tokens.variable}; }

    .token.namespace { opacity : 0.72; }
    .token.italic { font-style : italic; }

    pre::selection,
    code::selection,
    pre::-moz-selection,
    code::-moz-selection,
    pre[class*=language-]::selection,
    code[class*=language-]::selection,
    pre[class*=language-]::-moz-selection,
    code[class*=language-] ::-moz-selection {
        text-shadow : none;
        color       : ${(props: CodeBlockProps) => props.theme.text.selection.text};
        background  : ${(props: CodeBlockProps) => props.theme.text.selection.bg} !important;
    }

    code[class*=language-css],
    code[class*=language-less],
    code[class*=language-sass] {
        color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback};
    }

    code[class*=language-scss] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback}; }

    code[class*=language-html] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.html.fallback}; }

    code[class*=language-js]   { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.js.fallback}; }

    code[class*=language-json] .token.string {
        color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.json.tokens.string};
    }
`;
