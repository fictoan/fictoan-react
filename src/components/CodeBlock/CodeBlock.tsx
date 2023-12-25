import React from "react";
import PrismReactRenderer, { Prism, Language } from "prism-react-renderer";

import { registerLanguage as registerJava } from "./prismjs-components/prism-java";
import { registerLanguage as registerCSharp } from "./prismjs-components/prism-csharp";
import { registerLanguage as registerScala } from "./prismjs-components/prism-scala";
import { registerLanguage as registerRuby } from "./prismjs-components/prism-ruby";
import { registerLanguage as registerHttp } from "./prismjs-components/prism-http";

registerJava(Prism);
registerCSharp(Prism);
registerScala(Prism);
registerRuby(Prism);
registerHttp(Prism);

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";

import "./CodeBlock.css";

// prettier-ignore
export interface CodeBlockCustomProps {
    source   ? : object | string;
    language ? : Language | "csharp" | "java" | "scala" | "ruby" | "http";
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

export const CodeBlock = React.forwardRef(
    ({ source, language = "json", ...props }: CodeBlockProps, ref: React.Ref<CodeBlockElementType>) => {
        return (
            <Element<CodeBlockElementType> data-code-block as="div" ref={ref} {...props}>
                <PrismReactRenderer
                    code={typeof source === "object" ? JSON.stringify(source, null, 2) : source ?? ""}
                    language={language as Language}
                    {...props}
                    Prism={Prism}
                    theme={undefined}
                >
                    {({ className, tokens, getLineProps, getTokenProps }) => (
                        <pre ref={ref} className={className}>
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
            </Element>
        );
    }
);
