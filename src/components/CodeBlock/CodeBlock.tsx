// FRAMEWORK ===========================================================================================================
import React, { useState } from "react";
import parse from "html-react-parser";
import { Prism } from "./prism";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

// STYLES ==============================================================================================================
import "./CodeBlock.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface CodeBlockCustomProps {
    source          ? : object | string;
    language        ? : string | undefined;
    showCopyButton  ? : boolean;
    showLineNumbers ? : boolean;
    description     ? : string;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const CodeBlock = React.forwardRef(
    (
        {
            children,
            source,
            language = "json",
            showCopyButton,
            showLineNumbers,
            description,
            ...props
        }: CodeBlockProps,
        ref: React.Ref<CodeBlockElementType>,
    ) => {
        const [ isCodeCopied, setIsCodeCopied ] = useState(false);

        // Use children if provided, else use source
        let code = typeof children === "string" ? children : React.Children.toArray(children).join("");
        if (!children) {
            code = typeof source === "object" ? JSON.stringify(source, null, 2) : source ?? "";
        }

        let classNames = [];

        if (showLineNumbers) {
            classNames.push("show-line-numbers");
        }

        const lines = code.split(/\r\n|\r|\n/gm);

        const highlightElement = () => {
            const languageGrammar = Prism.languages[language];
            return typeof languageGrammar === "undefined" ? code : Prism.highlight(code, languageGrammar, language);
        };

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(code);
                setIsCodeCopied(true);
                setTimeout(() => setIsCodeCopied(false), 3000);
            } catch (err) {
                console.error("Could not copy text: ", err);
            }
        };

        const handleKeyDown = async (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                await copyToClipboard();
            }
        };

        return (
            <Element<CodeBlockElementType>
                data-code-block
                as="div"
                classNames={classNames}
                role="region"
                aria-label={description || `Code block in ${language}`}
                {...props}
            >
                {showCopyButton ? (
                    isCodeCopied ? (
                        <Badge
                            className="code-block-copied-badge"
                            size="tiny"
                            shape="rounded"
                            aria-live="polite"
                        >
                            Copied!
                        </Badge>
                    ) : (
                        <Button
                            type="button"
                            className="code-block-copy-button"
                            size="tiny"
                            shape="rounded"
                            onClick={copyToClipboard}
                            onKeyDown={handleKeyDown}
                            aria-label="Copy code to clipboard"
                        >
                            Copy
                        </Button>
                    )
                ) : null}
                <pre
                    ref={ref}
                    className={`language-${language}`}
                    tabIndex={0}
                    aria-label={`Code in ${language}`}
                >
                   {showLineNumbers && Array.from(Array(lines.length).keys()).map((index) => (
                       <span
                           key={index}
                           className="line-numbers"
                           aria-hidden="true"
                       >
                           {index + 1}
                       </span>
                   ))}
                    {parse(highlightElement())}
               </pre>
            </Element>
        );
    },
);
