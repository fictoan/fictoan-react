import React, { useState, useEffect, useRef, useCallback } from "react";

import { Element } from "../Element/Element";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

// STYLES ==============================================================================================================
import "./CodeBlock.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

interface PrismType {
    languages : { [key: string]: any };
    highlight : (
        code     : string,
        grammar  : any,
        language : string
    ) => string;
}

// prettier-ignore
export interface CodeBlockCustomProps {
    source                 ? : object | string;
    language               ? : string;
    showCopyButton         ? : boolean;
    showLineNumbers        ? : boolean;
    description            ? : string;
    withSyntaxHighlighting ? : boolean;
    contentEditable        ? : boolean;
    onChange               ? : (content: string) => void;
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const CodeBlock = React.forwardRef((
    {
        children,
        source,
        language = "json",
        showCopyButton,
        showLineNumbers,
        description,
        withSyntaxHighlighting = false,
        contentEditable = false,
        onChange,
        ...props
    }: CodeBlockProps,
    ref: React.Ref<CodeBlockElementType>,
) => {
    // STATE MANAGEMENT ================================================================================================
    const [ isCodeCopied, setIsCodeCopied ] = useState(false);
    const [ prismModule, setPrismModule ]   = useState<PrismType | null>(null);
    const [ isLoading, setIsLoading ]       = useState(withSyntaxHighlighting);
    const [ codeElement, setCodeElement ]   = useState<HTMLElement | null>(null);

    const preRef = useRef<HTMLPreElement>(null);

    // CONTENT HANDLER =================================================================================================
    // Determine the code content from either children or source prop
    let initialCode = typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");

    if (!children) {
        initialCode = typeof source === "object"
            ? JSON.stringify(source, null, 2)
            : source ?? "";
    }

    // SYNTAX HIGHLIGHTING =============================================================================================
    // Dynamically load Prism and language support when syntax highlighting is enabled
    useEffect(() => {
        if (!withSyntaxHighlighting) return;

        const loadPrismWithLanguage = async () => {
            setIsLoading(true);
            try {
                // Load both Prism core and language-specific module in parallel
                const [prism] = await Promise.all([
                    import("prismjs"),
                    language !== "plain" ? import(`prismjs/components/prism-${language}`) : Promise.resolve(),
                ]);
                setPrismModule(prism.default);
            } catch (error) {
                console.warn(`Failed to load syntax highlighting for ${language}:`, error);
            } finally {
                setIsLoading(false);
            }
        };

        loadPrismWithLanguage();
    }, [withSyntaxHighlighting, language]);

    // CURSOR POSITION HANDLING ========================================================================================
    // Get the current cursor position in the editable content
    const getCursorPosition = useCallback(() => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return null;

        const range = selection.getRangeAt(0);
        const currentNode = range.startContainer;
        const cursorOffset = range.startOffset;

        // Calculate absolute cursor position by walking the DOM tree
        let absoluteOffset = cursorOffset;
        if (currentNode && currentNode !== codeElement && codeElement) {
            const treeWalker = document.createTreeWalker(
                codeElement,
                NodeFilter.SHOW_TEXT,
                null,
            );
            let node;
            while ((node = treeWalker.nextNode())) {
                if (node === currentNode) break;
                absoluteOffset += node.textContent?.length || 0;
            }
        }

        return absoluteOffset;
    }, [codeElement]);

    // CODE HIGHLIGHTING ===============================================================================================
    // Apply syntax highlighting while preserving cursor position in editable mode
    const highlightCode = useCallback((content: string) => {
        if (!codeElement || !withSyntaxHighlighting || !prismModule) return;

        try {
            // Store cursor position before modifying content
            const cursorPosition = contentEditable ? getCursorPosition() : null;

            // Apply Prism highlighting
            const highlighted = prismModule.highlight(
                content,
                prismModule.languages[language] || prismModule.languages.plain,
                language,
            );
            codeElement.innerHTML = highlighted;

            // Restore cursor position for editable content
            if (contentEditable && cursorPosition !== null) {
                const selection = window.getSelection();
                const newRange = document.createRange();
                const treeWalker = document.createTreeWalker(
                    codeElement,
                    NodeFilter.SHOW_TEXT,
                    null,
                );

                // Walk through text nodes to find correct cursor position
                let currentOffset = 0;
                let node;
                while ((node = treeWalker.nextNode())) {
                    const length = node.textContent?.length || 0;
                    if (currentOffset + length >= cursorPosition) {
                        newRange.setStart(node, cursorPosition - currentOffset);
                        newRange.setEnd(node, cursorPosition - currentOffset);
                        selection?.removeAllRanges();
                        selection?.addRange(newRange);
                        break;
                    }
                    currentOffset += length;
                }
            }
        } catch (error) {
            console.warn("Error highlighting code:", error);
            if (codeElement) {
                codeElement.textContent = content;
            }
        }
    }, [language, withSyntaxHighlighting, contentEditable, prismModule, getCursorPosition, codeElement]);

    // CONTENT EDITING =================================================================================================
    // Handle content changes in editable mode
    const handleInput = useCallback((event: Event) => {
        if (!codeElement) return;

        const content = codeElement.textContent || "";
        onChange?.(content);

        // Defer highlighting to next frame to ensure content is updated
        requestAnimationFrame(() => {
            highlightCode(content);
        });
    }, [highlightCode, onChange, codeElement]);

    // Setup input handler for editable content
    useEffect(() => {
        const element = codeElement;
        if (!element || !contentEditable) return;

        element.addEventListener("input", handleInput);
        return () => {
            element.removeEventListener("input", handleInput);
        };
    }, [contentEditable, handleInput, codeElement]);

    // Initial highlighting when component loads
    useEffect(() => {
        if (!codeElement || !prismModule) return;
        highlightCode(initialCode);
    }, [highlightCode, initialCode, prismModule, codeElement]);

    // COPY TO CLIPBOARD ===============================================================================================
    const copyToClipboard = async () => {
        try {
            const textToCopy = codeElement ? codeElement.textContent || "" : initialCode;
            await navigator.clipboard.writeText(textToCopy);
            setIsCodeCopied(true);
            setTimeout(() => setIsCodeCopied(false), 3000);
        } catch (err) {
            console.error("Could not copy text: ", err);
        }
    };

    // Keyboard shortcuts for copy button ------------------------------------------------------------------------------
    const handleKeyDown = async (e: React.KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === " ") && e.target === preRef.current) {
            e.preventDefault();
            await copyToClipboard();
        }
    };

    // LINE NUMBERS ====================================================================================================
    let classNames = [];

    if (showLineNumbers) {
        classNames.push("show-line-numbers");
    }

    // Split code into lines for line numbers --------------------------------------------------------------------------
    const lines = initialCode.split(/\r\n|\r|\n/gm);

    return (
        <Element<CodeBlockElementType>
            data-code-block
            as="div"
            classNames={classNames}
            role="region"
            aria-label={description || `Code block in ${language}`}
            {...props}
        >
            {/* Copy Button or Copied Badge */}
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

            {/* MAIN CODE DISPLAY ////////////////////////////////////////////////////////////////////////////////// */}
            <pre
                ref={preRef}
                className={`language-${language}`}
                tabIndex={0}
                aria-label={`Code in ${language}`}
            >
                {/* Line Numbers */}
                {showLineNumbers &&
                    Array.from(Array(lines.length).keys()).map((index) => (
                        <span
                            key={index}
                            className="line-numbers"
                            aria-hidden="true"
                        >
                            {index + 1}
                        </span>
                    ))}

                {/* Code Content */}
                <code
                    ref={setCodeElement}
                    contentEditable={contentEditable}
                    suppressContentEditableWarning={true}
                    spellCheck="false"
                    className={`language-${language} ${isLoading ? "is-loading" : ""}`}
                >
                    {initialCode}
                </code>
            </pre>
        </Element>
    );
});
