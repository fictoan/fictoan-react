// FRAMEWORK ===========================================================================================================
import React, { ChangeEvent, FormEvent } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

// TYPES ===============================================================================================================
import { BaseInputComponentWithIconProps, InputChangeEvent } from "./constants";

export type InputElementType = HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const BaseInputComponent = React.forwardRef(
    <K extends InputElementType>(
        {
            as: Component,
            className,
            label,
            helpText,
            errorText,
            validateThis,
            classNames,
            children,
            onChange,
            onValueChange,
            ...inputProps
        }: BaseInputComponentWithIconProps<K>,
        ref: React.LegacyRef<InputElementType>
    ) => {
        // Handle both new value-based and legacy event-based onChange
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!onChange) return;

            // If the handler is looking for just the value (has exactly one parameter)
            if (onChange.length === 1) {
                (onChange as (value: string) => void)(event.target.value);
            } else {
                // Otherwise pass the whole event
                (onChange as (e: ChangeEvent<HTMLInputElement>) => void)(event);
            }
        };

        return (
            <FormItem
                data-form-item
                required={inputProps.required}
            >
                {/* LABEL ////////////////////////////////////////////////////////////////////////////////////////// */}
                {label && <InputLabel label={label} htmlFor={inputProps.id} />}

                {/* MAIN INPUT ///////////////////////////////////////////////////////////////////////////////////// */}
                <Div data-input-wrapper>
                    {/* MAIN INPUT */}
                    <Element<K>
                        as={Component}
                        ref={ref}
                        classNames={[
                            className || "",
                            validateThis ? "validate-this" : "",
                        ].concat(classNames || [])}
                        {...inputProps}
                        onChange={handleChange}
                    />
                    {children}
                </Div>

                {/* INFO SECTION /////////////////////////////////////////////////////////////////////////////////// */}
                {(helpText || errorText) && (
                    <Div className="info-section vertically-center-items">
                        {helpText && (
                            <Element as="span" className="help-text">
                                {helpText}
                            </Element>
                        )}
                        {errorText && (
                            <Element as="span" className="error-text">
                                {errorText}
                            </Element>
                        )}
                    </Div>
                )}
            </FormItem>
        );
    }
) as <K extends InputElementType>(
    props: BaseInputComponentWithIconProps<K> & {
        ref ? : React.LegacyRef<InputElementType>
    }
) => React.ReactElement;
