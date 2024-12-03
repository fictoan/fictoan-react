// FRAMEWORK ===========================================================================================================
import React, { FormEvent } from "react";

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
            children,
            onChange,
            ...inputProps
        }: BaseInputComponentWithIconProps<K>,
        ref: React.LegacyRef<InputElementType>
    ) => {
        return (
            <FormItem
                data-form-item
                required={inputProps.required}
            >
                {/* LABEL ////////////////////////////////////////////////////////////////////////////////////////////// */}
                {label && <InputLabel label={label} htmlFor={inputProps.id} />}

                {/* MAIN INPUT ///////////////////////////////////////////////////////////////////////////////////////// */}
                <Div data-input-wrapper>
                    {/* MAIN INPUT */}
                    <Element<K>
                        as={Component}
                        ref={ref}
                        classNames={[
                            className || "",
                            validateThis ? "validate-this" : "",
                        ].concat(classNames || [])}
                        onChange={onChange}
                        {...inputProps}
                    />
                    {children}
                </Div>

                {/* INFO SECTION /////////////////////////////////////////////////////////////////////////////////////// */}
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
