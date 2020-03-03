import React from "react";

import { RadioButton } from "./RadioButton";
import { RadioGroupProps } from "./constants";

export const RadioGroup = ({ options, ...props }: RadioGroupProps) => {
    return options.map((option, i) => {
        return <RadioButton key={i} {...props} {...option} />;
    });
};
