import React from "react";
// @ts-ignore
(typeof global !== "undefined" ? global : (window as any)).Prism = Prism;
import PrismReactRenderer, { defaultProps, Prism, Language } from "prism-react-renderer";

require("prismjs/components/prism-java");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-scala");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-graphql");

import { CommonAndHTMLProps } from "../Element/constants";


export interface CodeBlockCustomProps {
    source   ? : object | string;
    language ? : Language;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps       = CommonAndHTMLProps<CodeBlockElementType> & CodeBlockCustomProps;

export const CodeBlock = ({
    ref,
    source,
    ...props
}: CodeBlockProps) => {
    return (
        <PrismReactRenderer
            {...defaultProps}
            code={typeof source === "object" ? JSON.stringify(source, null, 2): source}
            language="json"
            {...props}
            theme={undefined}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </PrismReactRenderer>
    );
}
