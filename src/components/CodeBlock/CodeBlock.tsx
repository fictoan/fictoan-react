import React from "react";
import PrismReactRenderer, { defaultProps } from "prism-react-renderer";

import { CodeBlockProps } from "./constants";

export const CodeBlock = ({ ref, source, theme, ...props }: CodeBlockProps) => {
    let prismTheme: any = undefined;

    if (theme && theme.text && theme.text.code
        && theme.text.code.prism
        && Object.keys(theme.text.code.prism).length !== 0
    ) {
        prismTheme = theme.text.code.prism;
    }

    return (
        <PrismReactRenderer
            {...defaultProps}
            code={typeof source === "object" ? JSON.stringify(source, null, 2): source}
            language="json"
            theme={prismTheme}
            {...props}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    <code>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </code>
                </pre>
            )}
        </PrismReactRenderer>
    );
}
