import React from "react";

import { Element } from "../../Element/Element";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";
import { SelectElementType, OptionElementType, SelectProps, OptionProps } from "./constants";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

const Option = ({ value, ...props }: OptionProps) => {
    return (
        <Element<OptionElementType>
            as="option"
            {...props}
        >
            {value}
        </Element>
    );
}

export const Select = ({ fullWidth, label, helpText, errorText, className, options, ...props }: SelectProps) => {
    return (
        <FormItem>
            <Element<HTMLDivElement>
                as={SelectWrapperStyled}
                fullWidth={fullWidth}
                className={className}
            >
                <Element<SelectElementType>
                    as={SelectStyled}
                    {...props}
                >
                    {options.map((option, index) => {
                        return <Option key={index} {...option}/>
                    })}
                </Element>
            </Element>

            {label && (
                <InputLabel
                    label={label}
                    helpText={helpText}
                    errorText={errorText}
                />
            )}
        </FormItem>
    );
}
