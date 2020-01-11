import React from "react";

import { Element } from "../../Element/Element";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";
import { SelectElementType, OptionElementType, SelectProps, OptionProps } from "./constants";

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

export const Select = ({ fullWidth, className, options, ...props }: SelectProps) => {
    return (
        <Element<HTMLDivElement>
            as={SelectWrapperStyled}
            fullWidth={fullWidth}
            className={className}
        >
            <Element<SelectElementType>
                as={SelectStyled}
                {...props}
            />
        </Element>
    );
}
