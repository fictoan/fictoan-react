import styled from "styled-components";

import { CodeBlockProps } from "./CodeBlock";


export const CodeStyled = styled.div`
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
        color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback};
    }

    pre[class*=language-scss] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.css.fallback}; }

    pre[class*=language-html] { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.html.fallback}; }

    pre[class*=language-js]   { color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.js.fallback}; }

    pre[class*=language-json] .token.string {
        color : ${(props: CodeBlockProps) => props.theme.text.code.prism.languages.json.tokens.string};
    }

    /*********************************************************
    * General
    */
    @media print {
        pre[class*="language-"],
        code[class*="language-"] {
            text-shadow: none;
        }
    }
    :not(pre) > code[class*="language-"] {
        padding: .1em .3em;
        border-radius: .3em;
        color: #db4c69;
        background: #f0f0f0;
    }
    /*********************************************************
    * Tokens
    */
    .namespace {
        opacity: .7;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #b0b0b0;
    }
    .token.punctuation {
        color: #a8a8a8;
    }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #c97b40;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #2e9975;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #7a1542;
        background: #f0f0f0;
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #5ea6c5;
    }
    .token.function {
        color: #dd4a68;
    }
    .token.regex,
    .token.important,
    .token.variable {
        color: #2bb63b;
    }
    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }
    .token.entity {
        cursor: help;
    }
    /*********************************************************
    * Line highlighting
    */
    pre[data-line] {
        position: relative;
    }
    pre[class*="language-"] > code[class*="language-"] {
        position: relative;
        z-index: 1;
    }
    .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em;
        background: #b4ecf3;
        box-shadow: inset 5px 0 0 #55d5ec;
        z-index: 0;
        pointer-events: none;
        line-height: inherit;
        white-space: pre;
    }

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
`;
