import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { Div } from "../../Element/Tags";

import "./select.css";

import {
    OptionProps,
    OptGroupProps,
    SelectProps,
    OptionElementType,
    SelectElementType,
} from "./constants";

const SelectWithOptions = ({ options, className, ...props }: SelectProps) => {
    const renderOption = (option: OptionProps) => (
        <Element<OptionElementType> as="option" key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
        </Element>
    );

    const renderOptGroup = (group: OptGroupProps) => (
        <Element<HTMLOptGroupElement> as="optgroup" key={group.label} label={group.label}>
            {/* @ts-ignore */}
            {group.options.map(renderOption)}
        </Element>
    );

    return (
        <Div data-select className={className} disabled={props.disabled}>
            <Element<SelectElementType> as="select" {...props}>
                {options.map((option) =>
                    // @ts-ignore
                    "options" in option ? renderOptGroup(option) : renderOption(option)
                )}
            </Element>
        </Div>
    );
};

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<SelectElementType>) => {
    return (
        <BaseInputComponent<SelectElementType> as={SelectWithOptions} ref={ref} {...props} />
    );
});
