import React from "react";

import { Element } from "../../Element/Element";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";
import { BaseInputComponentWithIconProps } from "./constants";

export type InputElementType = HTMLInputElement | HTMLDivElement | HTMLSelectElement;
export const BaseInputComponent = React.forwardRef(
    <K extends InputElementType>(
        {
            as: Component,
            className,
            label,
            helpText,
            errorText,
            iconLeft,
            iconRight,
            validateThis,
            classNames,
            ...inputProps
        }: BaseInputComponentWithIconProps<K>,
        ref: React.LegacyRef<InputElementType>
    ) => (
        <FormItem required={inputProps.required}>
            <Element<K>
                as={Component}
                ref={ref}
                classNames={[
                    className,
                    iconLeft && "with-icon-left",
                    iconRight && "with-icon-right",
                    validateThis && "validate-this",
                ].concat(classNames)}
                {...inputProps}
            />

            {iconLeft && <Element as="span" className="icon-left">{iconLeft}</Element>}
            {iconRight && <Element as="span" className="icon-right">{iconRight}</Element>}

            {label && <InputLabel label={label} htmlFor={inputProps.id} />}

            {(helpText || errorText) && (
                <Element as="div" className="info-section vertically-center-items" marginTop="nano">
                    {helpText && <Element as="span" className="help-text">{helpText}</Element>}
                    {errorText && <Element as="span" className="error-text">{errorText}</Element>}
                </Element>
            )}
        </FormItem>
    )
) as <K extends InputElementType>(
    props: BaseInputComponentWithIconProps<K> & { ref?: React.LegacyRef<InputElementType> }
) => React.ReactElement;
