import React from "react";

import { Element } from "../../Element/Element";

import "./sliding-selector.css";
import { RadioGroupProps } from "./constants";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

export interface SlidingSelectorProps extends RadioGroupProps {}

// export const SlidingSelector = React.forwardRef(
//     ({ options, onClick, ...props }: SlidingSelectorProps, ref: React.Ref<RadioButtonElementType>) => {
//         return (
//             <Element<RadioButtonElementType> as="div" data-sliding-selector ref={ref} onClick={onClick}>
//
//                 {options.map((option) => (
//                     <React.Fragment key={option.id}>
//                         <input type="radio" {...props} {...option} />
//                         <label htmlFor={option.id}>{option.label}</label>
//                     </React.Fragment>
//                 ))}
//             </Element>
//         );
//     },
// );
const SlidingSelectorOptions = ({ options, defaultValue, required, ...props }: SlidingSelectorProps) => {
    return (
        <Element as="div" data-sliding-selector required={required}>
            {options.map((option) => (
                <React.Fragment key={option.id}>
                    <input type="radio" {...props} {...option} />
                    <label htmlFor={option.id}>{option.label}</label>
                </React.Fragment>
            ))}
        </Element>
    );
};

export const SlidingSelector = React.forwardRef((props: SlidingSelectorProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <BaseInputComponent<HTMLDivElement> as={SlidingSelectorOptions} ref={ref} {...props} />
    );
});
