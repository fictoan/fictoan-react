import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

// prettier-ignore
export interface SelectCustomProps {
    options       : CommonAndHTMLProps<OptionElementType>[];
    label       ? : string;
    helpText    ? : string;
    errorText   ? : string;
}

export type OptionProps = CommonAndHTMLProps<OptionElementType>;
export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;

const SelectWithOptions = ({ options, className, ...props }: SelectProps) => {
    return (
        <Element<HTMLDivElement> as={SelectWrapperStyled} className={className}>
            <Element<SelectElementType> as={SelectStyled} {...props}>
                {options.map((option, index) => (
                    <Element<OptionElementType> as="option" key={index} {...option}>
                        {option.name}
                    </Element>
                ))}
            </Element>
        </Element>
    );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<SelectElementType>) => {
    return <BaseInputComponent<SelectElementType> as={SelectWithOptions} ref={ref} {...props} />;
});
