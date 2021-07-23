import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SelectWrapperStyled, SelectStyled } from "./Select.styled";

import { InputLabel } from "../InputLabel/InputLabel";
import { FormItem } from "../FormItem/FormItem";

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
export type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;

const Option = ({ name, ...props }: OptionProps) => {
    return (
        <Element<OptionElementType> as="option" {...props}>
            {name}
        </Element>
    );
};

export const Select = React.forwardRef(
    (
        { label, helpText, errorText, className, options, ...props }: SelectProps,
        ref: React.Ref<SelectElementType>
    ) => {
        return (
            <FormItem>
                <Element<HTMLDivElement> as={SelectWrapperStyled} className={className}>
                    <Element<SelectElementType> as={SelectStyled} ref={ref} {...props}>
                        {options.map((option, index) => {
                            return <Option key={index} {...option} />;
                        })}
                    </Element>
                </Element>

                {label && <InputLabel label={label} helpText={helpText} errorText={errorText} />}
            </FormItem>
        );
    }
);
