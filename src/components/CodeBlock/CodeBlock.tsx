import React, { useState, useEffect } from "react";

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
    source                 ? : object | string;
    language               ? : SupportedLanguage | undefined;
    showCopyButton         ? : boolean;
    showLineNumbers        ? : boolean;
    description            ? : string;
    withSyntaxHighlighting ? : boolean;
}

interface PrismType {
    languages : { [key : string] : any };
    highlight : (
        code     : string,
        grammar  : any,
        language : string
    ) => string;
}

const SUPPORTED_LANGUAGES = [
    "javascript",
    "jsx",
    "typescript",
    "css",
    "json",
    "markdown",
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

export const CodeBlock = React.forwardRef(
    (
        {
            children,
            source,
            language = "json",
            showCopyButton,
            showLineNumbers,
            description,
            withSyntaxHighlighting = false,
            ...props
        }: CodeBlockProps,
        ref: React.Ref<CodeBlockElementType>,
    ) => {
        const [isCodeCopied, setIsCodeCopied] = useState(false);
        const [highlightedCode, setHighlightedCode] = useState<string>("");
        const [prismModule, setPrismModule] = useState<PrismType | null>(null);

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

        // Load Prism only if withSyntaxHighlighting prop is present
        useEffect(() => {
            if (!withSyntaxHighlighting) {
                setHighlightedCode(code);
                return;
            }

            if (prismModule && code) {
                const languageGrammar = prismModule.languages[language];
                if (languageGrammar) {
                    const highlighted = prismModule.highlight(code, languageGrammar, language);
                    setHighlightedCode(highlighted);
                } else {
                    setHighlightedCode(code);
                }
                return;
            }

            // Load Prism and language modules
            const loadPrismWithLanguages = async () => {
                try {
                    // Load core Prism first
                    const [prism] = await Promise.all([
                        import('prismjs'),
                        // TypeScript will ignore these dynamic imports
                        ...SUPPORTED_LANGUAGES.map(lang =>
                            import(/* @vite-ignore */ `prismjs/components/prism-${lang}`)
                        )
                    ]);

                    setPrismModule(prism.default);

                    // Now highlight the code with the loaded module
                    const languageGrammar = prism.default.languages[language];
                    if (languageGrammar) {
                        const highlighted = prism.default.highlight(code, languageGrammar, language);
                        setHighlightedCode(highlighted);
                    } else {
                        setHighlightedCode(code);
                    }
                } catch (error) {
                    console.warn("Syntax highlighting not available:", error);
                    setHighlightedCode(code);
                }
            };

            loadPrismWithLanguages();
        }, [withSyntaxHighlighting, code, language, prismModule]);

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
                    {withSyntaxHighlighting ? (
                        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                    ) : (
                        <code>{code}</code>
                    )}
                </pre>
            </Element>
        );
    },
);
