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
    language               ? : string;  // Accepts any language string
    showCopyButton         ? : boolean;
    showLineNumbers        ? : boolean;
    description            ? : string;
    withSyntaxHighlighting ? : boolean;
}

// prettier-ignore
interface PrismType {
    languages : { [key : string] : any };
    highlight : (
        code     : string,
        grammar  : any,
        language : string
    ) => string;
}

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

        // Helper function to load a specific language module
        const loadLanguage = async (languageName: string) => {
            try {
                await import(/* @vite-ignore */ `prismjs/components/prism-${languageName}`);
                return true;
            } catch (error) {
                console.warn(`Language '${languageName}' could not be loaded:`, error);
                return false;
            }
        };

        // Load Prism only if withSyntaxHighlighting prop is present
        useEffect(() => {
            if (!withSyntaxHighlighting) {
                setHighlightedCode(code);
                return;
            }

            // If Prism is already loaded, try to highlight with it
            if (prismModule && code) {
                const languageGrammar = prismModule.languages[language];
                if (languageGrammar) {
                    // Language already loaded, highlight immediately
                    const highlighted = prismModule.highlight(code, languageGrammar, language);
                    setHighlightedCode(highlighted);
                } else {
                    // Try to load the language dynamically
                    loadLanguage(language).then(success => {
                        if (success && prismModule.languages[language]) {
                            const highlighted = prismModule.highlight(
                                code,
                                prismModule.languages[language],
                                language
                            );
                            setHighlightedCode(highlighted);
                        } else {
                            setHighlightedCode(code);
                        }
                    });
                }
                return;
            }

            // Initial load of Prism and the requested language
            const loadPrismWithLanguage = async () => {
                try {
                    // Load Prism core and the requested language
                    const [prism] = await Promise.all([
                        import('prismjs'),
                        loadLanguage(language)
                    ]);

                    setPrismModule(prism.default);

                    // Highlight if language was loaded successfully
                    if (prism.default.languages[language]) {
                        const highlighted = prism.default.highlight(
                            code,
                            prism.default.languages[language],
                            language
                        );
                        setHighlightedCode(highlighted);
                    } else {
                        setHighlightedCode(code);
                    }
                } catch (error) {
                    console.warn("Syntax highlighting doesnt seem to work:", error);
                    setHighlightedCode(code);
                }
            };

            loadPrismWithLanguage();
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
