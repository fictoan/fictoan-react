import React, { Suspense, useState } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

import "./CodeBlock.css";

export interface CodeBlockCustomProps {
    source          ? : object | string;
    language        ? : string | undefined;
    showCopyButton  ? : boolean;
    showLineNumbers ? : boolean;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

const PrismReactRenderer = React.lazy(() =>
    import("prism-react-renderer").then((prismModule) => {
        if (prismModule.Highlight) {
            return { default : prismModule.Highlight };
        }

        // DON’T REMOVE THE WEIRD SPACING, IT’S FOR THE ASCII BOX
        // TO ACCOUNT FOR THE ESCAPE CHARACTERS
        console.log(
            `FICTOAN : \x1B[35mLooking\x1B[33m for\x1B[32m syntax\x1B[34m highlighting\x1B[36m?\x1B[31m
╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
│   Please install the prism-react-renderer (https://www.npmjs.com/package/prism-react-renderer)   │
│   package to have syntax highlighting in the CodeBlock component.                                │
│   For example: \x1b[46m\x1b[30myarn add prism-react-renderer\x1B[0m\x1B[31m                                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯`,
        );
        const fallbackCodeBlock = ({ code }: { code: string }) => (
            <pre data-code-block className="module-fallback">
                {code}
            </pre>
        );
        return { default : fallbackCodeBlock };
    }),
);

export const CodeBlock = React.forwardRef((
        {
            children,
            source,
            language = "json",
            showCopyButton,
            showLineNumbers,
            ...props
        }: CodeBlockProps, ref: React.Ref<CodeBlockElementType>) => {
        const [ isCodeCopied, setIsCodeCopied ] = useState(false);

        const copyToClipboard = () => {
            navigator.clipboard.writeText(code).then(() => {
                setIsCodeCopied(true);
                setTimeout(() => setIsCodeCopied(false), 3000); // Revert back after 3 seconds
            }).catch(err => {
                console.error("Could not copy text: ", err);
            });
        };

        // Use children if provided, else use source
        let code = typeof children === "string" ? children : React.Children.toArray(children).join("");
        if (!children) {
            code = typeof source === "object" ? JSON.stringify(source, null, 2) : source ?? "";
        }

        let classNames = [];

        if (showLineNumbers) {
            classNames.push("show-line-numbers");
        }

        return (
            <Element<CodeBlockElementType> data-code-block as="div" classNames={classNames} {...props}>
                {showCopyButton ? (
                    isCodeCopied ? (
                        <Badge
                            className="code-block-copied-badge"
                            size="tiny" shape="rounded"
                            aria-live="polite"
                        >
                            Copied!
                        </Badge>
                    ) : (
                        <Button
                            type="button"
                            className="code-block-copy-button"
                            size="tiny" shape="rounded"
                            onClick={copyToClipboard}
                            role="button"
                            aria-label="Copy code to clipboard"
                        >
                            Copy
                        </Button>
                    )
                ) : null}

                <Suspense fallback={<pre data-code-block className="suspense-fallback">{code}</pre>}>
                    <PrismReactRenderer code={code} language={language} theme={undefined}>
                        {({ className, tokens, getLineProps, getTokenProps }) => (
                            <pre ref={ref} className={className}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({ line, key : i })}>
                                        {showLineNumbers && (
                                            <span className="line-numbers">
                                                {i + 1}
                                            </span>
                                        )}

                                        <span className="l-o-c">
                                            {line.map((token, key) => (
                                                <span {...getTokenProps({ token, key })} />
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </pre>
                        )}
                    </PrismReactRenderer>
                </Suspense>
            </Element>
        );
    },
);
