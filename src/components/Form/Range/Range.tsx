import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import "./range.css";

export interface RangeCustomProps {
    min?: number;
    max?: number;
    step?: number;
}

export type RangeElementType = HTMLInputElement;
export type RangeProps = Omit<BaseInputComponentProps<RangeElementType>, "as"> & RangeCustomProps;

export const Range = React.forwardRef(({ ...props }: RangeProps, ref: React.Ref<RangeElementType>) => {
    return (
        <Element<RangeElementType> as="div" data-range ref={ref}>
            <BaseInputComponent as="input" type="range" {...props} />
        </Element>
    );
});

