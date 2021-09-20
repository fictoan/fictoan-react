import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface InputLabelCustomProps {
    label   ? : string;
    htmlFor ? : string;
}

export type InputLabelElementType = HTMLLabelElement;
export type InputLabelProps = Omit<CommonAndHTMLProps<InputLabelElementType>, keyof InputLabelCustomProps> & InputLabelCustomProps;

export const InputLabel = React.forwardRef(
    ({ label, ...props }: InputLabelProps, ref: React.Ref<InputLabelElementType>) => {
        return (
            <Element<InputLabelElementType> as="label" ref={ref} {...props}>
                {label}
            </Element>
        );
    }
);
