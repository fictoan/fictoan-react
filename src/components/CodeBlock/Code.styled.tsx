import { css } from "styled-components";

import { CodeBlockProps } from "./constants";

export const CodeStyled = css`
    /*  For inline code  */
    :not(pre) > code {
        font-family      : ${(props: CodeBlockProps) => props.theme.text.font.mono};
        margin           : 8px 0;
        border-radius    : 4px;
        padding          : 2px 8px;
        border           : none;
        background-color : ${(props: CodeBlockProps) => props.theme.text.code.inline.bg};
        color            : ${(props: CodeBlockProps) => props.theme.text.code.inline.text};
        font-size        : ${(props: CodeBlockProps) => props.theme.text.code.inline.scale}%;
        font-weight      : normal;
        white-space      : pre-wrap;
    }

    @media all and (max-width : 720px) {
        code,
        :not(pre) > code {
            word-wrap   : break-word;
            white-space : normal;
        }

        pre { padding : 16px; }
    }

    /*  For block code  */
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

    pre[class*=language-css],
    pre[class*=language-less],
    pre[class*=language-sass] {
        ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback};
    }

    pre[class*=language-scss] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback}; }

    pre[class*=language-html] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.html.fallback}; }

    pre[class*=language-js]   { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.js.fallback}; }

    pre[class*=language-json] .token.string {
        ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.json.tokens.string};
    }

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


    /*  Keyboard key element  =================================  */
    kbd {
        display          : inline-block;
        font-family      : ${(props: CodeBlockProps) => props.theme.text.font.mono};
        margin           : 0 4px;
        padding          : 4px 8px;
        color            : ${(props: CodeBlockProps) => props.theme.text.kbd.text};
        background-color : ${(props: CodeBlockProps) => props.theme.text.kbd.bg};
        cursor           : pointer;
        font-size        : 14px;
        line-height      : 1.4;
        border-radius    : 4px;
        text-shadow      : 0 1px 0 #fff;
        box-shadow       : 0 3px 0 0 rgba(0, 0, 0, 0.16);
        user-select      : none;
    }

    kbd:active {
        transform  : translateY(3px);
        box-shadow : none;
    }
`