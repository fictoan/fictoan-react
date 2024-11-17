// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

// TYPES ===============================================================================================================
import { BaseInputComponentWithIconProps } from "./constants";

export type InputElementType = HTMLInputElement | HTMLDivElement | HTMLSelectElement;

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
            ...inputProps
        }: BaseInputComponentWithIconProps<K>,
        ref: React.LegacyRef<InputElementType>
    ) => (
        <FormItem
            data-form-item
            required={inputProps.required}
        >
            <Element<K>
                as={Component}
                ref={ref}
                classNames={[
                    className || "",
                    validateThis ? "validate-this" : "",
                ].concat(classNames || [])}
                {...inputProps}
            />

            {label && <InputLabel label={label} htmlFor={inputProps.id} />}

            {(helpText || errorText) && (
                <Div className="info-section vertically-center-items" marginTop="nano">
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
    )
) as <K extends InputElementType>(
    props: BaseInputComponentWithIconProps<K> & { ref?: React.LegacyRef<InputElementType> }
) => React.ReactElement;
