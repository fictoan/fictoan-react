import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import "./select.css";

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
        <Element<HTMLDivElement> as="div" data-select className={className} disabled={props.disabled}>
            <Element<SelectElementType> as="select" {...props}>
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
