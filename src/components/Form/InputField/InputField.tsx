// FRAMEWORK ===========================================================================================================
import React, { FormEventHandler } from "react";

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
            iconLeft,
            iconRight,
            stringLeft,
            stringRight,
            onChange,
            ...props
        }: InputFieldProps, ref: React.Ref<InputFieldElementType>
    ) => {

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

        // Render either icon or string ================================================================================
        const renderSideElement = (
            content: React.ReactNode | string | undefined,
            position: "left" | "right",
        ) => {
            if (!content) return null;

            const isText     = typeof content === "string";
            const elementRef = React.useRef<HTMLDivElement>(null);

            // Effect to measure and set the width
            React.useEffect(() => {
                if (isText && elementRef.current) {
                    const width        = elementRef.current.getBoundingClientRect().width;
                    // Set the appropriate custom property based on position
                    const propertyName = `--side-element-${position}-width`;
                    (elementRef.current.closest("[data-form-item]") as HTMLElement)?.style.setProperty(
                        propertyName,
                        `${width}px`,
                    );
                }
            }, [ content, isText, position ]);

            return (
                <Div
                    ref={elementRef}
                    data-input-side-element
                    className={`${position} ${isText ? "is-text" : "is-icon"}`}
                    aria-hidden="true"
                >
                    {content}
                </Div>
            );
        };

        const hasLeftElement  = Boolean(iconLeft || stringLeft);
        const hasRightElement = Boolean(iconRight || stringRight);

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
                        {renderSideElement(iconLeft || stringLeft, "left")}
                        {renderSideElement(iconRight || stringRight, "right")}
                    </Div>
                </BaseInputComponent>
            </>
        );
    },
);
