import React from "react";

import { Element } from "../../Element/Element";

import "./sliding-selector.css";
import { RadioButtonProps, RadioButtonElementType, RadioGroupProps } from "./constants";

export interface SlidingSelectorProps extends RadioButtonProps {
    options : RadioGroupProps[];
}

export const SlidingSelector = React.forwardRef(
    ({ options, onClick, ...props }: RadioGroupProps, ref: React.Ref<RadioButtonElementType>) => {
        return (
            <Element<RadioButtonElementType> as="div" data-sliding-selector ref={ref} onClick={onClick}>

                {options.map((option) => (
                    <React.Fragment key={option.id}>
                        <input type="radio" id={option.id} name={option.id} value={option.value} {...props} />
                        <label htmlFor={option.id}>{option.label}</label>
                    </React.Fragment>
                ))}
            </Element>
        );
    },
);
