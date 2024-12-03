// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { Div } from "../../Element/Tags";

// STYLES ==============================================================================================================
import "./input-field.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps, InputSideElementProps } from "../BaseInputComponent/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

export type InputFieldElementType = HTMLInputElement;
export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> &
    InputLabelCustomProps &
    InputCommonProps &
    InputSideElementProps;

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
            ...props
        }: InputFieldProps, ref: React.Ref<InputFieldElementType>) => {
        // Render either icon or string ================================================================================
        const renderSideElement = (
            content: React.ReactNode | string | undefined,
            position: "left" | "right",
        ) => {
            if (!content) return null;

            const isText = typeof content === "string";
            const elementRef = React.useRef<HTMLDivElement>(null);

            // Effect to measure and set the width
            React.useEffect(() => {
                if (isText && elementRef.current) {
                    const width = elementRef.current.getBoundingClientRect().width;
                    // Set the appropriate custom property based on position
                    const propertyName = `--side-element-${position}-width`;
                    (elementRef.current.closest('[data-form-item]') as HTMLElement).style.setProperty(
                        propertyName,
                        `${width}px`
                    );
                }
            }, [content, isText, position]);

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
                    {...props}
                >

                    <Div
                        data-input-helper
                        aria-hidden="true"
                    >
                        {renderSideElement(iconLeft || stringLeft, "left")}

                        {renderSideElement(iconRight || stringRight, "right")}
                    </Div>
                </BaseInputComponent>
            </>
        );
    },
);
