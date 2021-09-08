import React from "react";

import { RadioButton } from "./RadioButton";
import { RadioGroupOption, RadioGroupProps } from "./constants";
import { Element } from "../../Element/Element";

export const RadioGroup = React.forwardRef(({ options, ...props }: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <Element as="div" ref={ref}>
            {options.map((option: RadioGroupOption, i: number) => {
                return <RadioButton key={i} {...props} {...option} />;
            })}
        </Element>
    );
});
