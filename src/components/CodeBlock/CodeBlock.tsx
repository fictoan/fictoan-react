import React from "react";
import PrismReactRenderer, { defaultProps } from "prism-react-renderer";

import { CodeBlockProps } from "./constants";

export const CodeBlock = ({ ref, source, ...props }: CodeBlockProps) => {
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
                    {/* <code> */}
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    {/* </code> */}
                </pre>
            )}
        </PrismReactRenderer>
    );
}
