import React, { Suspense } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";

import "./CodeBlock.css";

export interface CodeBlockCustomProps {
    source?: object | string;
    language?: string;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

const PrismReactRenderer = React.lazy(() =>
    import("prism-react-renderer").then((prismModule) => {
        if (prismModule.Highlight) {
            return { default: prismModule.Highlight };
        }
        console.log(
            "%c[fictoan-react] Please install `prism-react-renderer` (https://www.npmjs.com/package/prism-react-renderer) package to have syntax highlighting in the CodeBlock component.",
            "color: #bada55"
        );
        const fallbackCodeBlock = ({ code }: { code: string }) => (
            <pre data-code-block className="module-fallback">
                {code}
            </pre>
        );
        return { default: fallbackCodeBlock };
    })
);

export const CodeBlock = React.forwardRef(
    ({ source, language = "json", ...props }: CodeBlockProps, ref: React.Ref<CodeBlockElementType>) => {
        const code = typeof source === "object" ? JSON.stringify(source, null, 2) : source ?? "";

        return (
            <Element<CodeBlockElementType> data-code-block as="div" {...props}>
                <Suspense
                    fallback={
                        <pre data-code-block className="suspense-fallback">
                            {code}
                        </pre>
                    }
                >
                    <PrismReactRenderer code={code} language={language} theme={undefined}>
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
                </Suspense>
            </Element>
        );
    }
);
