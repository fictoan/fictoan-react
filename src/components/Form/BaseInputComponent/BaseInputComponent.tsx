import React from "react";

import { Element } from "../../Element/Element";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";
import { BaseInputComponentWithIconProps } from "./constants";

export type InputFieldElementType = HTMLInputElement | HTMLDivElement;
export const BaseInputComponent = React.forwardRef(
    <K extends InputFieldElementType>(
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
        ref: React.LegacyRef<InputFieldElementType>
    ) => (
        <FormItem>
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

            {iconLeft && <span className="icon-left">{iconLeft}</span>}
            {iconRight && <span className="icon-right">{iconRight}</span>}

            {label && <InputLabel label={label} helpText={helpText} errorText={errorText} htmlFor={inputProps.id} />}
        </FormItem>
    )
) as <K extends InputFieldElementType>(
    props: BaseInputComponentWithIconProps<K> & { ref?: React.LegacyRef<InputFieldElementType> }
) => React.ReactElement;
