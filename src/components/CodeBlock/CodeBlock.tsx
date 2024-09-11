import React, { Suspense, useState } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

import "./CodeBlock.css";

import type { Theme } from "./themes";
import { fictoan } from "./themes";
import { Prism } from "./prism";

export interface CodeBlockCustomProps {
    source          ? : object | string;
    language        ? : string | undefined;
    showCopyButton  ? : boolean;
    showLineNumbers ? : boolean;
    theme           ? : Theme
}

export type CodeBlockElementType = HTMLPreElement;
export type CodeBlockProps = Omit<CommonAndHTMLProps<CodeBlockElementType>, keyof CodeBlockCustomProps> &
    CodeBlockCustomProps;

// const PrismReactRenderer = React.lazy(() =>
//   import("prism-react-renderer").then((prismModule) => {
//     if (prismModule.Highlight) {
//       return { default: prismModule.Highlight };
//     }

//     // DON’T REMOVE THE WEIRD SPACING, IT’S FOR THE ASCII BOX
//     // TO ACCOUNT FOR THE ESCAPE CHARACTERS
//     console.log(
//       `FICTOAN : \x1B[35mLooking\x1B[33m for\x1B[32m syntax\x1B[34m highlighting\x1B[36m?\x1B[31m
// ╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
// │   Please install the prism-react-renderer (https://www.npmjs.com/package/prism-react-renderer)   │
// │   package to have syntax highlighting in the CodeBlock component.                                │
// │   For example: \x1b[46m\x1b[30myarn add prism-react-renderer\x1B[0m\x1B[31m                                                     │
// ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯`
//     );
//     const fallbackCodeBlock = ({ code }: { code: string }) => (
//       <pre data-code-block className="module-fallback">
//         {code}
//       </pre>
//     );
//     return { default: fallbackCodeBlock };
//   })
// );

const stylesForToken = (token: Prism.Token, theme: Theme) => {
  let styles = { ...theme[token.type] };

  const aliases = Array.isArray(token.alias) ? token.alias : [token.alias];

  for (const alias of aliases) {
    styles = { ...styles, ...theme[alias] };
  }

  return styles;
};

const CodeBlockLine = ({
  token,
  theme,
  inheritedStyles,
}: {
  token: string | Prism.Token;
  theme: Theme;
  inheritedStyles?: React.CSSProperties;
}) => {
  if (token instanceof Prism.Token) {
    const styleForToken = {
      ...inheritedStyles,
      ...stylesForToken(token, theme),
    };

    if (token.content instanceof Prism.Token) {
      return (
        <span style={styleForToken}>
          <CodeBlockLine theme={theme} token={token.content} />
        </span>
      );
    } else if (typeof token.content === "string") {
      return <span style={styleForToken}>{token.content}</span>;
    }
    return (
      <>
        {token.content.map((subToken, i) => (
          <CodeBlockLine
            inheritedStyles={styleForToken}
            key={i}
            theme={theme}
            token={subToken}
          />
        ))}
      </>
    );
  }

  return <span style={inheritedStyles}>{token}</span>;
};

export const CodeBlock = React.forwardRef(
  (
    {
      children,
      source,
      language = "json",
      showCopyButton,
      showLineNumbers,
      theme = fictoan,
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

    const languageGrammar = Prism.languages[language];

    if (typeof languageGrammar === "undefined") {
      throw new Error(
        `CodeBlock: There is no language defined on Prism called ${language}`
      );
    }

    const lines = code.split(/\r\n|\r|\n/gm);

    const tokensPerLine = lines.map((line) =>
      Prism.tokenize(line, languageGrammar)
    );

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
        <pre ref={ref} style={{ ...theme.base, width: "100%" }}>
            {tokensPerLine.map((tokensForLine, lineIndex) => (
              <div key={lineIndex} className="token-line">
                {showLineNumbers && (
                  <span className="line-numbers">{lineIndex + 1}</span>
                )}

                {tokensForLine.map((token, i) => (
                  <CodeBlockLine key={i} theme={theme} token={token} />
                ))}
              </div>
            ))}
        </pre>
      </Element>
    );
  }
);
