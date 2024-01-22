import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import "./select.css";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

export interface OptionProps {
    value      : string;
    label      : string;
    disabled ? : boolean;
}

export interface OptGroupProps {
    label   : string;
    options : OptionProps[];
}

export interface SelectCustomProps {
    options     : (OptionProps | OptGroupProps)[];
    label     ? : string;
    helpText  ? : string;
    errorText ? : string;
}

export type SelectProps = Omit<CommonAndHTMLProps<SelectElementType>, keyof SelectCustomProps> & SelectCustomProps;

const SelectWithOptions = ({ options, className, ...props }: SelectProps) => {
    const renderOption = (option: OptionProps) => (
        <Element<OptionElementType> as="option" key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
        </Element>
    );

    const renderOptGroup = (group: OptGroupProps) => (
        <Element<HTMLOptGroupElement> as="optgroup" key={group.label} label={group.label}>
            {group.options.map(renderOption)}
        </Element>
    );

    return (
        <Element<HTMLDivElement> as="div" data-select className={className} disabled={props.disabled}>
            <Element<SelectElementType> as="select" {...props}>
                {options.map((option) =>
                    "options" in option ? renderOptGroup(option) : renderOption(option)
                )}
            </Element>
        </Element>
    );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<SelectElementType>) => {
    return <BaseInputComponent<SelectElementType> as={SelectWithOptions} ref={ref} {...props} />;
});
