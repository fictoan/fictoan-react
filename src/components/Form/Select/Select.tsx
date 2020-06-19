import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";


export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

interface SelectCustomProps {
    options       : CommonAndHTMLProps<OptionElementType>[];
    isFullWidth ? : boolean;
    label       ? : string;
    helpText    ? : string;
    errorText   ? : string;
}

export type OptionProps = CommonAndHTMLProps<SelectElementType>;
export type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;

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

export const Select = ({
    label,
    helpText,
    errorText,
    isFullWidth,
    className,
    options,
    ...props
}: SelectProps) => {
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
                        return (
                            <Option key={index} {...option}/>
                        )
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
