import React, { createRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

import { InputField } from "../InputField/InputField";
import { Div } from "../../Element/Tags";

import { CommonAndHTMLProps } from "../../Element/constants";

import "./PinInputField.css";

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
};

export type PinInputFieldElementType = HTMLDivElement & { reset: () => void };
export type PinInputFieldProps = Omit<CommonAndHTMLProps<PinInputFieldElementType>, keyof PinInputFieldCustomProps> &
    PinInputFieldCustomProps;

function validate(value: string, type: "alphanumeric" | "number") {
    const NUMERIC_REGEX = /^[0-9]+$/;
    const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
    const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
    return regex.test(value);
}

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
            ...props
        }: PinInputFieldProps,
        ref: React.Ref<PinInputFieldElementType>
    ) => {
        const pinInputFieldRef = useRef<PinInputFieldElementType>(null);
        const [inputRefs, setInputRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);
        const [values, setValues] = useState<string[]>([]);
        const [moveFocus, setMoveFocus] = useState<boolean>(true);
        const [focusedIndex, setFocusedIndex] = useState<number>(-1);

        const focus = useCallback(
            (index: number) => {
                const ref = inputRefs[index];
                ref?.current?.focus();
            },
            [inputRefs]
        );

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
            // @ts-ignore
            () => {
                return {
                    ...pinInputFieldRef.current,
                    reset() {
                        handleResetPinInput();
                    },
                };
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
            onChange?.("");
            if (focusFirstInputOnReset) {
                focus(0);
                setFocusedIndex(0);
            }
        }, [length, onChange, focus, focusFirstInputOnReset]);

        const setValue = useCallback(
            (value: string, index: number) => {
                const nextValues = [...values];
                nextValues[index] = value;
                setValues(nextValues);
                onChange?.(nextValues.join(""));

                const isComplete =
                    value !== "" &&
                    nextValues.length === length &&
                    nextValues.every((inputValue) => inputValue != null && inputValue !== "") &&
                    index == length - 1;

                if (!isComplete) {
                    setMoveFocus(true);
                    focusNext(index);
                }
            },
            [focusNext, length, onChange, values]
        );

        const handleInputChange = (event: React.FormEvent<HTMLInputElement>, inputFieldIndex: number) => {
            const eventValue = event.currentTarget.value;
            const currentValue = values[inputFieldIndex];

            if (eventValue === "") {
                setValue("", inputFieldIndex);
                return;
            }

            // Handle scenario where multiple characters are entered in a single InputField
            if (eventValue.length > 1 && inputFieldIndex < length - 1) {
                if (validate(eventValue, type)) {
                    let nextValue: string[] = [];
                    // In all cases, we need to ensure characters longer than the remaining fields are removed.
                    if (currentValue == "") {
                        // Case: Current input field is empty
                        nextValue = eventValue.split("").filter((_, j) => inputFieldIndex + j < length);
                    } else if (event.currentTarget.selectionEnd === eventValue.length) {
                        // Case: Current field has a value and cursor is after it
                        nextValue = eventValue.split("").filter((_, j) => j > 0 && inputFieldIndex + j - 1 < length);
                    } else {
                        // Case: Current field has a value and cursor is before it
                        nextValue = eventValue
                            .split("")
                            .filter((_, j) => j < eventValue.length - 1 && inputFieldIndex + j < length);
                    }
                    setValues((values) =>
                        values.map((v, j) =>
                            j >= inputFieldIndex && j < inputFieldIndex + nextValue.length
                                ? nextValue[j - inputFieldIndex]
                                : v
                        )
                    );
                    focus(
                        inputFieldIndex + nextValue.length < length ? inputFieldIndex + nextValue.length : length - 1
                    );
                    onChange?.(nextValue.join(""));
                }
            } else {
                let nextValue = eventValue;
                if (currentValue?.length > 0) {
                    if (currentValue[0] === eventValue.charAt(0)) {
                        nextValue = eventValue.charAt(1);
                    } else if (currentValue[0] === eventValue.charAt(1)) {
                        nextValue = eventValue.charAt(0);
                    }
                }
                if (validate(nextValue, type)) {
                    setValue(nextValue, inputFieldIndex);
                }
            }
        };

        const onKeyDown = (event: React.KeyboardEvent, i: number) => {
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
                onBlur();
            } else if (event.key === "ArrowRight") {
                if (i < length - 1) {
                    focus(i + 1);
                }
            } else if (event.key === "ArrowLeft") {
                if (i > 0) {
                    focus(i - 1);
                }
            }
        };

        const onFocus = (e: React.FocusEvent<HTMLInputElement>, i: number) => {
            setFocusedIndex(i);
        };

        // When moving around the InputElements using tab key, browsers automatically select
        // the value (if it exists) in the InputElement - which we want to disable. Additionally,
        // when an existing value is selected/highlighted and pasted over, there is no way to
        // clearly distinguish between the other 2 scenarios of pasting by keeping the cursor before
        // and after the existing value. Specific example: If the existing value is 5, the event
        // when highlighting and pasting '567' is the same as placing the cursor before the existing
        // value and pasting '67'. By disabling this, we eliminate one of these cases.
        // Is this a hack? Yes. Is there a better way? IDK. Does it matter? Not unless there is a
        // valid reason for users to need selecting a single InputElement within a PinInput.
        const onSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
            const target = e.target as HTMLInputElement;
            setTimeout(() => {
                // https://github.com/facebook/react/issues/6483
                target.setSelectionRange(target.value.length, target.value.length);
            }, 0);
        };

        const onBlur = () => {
            setFocusedIndex(-1);
        };

        let classNames: string[] | undefined = [];

        if (isFullWidth) {
            classNames.push("full-width");
        }

        return (
            <Div data-pin-input-field ref={pinInputFieldRef} {...props} classNames={classNames}>
                {[...Array(length)].map((_, i) => (
                    <InputField
                        key={i}
                        ref={inputRefs[i]}
                        type={mask ? "password" : type === "number" ? "tel" : "text"}
                        inputMode={type === "number" ? "numeric" : "text"}
                        onChange={(e) => handleInputChange(e, i)}
                        onKeyDown={(e) => onKeyDown(e, i)}
                        onFocus={(e) => onFocus(e, i)}
                        onSelect={(e) => onSelect(e)}
                        onBlur={onBlur}
                        placeholder={focusedIndex !== i ? `\u2981` : undefined}
                        autoComplete={isOTP ? "one-time-code" : "off"}
                        value={values[i] || ""}
                        autoFocus={autoFocus && i === 0}
                        onCopy={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                        onPaste={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                    />
                ))}
            </Div>
        );
    }
);
