// FRAMEWORK ===========================================================================================================
import React, { useRef } from "react";

// FICTOAN =============================================================================================================
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./textarea.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputLabelProps } from "../InputLabel/InputLabel";

export type TextareaElementType = HTMLTextAreaElement;
export type TextareaProps = CommonAndHTMLProps<TextareaElementType> & InputLabelProps & InputCommonProps & {
    onChange       ? : (value: string) => void;
    value          ? : string;
    rows           ? : number;
    cols           ? : number;
    minLength      ? : number;
    maxLength      ? : number;
    placeholder    ? : string;
    readOnly       ? : boolean;
    required       ? : boolean;
    autoComplete   ? : string;
    characterLimit ? : number;
    wordLimit      ? : number;
};

// Helper functions to determine limit states
const getLimitState = (current: number, limit: number): "normal" | "warning" | "exceeded" => {
    if (current > limit) return "exceeded";
    // For warning state, we calculate 90% of the limit (10% remaining)
    if (current >= limit * 0.9) return "warning";
    return "normal";
};

const pluralise = (count: number, singular: string, plural: string): string => {
    return Math.abs(count) === 1 ? singular : plural;
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const TextArea = React.forwardRef(
    (
        {
            onChange,
            value = "",
            characterLimit,
            wordLimit,
            helpText,
            ...props
        }: TextareaProps,
        ref: React.Ref<TextareaElementType>
    ) => {
        const textareaRef = useRef<HTMLTextAreaElement | null>(null);

        // HANDLE TEXT CHANGES =========================================================================================
        const handleChange = (newValue: string) => {
            onChange?.(newValue);
        };

        // HELP TEXT ===================================================================================================
        const constructHelpText = (): JSX.Element | null => {
            const limitsMessages: React.ReactNode[] = [];

            // Character limit -----------------------------------------------------------------------------------------
            if (characterLimit) {
                const currentChars = value.length;
                const limitState = getLimitState(currentChars, characterLimit);
                const excessChars = Math.max(0, currentChars - characterLimit);
                const remaining = characterLimit - currentChars;

                const message = (
                    <span
                        key="char-limit"
                        className={`limit-${limitState}`}
                    >
                        {excessChars > 0
                            ? `${excessChars} ${pluralise(excessChars, "char", "chars")} over limit`
                            : `${remaining} ${pluralise(remaining, "char", "chars")} left`
                        }
                    </span>
                );
                limitsMessages.push(message);
            }

            // Word limit ----------------------------------------------------------------------------------------------
            if (wordLimit) {
                const currentWords = value.trim().split(/\s+/).filter(Boolean).length;
                const limitState = getLimitState(currentWords, wordLimit);
                const excessWords = Math.max(0, currentWords - wordLimit);
                const remaining = wordLimit - currentWords;

                const message = (
                    <span
                        key="word-limit"
                        className={`limit-${limitState}`}
                    >
            {excessWords > 0
                ? `${excessWords} ${pluralise(excessWords, "word", "words")} over limit`
                : `${remaining} ${pluralise(remaining, "word", "words")} left`
            }
        </span>
                );
                limitsMessages.push(message);
            }

            // Combine help text and limit messages --------------------------------------------------------------------
            const limitsInfo = limitsMessages.length > 0
                ? limitsMessages.reduce((acc, msg, i) => (
                    <React.Fragment key={`message-${i}`}>
                        {acc}
                        {i > 0 && <span className="separator"> • </span>}
                        {msg}
                    </React.Fragment>
                ), <React.Fragment />)
                : null;

            // Combine with help text if it exists ---------------------------------------------------------------------
            if (!limitsInfo && !helpText) return null;

            return (
                <React.Fragment>
                    {helpText}
                    {helpText && limitsInfo && <span className="separator"> • </span>}
                    {limitsInfo}
                </React.Fragment>
            );
        };

        const setRefs = (element: HTMLTextAreaElement) => {
            textareaRef.current = element;

            // Handle both function and object refs
            if (typeof ref === "function") {
                ref(element);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
            }
        };

        return (
            <BaseInputComponent<TextareaElementType>
                as="textarea"
                data-textarea
                ref={setRefs}
                value={value}
                onChange={handleChange}
                // @ts-ignore
                helpText={constructHelpText()}
                {...props}
            />
        );
    }
);
