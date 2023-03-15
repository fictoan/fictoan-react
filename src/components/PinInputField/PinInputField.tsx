import React, { createRef, useCallback, useEffect, useState } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";
import { InputField } from "../Form/InputField/InputField";

import { PinInputStyled } from "./PinInputField.styled";

// prettier-ignore
type PinInputFieldCustomProps = {
    numberOfFields       : number;
    onChange           ? : (value : string) => void;
    type               ? : "alphanumeric" | "number";
    mask               ? : boolean;
    otp                ? : boolean;
    autoFocus          ? : boolean;
    pasteFromClipboard ? : "enabled" | "disabled";
    spacing            ? : SpacingTypes;
};

export type PinInputFieldElementType = HTMLDivElement;
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
            otp = false,
            autoFocus = false,
            pasteFromClipboard = "enabled",
            spacing = "small",
        }: PinInputFieldProps,
        ref: React.Ref<PinInputFieldElementType>
    ) => {
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

        const setValue = useCallback(
            (value: string, index: number) => {
                const nextValues = [...values];
                nextValues[index] = value;
                setValues(nextValues);
                onChange?.(nextValues.join(""));

                const isComplete =
                    value !== "" &&
                    nextValues.length === length &&
                    nextValues.every((inputValue) => inputValue != null && inputValue !== "");

                if (!isComplete) {
                    focusNext(index);
                }
            },
            [focusNext, length, onChange, values]
        );

        const getNextValue = useCallback((value: string, eventValue: string) => {
            let nextValue = eventValue;
            if (value?.length > 0) {
                if (value[0] === eventValue.charAt(0)) {
                    nextValue = eventValue.charAt(1);
                } else if (value[0] === eventValue.charAt(1)) {
                    nextValue = eventValue.charAt(0);
                }
            }
            return nextValue;
        }, []);

        const handleInputChange = (event: React.FormEvent<HTMLInputElement>, i: number) => {
            const eventValue = event.currentTarget.value;
            const currentValue = values[i];
            const nextValue = getNextValue(currentValue, eventValue);

            if (nextValue === "") {
                setValue("", i);
                return;
            }

            if (eventValue.length > 1 && i < length - 1) {
                if (validate(eventValue, type)) {
                    const nextValue = eventValue.split("").filter((_, index) => index > 0 && i + index - 1 < length);
                    setValues((values) =>
                        values.map((v, index) =>
                            index >= i && index < i + nextValue.length ? nextValue[index - i] : v
                        )
                    );
                    focus(i + nextValue.length < length ? i + nextValue.length : length - 1);
                    onChange?.(nextValue.join(""));
                }
            } else {
                if (validate(nextValue, type)) {
                    setValue(nextValue, i);
                }
                setMoveFocus(true);
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
            setTimeout(() => {
                // https://github.com/facebook/react/issues/6483
                e.target.setSelectionRange(e.target.value.length, e.target.value.length);
            }, 0);
        };

        const onBlur = () => {
            setFocusedIndex(-1);
        };

        let classNames = [];

        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        return (
            <Element<PinInputFieldElementType> as={PinInputStyled} classNames={classNames} ref={ref}>
                {[...Array(length)].map((_, i) => (
                    <InputField
                        key={i}
                        className="pin-input-field"
                        ref={inputRefs[i]}
                        type={mask ? "password" : type === "number" ? "tel" : "text"}
                        inputMode={type === "number" ? "numeric" : "text"}
                        onChange={(e) => handleInputChange(e, i)}
                        onKeyDown={(e) => onKeyDown(e, i)}
                        onFocus={(e) => onFocus(e, i)}
                        onBlur={onBlur}
                        placeholder={focusedIndex !== i ? `\u2981` : undefined}
                        autoComplete={otp ? "one-time-code" : "off"}
                        value={values[i] || ""}
                        autoFocus={autoFocus && i === 0}
                        onCopy={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                        onPaste={(e) => pasteFromClipboard === "disabled" && e.preventDefault()}
                    />
                ))}
            </Element>
        );
    }
);
