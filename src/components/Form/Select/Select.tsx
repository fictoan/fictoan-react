import React from "react";

import { Element } from "../../Element/Element";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";
import { SelectElementType, OptionElementType, SelectProps, OptionProps } from "./constants";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

const Option = ({ name, ...props }: OptionProps) => {
    return (
        <Element<OptionElementType>
            as="option"
            {...props}
        >
            {name}
        </Element>
    );
}

export const Select = ({ label, helpText, errorText, isFullWidth, className, options, ...props }: SelectProps) => {
    return (
        <FormItem>
            <Element<HTMLDivElement>
                as={SelectWrapperStyled}
                isFullWidth={isFullWidth}
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
