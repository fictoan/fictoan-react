import React from "react";

import { RadioButton } from "./RadioButton";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { RadioGroupProps } from "./constants";

const RadioGroupOptions = ({ options, defaultValue, required, ...props }: RadioGroupProps) => {
    return (
        <Element as="div" required={required}>
            {options.map((option, index) => {
                return <RadioButton key={index} {...props} {...option} />;
            })}
        </Element>
    );
};

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return <BaseInputComponent<HTMLDivElement> as={RadioGroupOptions} ref={ref} {...props} />;
});
