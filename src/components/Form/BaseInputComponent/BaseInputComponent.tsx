// FRAMEWORK ===========================================================================================================
import React, { FormEvent } from "react";

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
        const handleChange = (event: InputChangeEvent) => {
            if (onChange) {
                // Check handler type and adapt accordingly
                if (onChange.length === 1 && typeof onChange === "function") {
                    const firstParam = onChange.toString().match(/\((.*?)\)/)?.[1];
                    if (firstParam?.includes("event")) {
                        (onChange as (e: InputChangeEvent) => void)(event);
                        return;
                    }
                }
                // Default to value-based pattern
                (onChange as (value: string) => void)(event.target.value);
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

function isFormEvent(event: any): event is FormEvent<any> {
    return event && "target" in event && "currentTarget" in event;
}
