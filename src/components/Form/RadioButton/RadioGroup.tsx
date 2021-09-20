import React from "react";

import { RadioButton } from "./RadioButton";
import { RadioGroupProps } from "./constants";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

const RadioGroupOptions = ({ options, defaultValue, ...props }: RadioGroupProps) => {
    return (
        <Element as="div">
            {options.map((option, index) => {
                return <RadioButton key={index} {...props} {...option} />;
            })}
        </Element>
    );
};

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return <BaseInputComponent<HTMLDivElement> as={RadioGroupOptions} ref={ref} {...props} />;
});
