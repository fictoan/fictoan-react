import React, { Suspense, useState } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

import "./CodeBlock.css";

import parse from 'html-react-parser';
import { Prism } from "./prism";

export interface CodeBlockCustomProps {
    source          ? : object | string;
    language        ? : string | undefined;
    showCopyButton  ? : boolean;
    showLineNumbers ? : boolean;
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
      ...props
    }: CodeBlockProps,
    ref: React.Ref<CodeBlockElementType>
  ) => {
    const [isCodeCopied, setIsCodeCopied] = useState(false);

    // Use children if provided, else use source
    let code =
      typeof children === "string"
        ? children
        : React.Children.toArray(children).join("");
    if (!children) {
      code =
        typeof source === "object"
          ? JSON.stringify(source, null, 2)
          : source ?? "";
    }

    let classNames = [];

    if (showLineNumbers) {
      classNames.push("show-line-numbers");
    }

    const lines = code.split(/\r\n|\r|\n/gm);

    const highlightElement = () => {
      const languageGrammar = Prism.languages[language];
      
      if (typeof languageGrammar === "undefined") {
          return code
      }
      else{
          return Prism.highlight(code, languageGrammar, language)
      }
    }

    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCodeCopied(true);
          setTimeout(() => setIsCodeCopied(false), 3000); // Revert back after 3 seconds
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    };

    return (
      <Element<CodeBlockElementType>
        data-code-block
        as="div"
        classNames={classNames}
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
              role="button"
              aria-label="Copy code to clipboard"
            >
              Copy
            </Button>
          )
        ) : null}
        <pre ref={ref} className={`language-${language}`}>
            {showLineNumbers && Array.from(Array(lines.length).keys()).map((index) => {
                return <span className="line-numbers">{index + 1}</span>
            })}
          {parse(highlightElement())}
        </pre>
      </Element>
    );
  }
);
