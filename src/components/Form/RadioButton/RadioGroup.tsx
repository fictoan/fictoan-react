import React from "react";

import { RadioButton } from "./RadioButton";
import { RadioGroupProps } from "./constants";
import { Element } from "../../Element/Element";

export const RadioGroup = React.forwardRef(({ options, ...props }: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <Element as="div" ref={ref}>
            {options.map((option: any, i: any) => {
                return <RadioButton key={i} {...props} {...option} />;
            })}
        </Element>
    );
});
