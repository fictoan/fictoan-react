// FRAMEWORK ===========================================================================================================
import React, { createRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

// FICTOAN =============================================================================================================
import { InputField } from "../InputField/InputField";
import { Div } from "../../Element/Tags";

// STYLES ==============================================================================================================
import "./PinInputField.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

interface PinInputFieldHandle extends HTMLDivElement {
    reset: () => void;
}

// prettier-ignore
type PinInputFieldCustomProps = {
    numberOfFields           : number;
    onChange               ? : (value: string) => void;
    type                   ? : "alphanumeric" | "number";
    mask                   ? : boolean;
    isOTP                  ? : boolean;
    autoFocus              ? : boolean;
    pasteFromClipboard     ? : "enabled" | "disabled";
    focusFirstInputOnReset ? : boolean;
    isFullWidth            ? : boolean;
    ariaLabel              ? : string;
};

export type PinInputFieldElementType = HTMLDivElement & { reset: () => void };
export type PinInputFieldProps = Omit<CommonAndHTMLProps<PinInputFieldElementType>, keyof PinInputFieldCustomProps> &
    PinInputFieldCustomProps;

// UTILITIES ///////////////////////////////////////////////////////////////////////////////////////////////////////////
function validate(value: string, type: "alphanumeric" | "number") {
    const NUMERIC_REGEX = /^[0-9]+$/;
    const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
    const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
    return regex.test(value);
}

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const PinInputField = React.forwardRef(
    (
        {
            numberOfFields: length,
            onChange,
            type = "number",
            mask = false,
            isOTP = false,
            autoFocus = false,
            pasteFromClipboard = "enabled",
            focusFirstInputOnReset = true,
            isFullWidth,
            ariaLabel,
            ...props
        }: PinInputFieldProps,
        ref: React.Ref<PinInputFieldElementType>
    ) => {
        // REFS =====================================================================================================
        const pinInputFieldRef = useRef<PinInputFieldElementType>(null);
        const [inputRefs, setInputRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);

        // STATES ===================================================================================================
        const [values, setValues] = useState<string[]>([]);
        const [moveFocus, setMoveFocus] = useState<boolean>(true);
        const [focusedIndex, setFocusedIndex] = useState<number>(-1);

        // CONSTANTS ================================================================================================
        const inputGroupId = props.id || `pin-input-${Math.random().toString(36).substring(2, 9)}`;
        const inputDescription = ariaLabel || 'Enter verification code';

        // HANDLERS =================================================================================================
        const focus = useCallback(
            (index: number) => {
                const ref = inputRefs[index];
                ref?.current?.focus();
            },
            [inputRefs]
        );

        const focusNext = useCallback(
            (index: number) => {
                if (!moveFocus) return;
                const next = index + 1 < length ? index + 1 : null;
                if (next) {
                    focus(next);
                }
            },
            [focus, length, moveFocus]
        );

        const handleResetPinInput = useCallback(() => {
            setValues(Array(length).fill(""));
            onChange?.(""); // Clear the complete value
            if (focusFirstInputOnReset) {
                focus(0);
                setFocusedIndex(0);
            }
        }, [length, onChange, focus, focusFirstInputOnReset]);

        // VALUE HANDLING ==============================================================================================
        const setValue = useCallback(
            (value: string, index: number) => {
                const nextValues = [...values];
                nextValues[index] = value;
                setValues(nextValues);

                // Emit complete PIN value
                onChange?.(nextValues.join(""));

                const isComplete =
                          value !== "" &&
                          nextValues.length === length &&
                          nextValues.every((inputValue) => inputValue != null && inputValue !== "") &&
                          index === length - 1;

                if (!isComplete) {
                    setMoveFocus(true);
                    focusNext(index);
                }
            },
            [focusNext, length, onChange, values]
        );

        // Updated input handler to work with both string values and events
        const handleInputChange = useCallback((inputValue: string | React.FormEvent<HTMLInputElement>, inputFieldIndex: number) => {
            // Extract value whether we get a string or an event
            const value = typeof inputValue === "string" ? inputValue : (inputValue.target as HTMLInputElement).value;
            const currentValue = values[inputFieldIndex];

            if (value === "") {
                setValue("", inputFieldIndex);
                return;
            }

            // Rest of the logic remains the same
            if (value.length > 1 && inputFieldIndex < length - 1) {
                if (validate(value, type)) {
                    let nextValue: string[] = [];
                    const chars = value.split("");

                    if (currentValue === "") {
                        nextValue = chars.filter((_, j) => inputFieldIndex + j < length);
                    } else {
                        const isAppending = inputRefs[inputFieldIndex].current?.selectionEnd === value.length;
                        if (isAppending) {
                            nextValue = chars.filter((_, j) => j > 0 && inputFieldIndex + j - 1 < length);
                        } else {
                            nextValue = chars.filter((_, j) => j < value.length - 1 && inputFieldIndex + j < length);
                        }
                    }

                    const newValues = values.map((v, j) =>
                        j >= inputFieldIndex && j < inputFieldIndex + nextValue.length
                            ? nextValue[j - inputFieldIndex]
                            : v
                    );

                    setValues(newValues);
                    onChange?.(newValues.join(""));

                    const nextFocusIndex = Math.min(inputFieldIndex + nextValue.length, length - 1);
                    focus(nextFocusIndex);
                }
            } else {
                let nextValue = value;
                if (currentValue?.length > 0) {
                    nextValue = value.charAt(value.length - 1);
                }
                if (validate(nextValue, type)) {
                    setValue(nextValue, inputFieldIndex);
                }
            }
        }, [length, onChange, setValue, type, values, focus, inputRefs]);

        const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>, i: number) => {
            if (event.key === "Backspace") {
                if ((event.target as HTMLInputElement).value === "") {
                    if (i > 0) {
                        const newIndex = i - 1;
                        setValue("", newIndex);
                        focus(newIndex);
                        setMoveFocus(true);
                    }
                } else {
                    setMoveFocus(false);
                }
            } else if (event.key === "Escape") {
                inputRefs[i].current?.blur();
                handleBlur();
            } else if (event.key === "ArrowRight") {
                if (i < length - 1) {
                    focus(i + 1);
                }
            } else if (event.key === "ArrowLeft") {
                if (i > 0) {
                    focus(i - 1);
                }
            }
        }, [focus, setValue, inputRefs, length]);

        // EVENT HANDLERS ==============================================================================================
        // Updated focus handler to work with event type
        const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement> | undefined, i: number) => {
            setFocusedIndex(i);
        }, []);

        // When moving around the InputElements using tab key, browsers automatically select
        // the value (if it exists) in the InputElement - which we want to disable. Additionally,
        // when an existing value is selected/highlighted and pasted over, there is no way to
        // clearly distinguish between the other 2 scenarios of pasting by keeping the cursor before
        // and after the existing value. Specific example: If the existing value is 5, the event
        // when highlighting and pasting '567' is the same as placing the cursor before the existing
        // value and pasting '67'. By disabling this, we eliminate one of these cases.
        // Is this a hack? Yes. Is there a better way? IDK. Does it matter? Not unless there is a
        // valid reason for users to need selecting a single InputElement within a PinInput.
        const handleSelect = useCallback((e: React.SyntheticEvent<HTMLInputElement, Event>) => {
            const target = e.target as HTMLInputElement;
            setTimeout(() => {
                target.setSelectionRange(target.value.length, target.value.length);
            }, 0);
        }, []);

        const handleBlur = useCallback(() => {
            setFocusedIndex(-1);
        }, []);

        // EFFECTS =====================================================================================================
        useEffect(() => {
            setInputRefs((inputRefs) => {
                const refs = Array(length)
                    .fill(0)
                    .map((_, i) => {
                        const ref = inputRefs[i] || createRef();
                        if (autoFocus && i === 0) {
                            ref.current?.focus();
                        }
                        return ref;
                    });
                return refs;
            });
        }, [length, autoFocus]);

        useImperativeHandle(
            ref,
            () => ({
                ...(pinInputFieldRef.current as HTMLDivElement),
                reset: handleResetPinInput
            }) as PinInputFieldHandle,
            [handleResetPinInput]
        );

        // RENDER ==================================================================================================
        let classNames: string[] = [];

        if (isFullWidth) {
            classNames.push("full-width");
        }

        return (
            <Div
                data-pin-input-field
                ref={pinInputFieldRef}
                classNames={isFullWidth ? ["full-width"] : []}
                role="group"
                aria-label={inputDescription}
                aria-required={props.required}
                {...props}
            >
                {Array.from({ length }, (_, i) => (
                    <InputField
                        key={i}
                        id={`${inputGroupId}-${i}`}
                        ref={inputRefs[i]}
                        type={mask ? "password" : type === "number" ? "tel" : "text"}
                        inputMode={type === "number" ? "numeric" : "text"}
                        onChange={(value: string | React.FormEvent<HTMLInputElement>) => handleInputChange(value, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onFocus={(e) => handleFocus(e as React.FocusEvent<HTMLInputElement>, i)}
                        onSelect={handleSelect}
                        onBlur={handleBlur}
                        placeholder={focusedIndex !== i ? "\u2981" : undefined}
                        autoComplete={isOTP ? "one-time-code" : "off"}
                        value={values[i] || ""}
                        autoFocus={autoFocus && i === 0}
                        onCopy={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                        onPaste={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                        aria-label={`Digit ${i + 1} of ${length}`}
                        aria-required={props.required}
                    />
                ))}
            </Div>
        );
    }
);
