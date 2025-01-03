// FRAMEWORK ===========================================================================================================
import React, { FormEventHandler, useEffect, useRef } from "react";

// FICTOAN =============================================================================================================
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { Div } from "../../Element/Tags";

// STYLES ==============================================================================================================
import "./input-field.css";

// TYPES ===============================================================================================================
import {
    BaseInputComponentProps,
    InputCommonProps,
    InputFocusHandler,
    InputSideElementProps,
} from "../BaseInputComponent/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

// prettier-ignore
export type InputFieldElementType = HTMLInputElement;
export type InputFieldProps = Omit<BaseInputComponentProps<HTMLInputElement>, "onChange"> &
    InputLabelCustomProps & InputCommonProps & InputSideElementProps & {
    type         ? : "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "file";
    placeholder  ? : string;
    autoComplete ? : string;
    maxLength    ? : number;
    minLength    ? : number;
    pattern      ? : string;
    readOnly     ? : boolean;
    required     ? : boolean;
    onFocus      ? : InputFocusHandler;
    onBlur       ? : InputFocusHandler;
    onChange     ? :
        | ((value: string) => void)
        | FormEventHandler<HTMLInputElement>
        | ((event: React.ChangeEvent<HTMLInputElement>) => void);
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const InputField = React.forwardRef(
    (
        {
            "aria-label"   : ariaLabel,
            "aria-invalid" : ariaInvalid,
            innerIconLeft,
            innerIconRight,
            innerTextLeft,
            innerTextRight,
            onChange,
            ...props
        }: InputFieldProps, ref: React.Ref<InputFieldElementType>
    ) => {
        const leftElementRef = useRef<HTMLDivElement>(null);
        const rightElementRef = useRef<HTMLDivElement>(null);

        // Wrap the onChange handler to ensure correct typing ==========================================================
        const handleChange = (valueOrEvent: string | React.FormEvent<HTMLInputElement>) => {
            if (!onChange) return;

            // If it's a FormEvent
            if (typeof valueOrEvent !== "string" && "target" in valueOrEvent) {
                (onChange as FormEventHandler<HTMLInputElement>)(valueOrEvent);
            }
            // If it's a direct string value
            else if (typeof valueOrEvent === "string") {
                (onChange as (value: string) => void)(valueOrEvent);
            }
        };


        // Effect for handling side element measurements ===============================================================
        useEffect(() => {
            const updateElementWidth = (element: HTMLDivElement | null, position: "left" | "right") => {
                if (element) {
                    const width = element.getBoundingClientRect().width;
                    const propertyName = `--side-element-${position}-width`;
                    const formItem = element.closest("[data-form-item]") as HTMLElement;
                    if (formItem) {
                        formItem.style.setProperty(propertyName, `${width}px`);
                    }
                }
            };

            if (innerTextLeft || innerIconLeft) {
                updateElementWidth(leftElementRef.current, "left");
            }
            if (innerTextRight || innerIconRight) {
                updateElementWidth(rightElementRef.current, "right");
            }
        }, [innerTextLeft, innerTextRight, innerIconLeft, innerIconRight]);

        // Render either icon or string ================================================================================
        const renderSideElement = (
            content: React.ReactNode | string | undefined,
            position: "left" | "right",
            ref: React.RefObject<HTMLDivElement>
        ) => {
            if (!content) return null;

            const isText = typeof content === "string";
            const isInteractive = !isText && React.isValidElement(content) &&
                (content.props.onClick || content.props.onKeyDown ||
                    content.type === "button" || content.type === "a");

            return (
                <Div
                    ref={ref}
                    data-input-side-element
                    className={`${position} ${isText ? "is-text" : "is-icon"} ${isInteractive ? "is-interactive" : ""}`}
                    aria-hidden="true"
                >
                    {content}
                </Div>
            );
        };

        const hasLeftElement  = Boolean(innerIconLeft || innerTextLeft);
        const hasRightElement = Boolean(innerIconRight || innerTextRight);

        return (
            <>
                <BaseInputComponent<InputFieldElementType>
                    as="input"
                    data-input-field
                    ref={ref}
                    className={[
                        hasLeftElement ? "with-left-element" : "",
                        hasRightElement ? "with-right-element" : "",
                    ].filter(Boolean).join(" ")}
                    aria-label={ariaLabel || props.label}
                    aria-invalid={ariaInvalid || props.invalid || undefined}
                    aria-required={props.required}
                    placeholder=" "
                    onChange={handleChange}
                    {...props}
                >
                    <Div data-input-helper aria-hidden="true">
                        {renderSideElement(innerIconLeft || innerTextLeft, "left", leftElementRef)}
                        {renderSideElement(innerIconRight || innerTextRight, "right", rightElementRef)}
                    </Div>
                </BaseInputComponent>
            </>
        );
    },
);
