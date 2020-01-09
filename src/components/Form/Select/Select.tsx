import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";
import { SelectElementType, OptionElementType, SelectProps, OptionProps } from "./constants";

const Option = ({ name, ...props }: OptionProps) => {
    return <BaseComponent<OptionElementType>
            Element="option"
            {...props}
        >
            {name}
        </BaseComponent>;
};

const Select = ({ fullWidth, className, options, ...props }: SelectProps) => {
    return (
        <BaseComponent<HTMLDivElement>
            Element={SelectWrapperStyled}
            fullWidth={fullWidth}
            className={className}
        >
            <BaseComponent<SelectElementType>
                Element={SelectStyled}
                {...props}
            />
        </BaseComponent>
    );
};

export default Select;
