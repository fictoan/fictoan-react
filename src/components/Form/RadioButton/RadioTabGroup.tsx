import React from "react";

import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { SpacingTypes } from "@/components/Element/constants";
import { RadioGroupCustomProps, RadioGroupProps } from "./constants";

import "./radio-tab-group.css";

export interface RadioTabGroupProps extends RadioGroupCustomProps {
    size ? : SpacingTypes;
}

const RadioTabGroupOptions = ({ options, defaultValue, required, ...props }: RadioGroupProps) => {
    return (
        <Div data-radio-tab-group name={props.name} required={required}>
            {options.map((option) => (
                <React.Fragment key={option.id}>
                    <input type="radio" {...props} {...option} />
                    <label htmlFor={option.id}>{option.label}</label>
                </React.Fragment>
            ))}
        </Div>
    );
};

export const RadioTabGroup = React.forwardRef(({ size = "medium", ...props }: RadioTabGroupProps, ref: React.Ref<HTMLDivElement>) => {
    let classNames = [];

    if (size) {
        classNames.push(`size-${size}`);
    }

    return (
        <BaseInputComponent<HTMLDivElement> as={RadioTabGroupOptions} ref={ref} classNames={classNames} {...props} />
    );
});
