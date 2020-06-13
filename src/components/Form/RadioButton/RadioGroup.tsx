import React from "react";

import { RadioButton } from "./RadioButton";
import { RadioGroupProps } from "./constants";
import { Element } from "../../Element/Element";

export const RadioGroup = ({ options, ...props }: RadioGroupProps) => {
    return (
        <Element as="div">
            {
                options.map((option, i) => {
                    return (
                        <RadioButton key={i} {...props} {...option} />
                    );
                })
            }
        </Element>
    )
};
